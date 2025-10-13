import AboutMePreview from "@/components/modules/Home/AboutMePreview";
import Contact from "@/components/modules/Home/Contact";
import Hero from "@/components/modules/Home/Hero";
import LatestBlogs from "@/components/modules/Home/LatestBlogs";
import ProjectsShowcase from "@/components/modules/Home/ProjectsShowcase";
import { ProjectCardProps } from "@/types/projectTypes";
import React from "react";

const HomePage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blogs`, {
    next: {
      revalidate: 30,
    },
  });
  const result = await res.json();
  const blogs = result.data;

  const res1 = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/projects`, {
    next: {
      revalidate: 30,
    },
  });
  const result2 = await res1.json();
  const projects: ProjectCardProps[] = result2.data;


  return (
    <div>
      <Hero />
      <AboutMePreview />
      <ProjectsShowcase projects={projects} />
      <LatestBlogs blogs={blogs} />
      <Contact />
    </div>
  );
};

export default HomePage;
