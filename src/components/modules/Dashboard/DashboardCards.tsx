
"use client"; 

import { motion } from "framer-motion";

interface DashboardCardsProps {
  blogsCount: number;
  projectsCount: number;
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};

export default function DashboardCards({ blogsCount, projectsCount }: DashboardCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <motion.div
        className="bg-white shadow rounded-2xl p-6 flex flex-col justify-between border border-gray-200 text-center"
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
      >
        <h2 className="text-xl font-semibold text-gray-800">Total Blogs</h2>
        <p className="text-gray-500 mt-2">You have created <span className="font-bold">{blogsCount}</span> blogs</p>
        <div className="mt-4 text-3xl font-bold text-blue-600">{blogsCount}</div>
      </motion.div>

      <motion.div
        className="bg-white shadow rounded-2xl p-6 flex flex-col justify-between border border-gray-200 text-center"
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
      >
        <h2 className="text-xl font-semibold text-gray-800">Total Projects</h2>
        <p className="text-gray-500 mt-2">You have added <span className="font-bold">{projectsCount}</span> projects</p>
        <div className="mt-4 text-3xl font-bold text-green-600">{projectsCount}</div>
      </motion.div>
    </div>
  );
}
