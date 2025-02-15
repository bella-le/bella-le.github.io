import React from 'react';
import { Calendar, ArrowUpRight } from 'lucide-react';
import BentoCard from './BentoCard.tsx';

const CalendlyCard = () => {
  return (
    <BentoCard className="backdrop-blur-sm p-4 flex flex-col items-start justify-between h-full">
      <div className="flex items-center gap-2">
        <Calendar className="w-5 h-5 text-custom-gold" />
        <span className="text-xs font-medium italic">calendly</span>
      </div>
      <a 
        href="https://calendly.com/bellale"
        target="_blank"
        rel="noopener noreferrer"
        className="group w-full"
      >
        <div className="flex items-start justify-between w-full">
          <div className="transition-all duration-300 ease-in-out">
            <h3 className="text-sm font-medium mb-1 transition-all duration-300 ease-in-out group-hover:text-custom-gold/100">let's chat!</h3>
            <p className="text-xs text-gray-600 italic transition-all duration-300 ease-in-out group-hover:text-custom-gold/90">
              mentorship, projects, yaps
            </p>
          </div>
          <ArrowUpRight className="w-6 h-6 text-custom-gold transition-all duration-300 ease-in-out group-hover:text-custom-gold/100" />
        </div>
      </a>
    </BentoCard>
  );
};

export default CalendlyCard;
