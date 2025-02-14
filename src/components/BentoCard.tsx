import React, { ReactNode } from 'react';
import { ExternalLink } from 'lucide-react';

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  colSpan?: number;
  rowSpan?: number;
  externalLink?: string;
  gradient?: boolean;
}

const BentoCard: React.FC<BentoCardProps> = ({
  children,
  className = '',
  colSpan = 1,
  rowSpan = 1,
  externalLink,
  gradient = false,
}) => {
  const baseClasses = 'rounded-3xl p-6 shadow-sm transition-transform duration-500';
  const gradientClasses = gradient ? 'bg-gradient-to-br from-purple-100 to-pink-100' : 'bg-white';
  
  return (
    <div 
      className={`${baseClasses} ${gradientClasses} ${className}`}
      style={{ 
        gridColumn: `span ${colSpan}`,
        gridRow: `span ${rowSpan}`,
        height: rowSpan > 1 ? `calc(var(--card-size) * ${rowSpan} + ${rowSpan - 1}rem)` : 'var(--card-size)'
      }}
    >
      {children}
      {externalLink && (
        <a href={externalLink} target="_blank" rel="noopener noreferrer">
          <ExternalLink className="w-4 h-4 absolute top-4 right-4 text-gray-400" />
        </a>
      )}
    </div>
  );
};

export default BentoCard;
