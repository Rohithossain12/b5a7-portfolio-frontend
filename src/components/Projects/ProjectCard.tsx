"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight, Globe } from "lucide-react";
import { ProjectCardProps } from "@/types/projectTypes";

const ProjectCard = ({
  id,
  title,
  description,
  technologies = [],
  liveUrl,
  frontendUrl,
  backendUrl,
  thumbnail,
}: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white shadow-md rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300 flex flex-col"
    >
   
      <div className="relative w-full h-48  md:h-60 bg-gray-100 flex items-center justify-center">
        {thumbnail ? (
          <Image
            src={thumbnail}
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
          <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
          <p className="text-gray-600 text-sm mt-2 line-clamp-3">
            {description}
          </p>

          {technologies.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-blue-50 text-blue-600 text-xs font-medium px-3 py-1 rounded-full border border-blue-100"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>

       
        <div className="mt-5 flex flex-col gap-3">
          <div className="flex gap-4 flex-wrap">
            {liveUrl ? (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 transition"
              >
                <Globe size={16} />
                Live Demo
              </a>
            ) : (
              <span className="flex items-center gap-1 text-sm text-gray-400 cursor-not-allowed">
                <Globe size={16} />
                Live Demo
              </span>
            )}

            {frontendUrl ? (
              <a
                href={frontendUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-green-600 hover:text-green-800 transition"
              >
                <ExternalLink size={16} />
                Frontend
              </a>
            ) : (
              <span className="flex items-center gap-1 text-sm text-gray-400 cursor-not-allowed">
                <ExternalLink size={16} />
                Frontend
              </span>
            )}

            {backendUrl ? (
              <a
                href={backendUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-gray-700 hover:text-gray-900 transition"
              >
                <Github size={16} />
                Backend
              </a>
            ) : (
              <span className="flex items-center gap-1 text-sm text-gray-400 cursor-not-allowed">
                <Github size={16} />
                Backend
              </span>
            )}
          </div>

          
          <div className="flex justify-end">
            <Link
              href={`/projects/${id}`}
              className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 transition font-medium"
            >
              View Details <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
