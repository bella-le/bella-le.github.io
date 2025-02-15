import React, { useState, useEffect } from 'react';
import { Clock, ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import BentoCard from './BentoCard.tsx';

interface NowItem {
  text: string;
  category: string;
  link?: string;
}

const nowItems: NowItem[] = [
  {
    category: "learning",
    text: "improv at Leela SF",
    link: "https://leela-sf.com/"
  },
  {
    category: "learning",
    text: "singing lessons at Songbird Studios",
    link: "https://songbirdsf.com/"
  },
  {
    category: "learning",
    text: "日本語を勉強しています~",
    link: "https://www.italki.com/"
  },
  {
    category: "reading",
    text: "Kafka on the Shore by Haruki Murakami",
    link: "https://www.goodreads.com/book/show/4929.Kafka_on_the_Shore"
  },
  {
    category: "reading",
    text: "Dandadan",
    link: "https://www.viz.com/shonenjump/chapters/dandadan"
  },
  {
    category: "reading",
    text: "Frieren",
    link: "https://www.viz.com/vizmanga/chapters/frieren-the-journeys-end"
  },
  {
    category: "reading",
    text: "Spy x Family",
    link: "https://www.viz.com/shonenjump/chapters/spy-x-family"
  },
  {
    category: "working on",
    text: "🐐",
  },
  {
    category: "working on",
    text: "🎨 & 💻",
  },
  {
    category: "working at",
    text: "Netflix 🍿",
    link: "https://www.netflix.com/"
  },
  {
    category: "setting a goal for",
    text: "being more socially intentional and deliberate",
  },
];

const NowCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const nextSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % nowItems.length);
      setIsTransitioning(false);
    }, 500);
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + nowItems.length) % nowItems.length);
      setIsTransitioning(false);
    }, 500);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const currentItem = nowItems[currentIndex];

  return (
    <BentoCard 
      colSpan={2} 
      className="bg-custom-purple/20 backdrop-blur-sm p-4 relative overflow-hidden"
    >
      <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-2">
        <Clock className="w-5 h-5 text-custom-purple" />
        <span className="text-xs font-medium italic">now</span>
      </div>
      <span className="text-xs text-gray-400">last updated 2/14/25</span>
    </div>
      <div className="relative h-[100px] flex items-center">
        <button 
          onClick={prevSlide}
          className="absolute -left-1 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-1.5 hover:bg-white transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        
        <div className="w-full px-12">
          <div className={`transition-opacity duration-1000 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
            <div className="text-xs text-custom-purple/80 mb-1 italic">
              {currentItem.category}
            </div>
            <div className="flex items-start justify-between gap-2">
              {currentItem.link ? (
                <a 
                  href={currentItem.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start justify-between gap-2 flex-grow"
                >
                  <div className="text-sm transition-all duration-300 ease-in-out group-hover:text-custom-purple/100">
                    {currentItem.text}
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-custom-purple/60 flex-shrink-0 transition-all duration-300 ease-in-out group-hover:text-custom-purple/100" />
                </a>
              ) : (
                <div className="text-sm">
                  {currentItem.text}
                </div>
              )}
            </div>
          </div>
        </div>

        <button 
          onClick={nextSlide}
          className="absolute -right-1 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-1.5 hover:bg-white transition-colors"
          >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
      
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1">
        {nowItems.map((_, index) => (
          <div
            key={index}
            className={`w-1 h-1 rounded-full transition-colors ${index === currentIndex ? 'bg-custom-purple/60' : 'bg-custom-purple/20'}`}
          />
        ))}
      </div>
    </BentoCard>
  );
};

export default NowCard;
