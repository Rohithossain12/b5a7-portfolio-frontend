import AboutPage from "@/components/modules/About/AboutPage";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About Me | Rohit Portfolio",
  description: "Learn more about Md Rohit Hossain - Full Stack Developer",
};

const AboutDetailsPage = () => {
  return (
    <div>
      <AboutPage />
    </div>
  );
};

export default AboutDetailsPage;
