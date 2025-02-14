import React from 'react';
import { Music } from 'lucide-react';
import BentoCard from './BentoCard.tsx';

const NowPlayingCard = () => {
  return (
    <BentoCard className="bg-green-100 p-4 flex flex-col items-start justify-between h-full">
      <div className="flex items-center gap-2">
        <Music className="w-5 h-5 text-green-400" />
        <span className="text-sm font-medium">Now Playing</span>
      </div>
      <div>
        <h3 className="text-base font-medium mb-1">Glimpse of Us</h3>
        <p className="text-sm text-gray-600">Joji</p>
      </div>
    </BentoCard>
  );
};

export default NowPlayingCard;
