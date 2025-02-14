import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import BentoCard from './BentoCard.tsx';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
}

const ProjectsCard = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects: Project[] = [
    {
      id: 1,
      title: "Project 1",
      description: "A cool project with a longer description .",
      image: "/api/placeholder/800/400"
    },
    {
      id: 2,
      title: "Project 2",
      description: "Another amazing project that demonstrates technical skills and problem-solving abilities. This project uses cutting-edge technologies and follows best practices in software development.",
      image: "/api/placeholder/800/400"
    },
    {
      id: 3,
      title: "Project 3",
      description: "Something awesome that pushes the boundaries of what's possible. This project combines innovative features with a user-friendly interface to create a unique and engaging experience.",
      image: "/api/placeholder/800/400"
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
    <BentoCard colSpan={2} rowSpan={2} gradient className="relative overflow-hidden">
      <div className="absolute inset-0 p-6 flex flex-col">
        <h3 className="font-medium text-xl mb-6">Featured Projects</h3>
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
                  <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 h-full flex flex-col">
                    <div className="relative h-52 mb-6">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <h4 className="font-medium text-xl mb-3">{project.title}</h4>
                    <p className="text-base text-gray-600 leading-relaxed">{project.description}</p>
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
