import ProjectDetails from "@/components/Projects/ProjectDetails";
import type { Metadata } from "next";


export async function generateMetadata({
  params,
}: {
  params: { projectId: string };
}): Promise<Metadata> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API}/projects/${params.projectId}`,
    { cache: "no-store" }
  );

  const result = await res.json();
  const project = result?.data;

  if (!project) {
    return {
      title: "Project Not Found | Rohit Portfolio",
      description: "The requested project could not be found.",
    };
  }

  return {
    title: `${project.title} | Rohit Portfolio`,
    description: project.description || "View project details and features.",
  };
}

const ProjectDetailsPage = async ({
  params,
}: {
  params: { projectId: string };
}) => {
  const { projectId } = params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API}/projects/${projectId}`,
    { cache: "no-store" }
  );

  const result = await res.json();
  const project = result.data;

  if (!project) {
    return (
      <div className="flex justify-center items-center min-h-[60vh] text-gray-500 text-lg">
        Project not found 😕
      </div>
    );
  }

  return <ProjectDetails project={project} />;
};

export default ProjectDetailsPage;
