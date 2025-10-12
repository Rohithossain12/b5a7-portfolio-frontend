"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BlogCardProps } from "@/types/blogsTypes";
import Image from "next/image";
import Link from "next/link";


const BlogCard = ({ id, title, excerpt, coverUrl, createdAt }: BlogCardProps) => {
  return (
    <Card className="overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 rounded-2xl">
      <div className="relative w-full h-48">
        <Image
          src={coverUrl || "/default-blog.jpg"}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-lg font-semibold line-clamp-1 text-gray-800">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 text-sm line-clamp-3 mb-4">{excerpt}</p>
        <div className="flex justify-between items-center">
          <p className="text-xs text-gray-400">
            {new Date(createdAt).toLocaleDateString()}
          </p>
          <Link
            href={`/blogs/${id}`}
            className="text-sm font-medium text-blue-600 hover:text-blue-800 transition"
          >
            Read More →
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
