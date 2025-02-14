import React from 'react';
import { MapPin } from 'lucide-react';
import BentoCard from './BentoCard.tsx';

const LocationCard = () => {
  return (
    <BentoCard className="bg-red-100 p-4 flex flex-col items-start justify-between h-full">
      <div className="flex items-center gap-2">
        <MapPin className="w-5 h-5 text-red-400" />
        <span className="text-sm font-medium">Current Location</span>
      </div>
      <div>
        <h3 className="text-base font-medium mb-1">San Francisco</h3>
        <p className="text-sm text-gray-600">California, USA</p>
      </div>
    </BentoCard>
  );
};

export default LocationCard;
