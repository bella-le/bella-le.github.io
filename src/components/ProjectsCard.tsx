import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import BentoCard from './BentoCard.tsx';

interface Project {
  id: number;
  title: string;
  description: string;
  image?: string;
  demoUrl: string;
  links: Record<string, string>;
  tags: string[];
}

const ProjectsCard = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects: Project[] = [
    {
      id: 1,
      title: "champagne vs code theme",
      description: "we need more pink IDE themes.",
      image: "/img/projects/champagne.png",
      demoUrl: "https://marketplace.visualstudio.com/items?itemName=bella-le.champagne",
      links: {
        "github": "https://github.com/bella-le/champagne-theme",
      },
      tags: ["javascript", "design"]
    },
    {
      id: 2,
      title: "fridge magnets",
      description: "you find a cute little fridge on the internet.",
      image: "/img/projects/fridge-magnets.png",
      demoUrl: "https://fridge-magnets-production.up.railway.app/",
      links: {
        "github": "https://github.com/bella-le/fridge-magnets",
      },
      tags: ["react", "node.js", "express", "websocket"]
    },
    {
      id: 3,
      title: "scoopology",
      description: "the cutest ice cream personality quiz!",
      image: "/img/projects/scoopology.webp",
      demoUrl: "https://bella-le.github.io/scoopology",
      links: {
        "github": "https://github.com/bella-le/scoopology",
      },
      tags: ["react", "typescript"]
    },
    {
      id: 4,
      title: "walk safe talk safe",
      description: "an ai safety hotline when you need a fake conversation to deter people from doing something dangerous.",
      demoUrl: "https://github.com/bella-le/walk-safe-talk-safe",
      links: {
        "github": "https://github.com/bella-le/walk-safe-talk-safe",
      },
      tags: ["openai", "ngrok", "twilio"]
    },
    {
      id: 5,
      title: "daily lockbox",
      description: "a time-based lockbox to lock your phone in for productivity. built for a friend who wanted to lock his phone before going to bed.",
      demoUrl: "https://github.com/bella-le/daily-lockbox",
      links: {
        "github": "https://github.com/bella-le/daily-lockbox",
      },
      tags: ["node.js", "express"]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [projects.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <BentoCard colSpan={2} rowSpan={2} className="relative overflow-hidden bg-gradient-to-br from-custom-rose-light/30 to-custom-purple/20 backdrop-blur-sm">
      <div className="absolute inset-0 p-6 flex flex-col">
        <h3 className="font-medium text-lg mb-6 italic">cute unserious projects</h3>
        <div className="relative flex-grow overflow-hidden rounded-xl">
          <div 
            className="absolute inset-0 transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            <div className="absolute top-0 flex h-full w-full">
              {projects.map((project) => (
                <div 
                  key={project.id}
                  className="w-full h-full flex-shrink-0 px-1"
                >
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 h-full flex flex-col">
                    {project.image ? (
                      <a 
                        href={project.demoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block relative mb-6 w-full aspect-[16/9] overflow-hidden rounded-lg group"
                      >
                        <div className="absolute inset-0 bg-custom-rose-light/40 mix-blend-screen z-10 group-hover:bg-custom-rose-light/30 transition-colors"></div>
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="absolute w-full h-full object-cover z-0"
                        />
                      </a>
                    ) :
                    // <>
                    //   <div className="bg-custom-rose-light/20 flex relative mb-6 w-full aspect-[16/9] overflow-hidden rounded-lg group items-center justify-center">
                    //     <p className="text-xs text-gray-600 text-opacity-80 leading-relaxed mb-4">backend project</p>
                    //   </div>
                    // </>
                      <div className="block relative mb-6 w-full aspect-[16/9] overflow-hidden rounded-lg group"></div>
                    }
                    <h4 className="font-medium text-sm mb-3 italic">{project.title}</h4>
                    <p className="text-xs text-gray-600 leading-relaxed mb-4">{project.description}</p>
                    <div className="flex flex-col gap-2 mt-auto">
                      <div className="flex flex-wrap items-center gap-1.5 text-sm">
                        {Object.entries(project.links).map(([name, url]) => (
                          <a
                            key={name}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-2 py-0.5 rounded-full bg-custom-rose-light/10 text-custom-rose-light/100 hover:bg-custom-rose-light/20 transition-colors text-xs"
                          >
                            {name}
                          </a>
                        ))}
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded-full bg-custom-purple/10 text-custom-purple/90 text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Navigation Buttons */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-1.5 hover:bg-white transition-colors"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-1.5 hover:bg-white transition-colors"
      >
        <ChevronRight className="w-4 h-4" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
        {projects.map((_, index) => (
          <button
            key={index}
            className={`w-1.5 h-1.5 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </BentoCard>
  );
};

export default ProjectsCard;
