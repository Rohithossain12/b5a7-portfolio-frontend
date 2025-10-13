import Link from "next/link";
import BlogCard from "@/components/modules/Blogs/BlogCard";
import { BlogCardProps } from "@/types/blogsTypes";

interface LatestBlogsProps {
  blogs: BlogCardProps[];
}

const LatestBlogs = ({ blogs }: LatestBlogsProps) => {
  return (
    <section className="py-8 px-6 lg:px-12 bg-white dark:bg-gray-900">
      <h2 className="text-2xl font-bold text-center mb-8 text-gray-800 dark:text-white">
        📰 Latest Blogs
      </h2>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.slice(0, 3).map((blog) => (
          <BlogCard key={blog.id} {...blog} />
        ))}
      </div>

     
      <div className="flex justify-center mt-10">
        <Link
          href="/blogs"
          className="inline-block bg-blue-600 text-white font-semibold px-4 py-2 rounded-2xl shadow-md hover:bg-blue-700 transition-all duration-300"
        >
          View All Blogs →
        </Link>
      </div>
    </section>
  );
};

export default LatestBlogs;
