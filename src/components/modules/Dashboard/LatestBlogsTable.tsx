"use client";

import { BlogCardProps } from "@/types/blogsTypes";
import Image from "next/image";


interface LatestBlogsTableProps {
  blogs: BlogCardProps[];
}

export default function LatestBlogsTable({ blogs }: LatestBlogsTableProps) {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-4">Latest Blogs</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-xl shadow">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3 text-left">#</th>
              <th className="p-3 text-left">Cover</th>
              <th className="p-3 text-left">Title</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog, index) => (
              <tr key={blog.id} className="border-t">
                <td className="p-3">{index + 1}</td>
                <td className="p-3">
                  {blog.coverUrl ? (
                    <Image
                      src={blog.coverUrl}
                      alt={blog.title}
                      width={48}
                      height={48}
                      className="rounded object-cover"
                    />
                  ) : (
                    <span className="text-gray-400">No Image</span>
                  )}
                </td>
                <td className="p-3">{blog.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
