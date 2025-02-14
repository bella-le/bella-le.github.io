import React from 'react';
import IntroCard from './components/IntroCard.tsx';
import LocationCard from './components/LocationCard.tsx';
import NowPlayingCard from './components/NowPlayingCard.tsx';
import ProjectsCard from './components/ProjectsCard.tsx';
import styles from './components/BentoGrid.module.css';
import SocialsCard from './components/SocialsCard.tsx';
import BlogCard from './components/BlogCard.tsx';
import NowCard from './components/NowCard.tsx';
import CalendlyCard from './components/CalendlyCard.tsx';
import PhotoCard from './components/PhotoCard.tsx';

const BentoPortfolio = () => {
  return (
    <div className="max-w-[900px] mx-auto px-4 py-6 min-h-screen backdrop-blur-sm">
      {/* Logo */}
      <div className="flex mb-6 pl-4">
        <div className="text-2xl font-bold font-sans bg-gradient-to-r from-custom-rose via-custom-purple to-custom-blue bg-clip-text text-transparent shine-effect px-2">
          bella ✨
        </div>
      </div>

      {/* Bento Grid Layout */}
      <div className={styles.bentoGrid}>
        <IntroCard />
        <LocationCard />
        <NowPlayingCard />
        <NowCard />
        <ProjectsCard />
        <PhotoCard />
        <CalendlyCard />
        <BlogCard />
        <SocialsCard />
      </div>
    </div>
  );
};

export default BentoPortfolio;
