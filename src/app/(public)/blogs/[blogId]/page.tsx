import Image from "next/image";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { blogId: string };
}): Promise<Metadata> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API}/blogs/${params.blogId}`,
    { cache: "no-store" }
  );

  const result = await res.json();
  const blog = result?.data;

  if (!blog) {
    return {
      title: "Blog Not Found | Rohit Portfolio",
      description: "The requested blog could not be found.",
    };
  }

  return {
    title: `${blog.title} | Rohit Portfolio`,
    description:
      blog.description ||
      blog.content?.slice(0, 150) + "..." ||
      "Read insightful articles from Md Rohit Hossain's portfolio.",
  };
}

const BlogDetailsPage = async ({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) => {
  const { blogId } = await params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API}/blogs/${blogId}`,
    {
      cache: "no-store",
    }
  );

  const result = await res.json();
  const blog = result.data;

  if (!blog) {
    return (
      <div className="min-h-screen flex justify-center items-center text-gray-600">
        Blog not found 😕
      </div>
    );
  }

  return (
    <section className="max-w-4xl mx-auto py-10 px-6">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
        {blog.title}
      </h1>

      <p className="text-gray-600 dark:text-gray-400 mb-6">
        ✍️ By {blog.author || "Unknown Author"}
      </p>

      {blog.coverUrl && (
        <div className="relative w-full h-80 md:h-96 mb-6">
          <Image
            src={blog.coverUrl}
            alt={blog.title}
            fill
            className="object-cover rounded-xl shadow-md"
            priority
          />
        </div>
      )}

      <article className="prose prose-lg dark:prose-invert max-w-none text-gray-800 dark:text-gray-300 leading-relaxed">
        {blog.content}
      </article>
    </section>
  );
};

export default BlogDetailsPage;
