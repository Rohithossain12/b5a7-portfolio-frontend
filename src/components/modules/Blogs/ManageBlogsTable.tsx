"use client";

import Image from "next/image";
import { useState } from "react";
import { Edit, Trash2 } from "lucide-react";
import { toast, Toaster } from "sonner";
import { BlogCardProps } from "@/types/blogsTypes";
import UpdateBlogForm from "./UpdateBlogForm";
interface ManageBlogsTableProps {
  blogs: BlogCardProps[];
}

const ManageBlogsTable = ({ blogs }: ManageBlogsTableProps) => {
  const [blogList, setBlogList] = useState(blogs);
  const [editingBlogId, setEditingBlogId] = useState<string | null>(null);

  const handleDelete = async (id: string) => {
    toast.custom((t) => (
      <div className="p-4 bg-white rounded-xl shadow-md border border-gray-200 text-center">
        <p className="text-gray-800 font-medium mb-3">
          Are you sure you want to delete this blog?
        </p>
        <div className="flex justify-center gap-3">
          <button
            onClick={async () => {
              toast.dismiss(t);
              try {
                const res = await fetch(
                  `${process.env.NEXT_PUBLIC_BASE_API}/blogs/${id}`,
                  {
                    method: "DELETE",
                  }
                );
                const data = await res.json();

                if (res.ok && data.success) {
                  toast.success("Blog deleted successfully!");
                  setBlogList((prev) => prev.filter((b) => b.id !== id));
                } else {
                  toast.error(data.message || "Failed to delete blog!");
                }
              } catch (error) {
                console.log(error);
                toast.error("Something went wrong while deleting!");
              }
            }}
            className="px-4 py-2 text-sm bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
          >
            Yes, Delete
          </button>
          <button
            onClick={() => toast.dismiss(t)}
            className="px-4 py-2 text-sm bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
          >
            Cancel
          </button>
        </div>
      </div>
    ));
  };

  if (editingBlogId) {
    return <UpdateBlogForm blogId={editingBlogId} />;
  }

  return (
    <>
      <Toaster richColors position="top-center" />
      <div className="overflow-x-auto rounded-2xl shadow ">
        <table className="min-w-full text-sm text-gray-700">
          <thead className="bg-gray-100 text-gray-800">
            <tr>
              <th className="p-3 text-left">#</th>
              <th className="p-3 text-left">Cover</th>
              <th className="p-3 text-left">Title</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {blogList.length > 0 ? (
              blogList.map((blog, index) => (
                <tr
                  key={blog.id || index}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="p-3">{index + 1}</td>
                  <td className="p-3">
                    <div className="relative w-16 h-16 rounded-lg overflow-hidden">
                      <Image
                        src={blog.coverUrl || "/placeholder.png"}
                        alt={blog.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </td>
                  <td className="p-3 font-medium">{blog.title}</td>
                  <td className="p-3 text-center flex justify-center gap-4">
                    <button
                      className="text-blue-600 hover:text-blue-800 transition"
                      onClick={() => setEditingBlogId(blog.id)}
                    >
                      <Edit size={18} />
                    </button>
                    <button
                      onClick={() => handleDelete(blog.id)}
                      className="text-red-600 hover:text-red-800 transition"
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={4}
                  className="text-center py-6 text-gray-500 font-medium"
                >
                  No blogs found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ManageBlogsTable;
