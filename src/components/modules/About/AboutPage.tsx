"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SkillBar from "./SkillBar";



export const revalidate = false;

export default function AboutPage() {
  const skills = [
    { name: "HTML & CSS", level: 95 },
    { name: "JavaScript (ES6+)", level: 90 },
    { name: "TypeScript", level: 88 },
    { name: "React / Next.js", level: 92 },
    { name: "Node.js / Express", level: 88 },
    { name: "MongoDB / Prisma", level: 85 },
    { name: "PostgreSQL", level: 80 },
    { name: "Redux", level: 87 },
    { name: "Firebase / Auth", level: 84 },
    { name: "Tailwind CSS", level: 93 },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-8 md:py-12 text-gray-800 dark:text-gray-100">
  
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl md:text-4xl  font-bold text-center mb-14  text-blue-500"
      >
        About Me
      </motion.h1>

 
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-white/5 backdrop-blur-md border border-gray-200/20 dark:border-gray-700/40 rounded-2xl p-8 shadow-lg hover:shadow-xl transition"
      >
        <p className="mb-4 leading-relaxed text-lg">
          👋 Hi, I’m <strong className="text-blue-500">Md Rohit Hossain</strong>
          , a passionate <strong>Full Stack Developer</strong> from Bangladesh.
          I enjoy creating dynamic, responsive, and user-friendly web
          applications using modern technologies.
        </p>
        <p className="mb-4 leading-relaxed text-lg">
          🎓 I’m pursuing my Honours degree in <strong>Sociology</strong> while
          constantly improving my technical and creative skills in software
          development.
        </p>
        <p className="leading-relaxed text-lg">
          🚀 My goal is to turn ideas into beautiful, performant, and accessible
          web experiences that make a real impact.
        </p>
      </motion.div>

     
      <div className="grid md:grid-cols-2 gap-10 mt-14">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="p-6 rounded-xl bg-white/5 backdrop-blur-md border border-gray-200/20 shadow-lg hover:shadow-xl transition"
        >
          <h2 className="text-2xl font-semibold mb-4 text-blue-400">
            🎓 Education
          </h2>
          <p className="font-medium">
            Bachelor of Social Science (Honours) in Sociology
          </p>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Pabna, Dhaka, Bangladesh
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="p-6 rounded-xl bg-white/5 backdrop-blur-md border border-gray-200/20 shadow-lg hover:shadow-xl transition"
        >
          <h2 className="text-2xl font-semibold mb-4 text-purple-400">
            💼 Experience
          </h2>
          <p className="font-medium">Frontend Developer — Freelance Projects</p>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            React, Next.js, Tailwind, MongoDB, Redux
          </p>
        </motion.div>
      </div>

      {/* Skills */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-16"
      >
        <h2 className="text-3xl font-semibold mb-6 text-center text-gradient bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
          Technical Skills
        </h2>
        <div className="space-y-4 max-w-3xl mx-auto">
          {skills.map((skill, index) => (
            <SkillBar key={index} name={skill.name} level={skill.level} />
          ))}
        </div>
      </motion.div>

      {/* Resume Button */}
      <div className="text-center mt-14">
        <Link
          href="/resume.pdf"
          target="_blank"
          className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:opacity-90 transition duration-300"
        >
          📄 Download Resume
        </Link>
      </div>
    </section>
  );
}
