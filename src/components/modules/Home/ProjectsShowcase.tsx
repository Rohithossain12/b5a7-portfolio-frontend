import ProjectCard from "@/components/Projects/ProjectCard";
import { ProjectCardProps } from "@/types/projectTypes";
import Link from "next/link";

interface LatestProjectsProps {
  projects: ProjectCardProps[];
}

const ProjectsShowcase = ({ projects }: LatestProjectsProps) => {
  return (
    <section className=" py-8 px-6 lg:px-12 bg-white dark:bg-gray-900">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-blue-500">
        📰 Latest Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.slice(0, 3).map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <Link
          href="/projects"
          className="inline-block bg-[#2563EB] text-white font-semibold px-4 py-2 rounded-2xl shadow-md hover:bg-[#2563EB] transition-all duration-300"
        >
          View All Projects →
        </Link>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
