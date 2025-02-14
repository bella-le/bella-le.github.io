import React from 'react';
import BentoCard from './BentoCard.tsx';

const IntroCard = () => {
  return (
    <BentoCard colSpan={2} className="flex items-center gap-6">
      <div className="w-20 h-20 rounded-full flex-shrink-0 overflow-hidden ring-2 ring-custom-rose/20">
        <img 
          src="/img/bella-headshot.png" 
          alt="Bella's headshot" 
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <h2 className="text-lg font-medium mb-2 italic">hi, i'm Bella! 👋</h2>
        <p className="text-xs text-gray-400">she/her</p>
        <p className="text-xs text-gray-600">tea-powered yappy full-stack developer living in San Francisco with 🐈🐈‍⬛</p>
      </div>
    </BentoCard>
  );
};

export default IntroCard;
