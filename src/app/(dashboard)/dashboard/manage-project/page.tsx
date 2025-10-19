
import { Metadata } from "next";
import { ProjectCardProps } from "@/types/projectTypes";
import ManageProjectsTable from "@/components/Projects/ManageProjectsTable";

export const metadata: Metadata = {
  title: "Manage Projects | Rohit Portfolio",
  description:
    "Manage, edit, and organize projects on Md Rohit Hossain's portfolio dashboard.",
};

const ManageProjectPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/projects`, {
    next: { tags: ["PROJECTS"] },
  });
  const result = await res.json();
  const projects: ProjectCardProps[] = result.data;

  return (
    <section className="max-w-6xl mx-auto px-4">
      <h1 className="text-xl md:text-2xl font-bold mb-6 text-center sm:text-left text-blue-500">
        Manage Projects
      </h1>
     
      <ManageProjectsTable projects={projects} />
    </section>
  );
};

export default ManageProjectPage;
