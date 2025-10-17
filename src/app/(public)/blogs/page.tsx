import BlogCard from "@/components/modules/Blogs/BlogCard";
import { BlogCardProps } from "@/types/blogsTypes";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs | Rohit Portfolio",
  description:
    "Read all blogs by Md Rohit Hossain — Full Stack Developer sharing insights, tutorials, and web development tips on React, Next.js, TypeScript, Tailwind CSS, Node.js, and Prisma.",
};

const BlogPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blogs`, {
    next: {
      revalidate: 30,
    },
  });
  const result = await res.json();
  const blogs = result.data;

  return (
    <section className="py-10 px-6 lg:px-12 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-10 text-blue-500">
        All Blogs
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog: BlogCardProps) => (
          <BlogCard key={blog.id} {...blog} />
        ))}
      </div>
    </section>
  );
};

export default BlogPage;
