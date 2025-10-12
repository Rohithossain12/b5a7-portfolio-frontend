import AboutMePreview from '@/components/modules/Home/AboutMePreview';
import Contact from '@/components/modules/Home/Contact';
import Hero from '@/components/modules/Home/Hero';
import LatestBlogs from '@/components/modules/Home/LatestBlogs';
import ProjectsShowcase from '@/components/modules/Home/ProjectsShowcase';
import React from 'react';

const HomePage = () => {
    return (
        <div>
          <Hero/>  
          <AboutMePreview/>
          <ProjectsShowcase/>
          <LatestBlogs/>
          <Contact/>
        </div>
    );
};

export default HomePage;