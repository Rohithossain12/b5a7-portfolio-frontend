"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BlogCardProps } from "@/types/blogsTypes";

const BlogCard = ({ id, title, excerpt, coverUrl, createdAt }: BlogCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white shadow-md rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300 flex flex-col"
    >
    
      <div className="relative w-full h-48 md:h-60 bg-gray-100 flex items-center justify-center">
        {coverUrl ? (
          <Image
            src={coverUrl}
            alt={title}
            fill
            className="object-cover w-full h-full"
            priority
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500 text-sm">
            No Image Available
          </div>
        )}
      </div>

     
      <div className="p-5 flex flex-col flex-grow">
        <div>
          <h2 className="text-xl font-semibold text-gray-800 line-clamp-1">
            {title}
          </h2>
          <p className="text-gray-600 text-sm mt-2 line-clamp-3">{excerpt}</p>
        </div>

       
        <div className="mt-5 flex justify-between items-center">
          <p className="text-xs text-gray-400">
            {new Date(createdAt).toLocaleDateString()}
          </p>
          <Link
            href={`/blogs/${id}`}
            className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 transition font-medium"
          >
            Read More →
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogCard;
