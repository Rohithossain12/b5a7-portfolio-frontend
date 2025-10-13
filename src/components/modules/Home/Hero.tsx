"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Send } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 px-6 pt-4 md:pt-0">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4"
      >
        Hi, I’m
        <TypeAnimation
          sequence={[" Md Rohit Hossain", 4000, "", 1000]}
          speed={{ type: "keyStrokeDelayInMs", value: 250 }}
          repeat={Infinity}
          wrapper="span"
          className="text-blue-600"
        />
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mb-8"
      >
        A passionate{" "}
        <span className="font-semibold text-blue-500">
          Full Stack Developer
        </span>{" "}
        skilled in building modern, responsive, and scalable web applications
        using React, Next.js, Node.js, and MongoDB.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.7 }}
        className="flex flex-wrap gap-4 justify-center"
      >
        <Link
          href="/projects"
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
        >
          View My Projects <ArrowRight className="w-5 h-5" />
        </Link>

        <Link
          href="/contact"
          className="flex items-center gap-2 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-2xl font-semibold transition-all duration-300"
        >
          Contact Me <Send className="w-5 h-5" />
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="mt-10"
      >
        <Image
          src="https://res.cloudinary.com/dibooxmnd/image/upload/v1759748780/portfolio/blogs/nuz8dfzvgzoo0v25dwot.jpg"
          alt="Md Rohit Hossain"
          width={208}
          height={208}
          className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover border-4 border-blue-500 shadow-lg"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
