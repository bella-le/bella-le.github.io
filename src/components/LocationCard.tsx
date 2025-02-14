import React from 'react';
import { MapPin } from 'lucide-react';
import BentoCard from './BentoCard.tsx';

const LocationCard = () => {
  return (
    <BentoCard className="bg-custom-cyan/20 backdrop-blur-sm p-4 flex flex-col items-start justify-between h-full">
      <div className="flex items-center gap-2">
        <MapPin className="w-5 h-5 text-custom-cyan" />
        <span className="text-xs font-medium italic">currently</span>
      </div>
      <div>
        <h3 className="text-sm font-medium mb-1">San Francisco</h3>
        <p className="text-xs text-gray-600 italic">California, USA</p>
      </div>
    </BentoCard>
  );
};

export default LocationCard;
