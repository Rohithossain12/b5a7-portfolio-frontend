import ProjectCard, {

} from "@/components/Projects/ProjectCard";
import { ProjectCardProps } from "@/types/projectTypes";

const ProjectPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/projects`, {
    next: {
      revalidate: 30,
    },
  });
  const result = await res.json();
  const projects: ProjectCardProps[] = result.data;

  return (
    <section className="py-10 px-6 lg:px-12 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
         💻 All Projects
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
