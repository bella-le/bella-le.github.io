import React from 'react';
import IntroCard from './components/IntroCard.tsx';
import LocationCard from './components/LocationCard.tsx';
import NowPlayingCard from './components/NowPlayingCard.tsx';
import ProjectsCard from './components/ProjectsCard.tsx';
import styles from './components/BentoGrid.module.css';
import SocialsCard from './components/SocialsCard.tsx';

const BentoPortfolio = () => {
  return (
    <div className="max-w-[900px] mx-auto px-4 py-6 min-h-screen">
      {/* Logo */}
      <div className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent mb-6">
        yourname
      </div>

      {/* Bento Grid Layout */}
      <div className={styles.bentoGrid}>
        <IntroCard />
        <LocationCard />
        <NowPlayingCard />
        <SocialsCard />
        <ProjectsCard />
      </div>
    </div>
  );
};

export default BentoPortfolio;
