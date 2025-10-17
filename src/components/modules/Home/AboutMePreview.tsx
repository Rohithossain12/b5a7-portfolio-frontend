"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const AboutMePreview = () => {
  return (
    <div className="bg-white">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-3xl mx-auto py-6 md:py-8 "
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-3 text-blue-500  ">
          About Me
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg md:text-xl  ">
          I’m a passionate developer who loves solving real-world problems using
          technology. I focus on building user-friendly, secure, and performant
          web applications.
        </p>
        <Link
          href="/about"
          className="inline-block bg-[#2563EB] text-white px-4 py-2 rounded-lg shadow-md hover:bg-[#2563EB] transition"
        >
          Read More
        </Link>

       
      </motion.section>
    </div>
  );
};

export default AboutMePreview;
