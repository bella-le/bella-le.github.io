import React from 'react';
import BentoCard from './BentoCard.tsx';

const IntroCard = () => {
  return (
    <BentoCard colSpan={2} className="flex items-center gap-6">
      <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
        {/* Avatar or icon */}
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">Hi, I'm Bella! 👋</h2>
        <p className="text-gray-600">Software Engineer based in San Francisco</p>
      </div>
    </BentoCard>
  );
};

export default IntroCard;
