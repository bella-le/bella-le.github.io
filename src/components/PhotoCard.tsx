import React from 'react';
import BentoCard from './BentoCard.tsx';
import { ArrowUpRight } from 'lucide-react';

const PhotoCard = () => {
  return (
    <BentoCard className="!p-0 !bg-transparent overflow-hidden relative group h-full">
      <a
        href="https://unsplash.com/@ujitomo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full h-full"
      >
        <div className="w-full h-full">
          <img
            src="/img/tomoko-uji.jpg"
            alt="by Tomoko Uji"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-1">
            <p className="text-white text-sm font-small">Tomoko Uji</p>
            <ArrowUpRight className="w-4 h-4 text-white" />
          </div>
        </div>
      </a>
    </BentoCard>
  );
};

export default PhotoCard;
