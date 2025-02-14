import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import BentoCard from './BentoCard.tsx';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  links: Record<string, string>;
}

const ProjectsCard = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects: Project[] = [
    {
      id: 1,
      title: "champagne vs code theme",
      description: "we need more pink IDE themes.",
      image: "/img/projects/champagne.png",
      links: {
        "github": "https://github.com/bella-le/champagne-theme",
        "marketplace": "https://marketplace.visualstudio.com/items?itemName=bella-le.champagne"
      }
    },
    {
      id: 2,
      title: "fridge magnets",
      description: "you find a cute little fridge on the internet.",
      image: "/img/projects/fridge-magnets.png",
      links: {
        "github": "https://github.com/bella-le/fridge-magnets",
        "demo": "https://fridge-magnets-production.up.railway.app/"
      }
    },
    {
      id: 3,
      title: "scoopology",
      description: "the cutest ice cream personality quiz!",
      image: "/img/projects/scoopology.webp",
      links: {
        "github": "https://github.com/bella-le/scoopology",
        "demo": "https://bella-le.github.io/scoopology"
      }
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
                  <div className="bg-custom-rose-light/30 backdrop-blur-sm rounded-xl p-6 h-full flex flex-col">
                    <div className="relative mb-6 w-full aspect-[16/9] flex items-center justify-center overflow-hidden rounded-lg">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="absolute w-full h-full object-cover opacity-80 mix-blend-overlay"
                        />
                    </div>
                    <h4 className="font-medium text-sm mb-3 italic">{project.title}</h4>
                    <p className="text-xs text-gray-600 leading-relaxed mb-4">{project.description}</p>
                    <div className="flex items-center gap-2 mt-auto text-sm">
                      {Object.entries(project.links).map(([name, url], index) => (
                        <React.Fragment key={name}>
                          <a
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-2 py-0.5 rounded-full bg-custom-rose-light/10 text-custom-rose-light/90 hover:bg-custom-rose-light/20 transition-colors text-xs"
                          >
                            {name}
                          </a>
                          {/* {index < Object.entries(project.links).length - 1 && (
                            <span className="text-gray-500">✦</span>
                          )} */}
                        </React.Fragment>
                      ))}
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
