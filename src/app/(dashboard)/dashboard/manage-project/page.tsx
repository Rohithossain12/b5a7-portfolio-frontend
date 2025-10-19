import Image from "next/image";
import { ProjectCardProps } from "@/types/projectTypes";
import { Metadata } from "next";
import { Edit, Trash2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Manage Projects | Rohit Portfolio",
  description:
    "Manage, edit, and organize projects on Md Rohit Hossain's portfolio dashboard. Keep your project showcase up to date easily.",
};

const ManageProjectPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/projects`, {
    next: { tags: ["PROJECTS"] },
  });
  const result = await res.json();
  const projects: ProjectCardProps[] = result.data;

  return (
    <section className="max-w-6xl mx-auto px-4 ">
      <h1 className="text-xl md:text-2xl font-bold mb-6 text-center sm:text-left text-blue-500">
        Manage Projects
      </h1>

      <div className="overflow-x-auto rounded-2xl shadow">
        <table className="min-w-full text-sm text-gray-700">
          <thead className="bg-gray-100 text-gray-800">
            <tr>
              <th className="p-3 text-left">#</th>
              <th className="p-3 text-left">Thumbnail</th>
              <th className="p-3 text-left">Title</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {projects && projects.length > 0 ? (
              projects.map((project, index) => (
                <tr
                  key={project.id || index}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="p-3">{index + 1}</td>

                  <td className="p-3">
                    <div className="relative w-16 h-16 rounded-lg overflow-hidden">
                      <Image
                        src={project.thumbnail || "/placeholder.png"}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </td>

                  <td className="p-3 font-medium">{project.title}</td>

                  <td className="p-3 text-center flex justify-center gap-4">
                    <button className="text-blue-600 hover:text-blue-800 transition">
                      <Edit size={18} />
                    </button>
                    <button className="text-red-600 hover:text-red-800 transition">
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
                  No projects found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ManageProjectPage;
