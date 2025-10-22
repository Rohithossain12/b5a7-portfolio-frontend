"use client";

import { motion } from "framer-motion";

interface SpinnerProps {
  size?: "sm" | "md" | "lg";
  fullscreen?: boolean;
  label?: string;
}

const Spinner = ({ size = "md", fullscreen = false, label }: SpinnerProps) => {
  const sizeMap = {
    sm: "w-6 h-6 border-2",
    md: "w-10 h-10 border-3",
    lg: "w-16 h-16 border-4",
  };

  return (
    <div
      className={`flex flex-col items-center justify-center ${
        fullscreen ? "min-h-screen" : ""
      }`}
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear",
        }}
        className={`rounded-full border-t-transparent border-blue-500 ${sizeMap[size]}`}
        style={{ borderStyle: "solid" }}
      />
      {label && (
        <p className="mt-3 text-blue-600 font-medium animate-pulse">{label}</p>
      )}
    </div>
  );
};

export default Spinner;
