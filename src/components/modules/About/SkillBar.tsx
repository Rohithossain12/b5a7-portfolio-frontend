"use client";
import { motion } from "framer-motion";

interface SkillBarProps {
  name: string;
  level: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, level }) => {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="font-medium text-gray-800 dark:text-gray-200">{name}</span>
        <span className="text-gray-500 dark:text-gray-400">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1 }}
          className="bg-[#2563EB] h-3 rounded-full"
        />
      </div>
    </div>
  );
};

export default SkillBar;
