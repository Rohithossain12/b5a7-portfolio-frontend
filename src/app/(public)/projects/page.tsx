import ProjectCard from "@/components/Projects/ProjectCard";
import { ProjectCardProps } from "@/types/projectTypes";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Rohit Portfolio",
  description:
    "Explore all projects by Md Rohit Hossain — Full Stack Developer specializing in React, Next.js, TypeScript, Tailwind CSS, Node.js, and Prisma.",
};

const ProjectPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/projects`, {
    next: {
      tags:["PROJECTS"],
    },
  });
  const result = await res.json();
  const projects: ProjectCardProps[] = result.data;

  return (
    <section className="py-6 md:py-10 px-4 lg:px-12 bg-gray-50 min-h-screen">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8 text-blue-500">
        All Projects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectPage;
