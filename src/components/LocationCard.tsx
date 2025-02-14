import React from 'react';
import { ArrowUpRight, MapPin } from 'lucide-react';
import BentoCard from './BentoCard.tsx';

const LocationCard = () => {
  return (
    <BentoCard className="bg-custom-cyan/20 backdrop-blur-sm p-4 flex flex-col items-start justify-between h-full">
      <div className="flex items-center gap-2">
        <MapPin className="w-5 h-5 text-custom-cyan" />
        <span className="text-xs font-medium italic">currently</span>
      </div>
      <div className="w-full">
        <a 
          href="https://www.google.com/maps/place/Hayes+Valley,+San+Francisco,+CA/@37.7764644,-122.4296666,17z/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-start justify-between w-full"
        >
          <div className="transition-all duration-300 ease-in-out">
            <h3 className="text-sm font-medium mb-1 transition-colors duration-300 ease-in-out group-hover:text-custom-blue">San Francisco</h3>
            <p className="text-xs text-gray-600 italic transition-colors duration-300 ease-in-out group-hover:text-custom-blue">California, USA</p>
          </div>
          <ArrowUpRight className="w-4 h-4 text-custom-blue" />
        </a>
      </div>
    </BentoCard>
  );
};

export default LocationCard;
