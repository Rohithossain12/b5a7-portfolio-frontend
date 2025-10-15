"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Code, Wrench, Globe } from "lucide-react"; 
import { ProjectProps } from "@/types/projectTypes";

const ProjectDetails = ({ project }: ProjectProps) => {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {project.thumbnail && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-full h-64 sm:h-80 md:h-96 overflow-hidden rounded-2xl shadow-lg"
        >
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover hover:scale-105 transition-transform duration-700"
          />
        </motion.div>
      )}

      <div className="mt-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4"
        >
          {project.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 dark:text-gray-300 text-base leading-relaxed"
        >
          {project.description}
        </motion.p>
      </div>

      {project.features?.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8"
        >
          <h2 className="text-2xl font-semibold mb-3 flex items-center gap-2">
            <Wrench className="w-5 h-5 text-blue-600" /> Key Features
          </h2>
          <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </motion.div>
      )}

      {project.technologies?.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8"
        >
          <h2 className="text-2xl font-semibold mb-3 flex items-center gap-2">
            <Code className="w-5 h-5 text-green-600" /> Technologies Used
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm font-medium rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      )}

     
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-10 flex flex-wrap gap-4"
      >
        {project.liveUrl && (
          <Link
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-600 text-white rounded-full hover:bg-green-700 transition"
          >
            <Globe className="w-4 h-4" />
            Live Site
          </Link>
        )}

        {project.frontendUrl && (
          <Link
            href={project.frontendUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
          >
            <ExternalLink className="w-4 h-4" />
            Frontend
          </Link>
        )}

        {project.backendUrl && (
          <Link
            href={project.backendUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition"
          >
            <ExternalLink className="w-4 h-4" />
            Backend
          </Link>
        )}
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-10 text-sm text-gray-500 dark:text-gray-400"
      >
        Created on {new Date(project.createdAt).toLocaleDateString()} | Last
        updated on {new Date(project.updatedAt).toLocaleDateString()}
      </motion.p>
    </section>
  );
};

export default ProjectDetails;
