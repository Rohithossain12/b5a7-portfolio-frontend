const ProjectDetailsPage = async ({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) => {
  const { projectId } = await params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API}/projects/${projectId}`,
    {
      cache: "no-store",
    }
  );

  const result = await res.json();
  const project = result.data;

  if (!project) {
    return <div>Project not found 😕</div>;
  }

  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
    </div>
  );
};

export default ProjectDetailsPage;
