
import { Metadata } from "next";

import ManageBlogsTable from "@/components/modules/Blogs/ManageBlogsTable";
export const metadata: Metadata = {
  title: "Manage Blogs | Rohit Portfolio",
  description:
    "Manage, edit, and delete blogs from Md Rohit Hossain's portfolio dashboard. Keep your blog section updated and organized.",
};

const ManageBlogPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blogs`, {
    next: { tags: ["BLOGS"] },
  });
  const result = await res.json();
  const blogs = result.data;

  return (
    <section className="max-w-6xl mx-auto px-4 ">
      <h1 className="text-xl md:text-2xl font-bold mb-6 text-center sm:text-left text-blue-500">
        Manage Blogs
      </h1>

      <ManageBlogsTable blogs={blogs} />
    </section>
  );
};

export default ManageBlogPage;
