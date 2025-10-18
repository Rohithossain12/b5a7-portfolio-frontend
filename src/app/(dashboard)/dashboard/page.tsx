import DashboardCards from "@/components/modules/Dashboard/DashboardCards";
import LatestBlogsTable from "@/components/modules/Dashboard/LatestBlogsTable";
import LatestProjectTable from "@/components/modules/Dashboard/LatestProjectTable";
import { ProjectCardProps } from "@/types/projectTypes";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | Rohit Portfolio",
  description:
    "Owner Dashboard for Md Rohit Hossain's portfolio — manage projects, blogs, and other content securely.",
};

const DashboardHomePage = async () => {
  const resBlogs = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blogs`, {
    next: { revalidate: 30 },
  });
  const blogs = (await resBlogs.json()).data || [];

  const resProjects = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API}/projects`,
    { next: { tags: ["PROJECTS"] } }
  );
  const projects: ProjectCardProps[] = (await resProjects.json()).data || [];

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <DashboardCards
        blogsCount={blogs.length}
        projectsCount={projects.length}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <LatestBlogsTable blogs={blogs} />
        <LatestProjectTable projects={projects} />
      </div>
    </div>
  );
};

export default DashboardHomePage;
