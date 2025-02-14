import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import BentoCard from './BentoCard.tsx';

const BlogCard = () => {
  return (
    <BentoCard colSpan={2} className="bg-custom-rose-light/20 backdrop-blur-sm p-6">
      <a 
        href="https://blog.bella-le.com/%F0%9F%8C%B2+evergreen+words/i+went+to+a+large-group+gathering+and+i+DIDN'T+want+to+wallow+in+a+corner" 
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col h-full group"
      >
        <div className="flex items-start justify-between mb-2">
          <h2 className="text-sm font-medium group-hover:text-custom-rose-light transition-colors italic">
            i went to a large-group gathering and i DIDN'T want to wallow in a corner
          </h2>
          <ArrowUpRight className="w-6 h-6 text-custom-rose-light" />
        </div>
        
        <p className="text-xs text-gray-600 mb-4 flex-grow">
        I used to be, and still am to a degree, terribly terribly socially anxious.
        </p>

        <div className="flex items-center gap-2 text-sm text-gray-400">
          <span className="px-2 py-0.5 rounded-full bg-custom-rose-light/10 text-custom-rose-light/90 text-xs">
            blog post
          </span>
          <span className="text-gray-500">✦</span>
          <time className="text-xs">
            february 11, 2025
          </time>
        </div>
      </a>
    </BentoCard>
  );
};

export default BlogCard;
