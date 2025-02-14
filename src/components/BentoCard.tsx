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
  const baseClasses = 'rounded-3xl p-6 shadow-sm transition-all duration-500 ease-in-out';
  const gradientClasses = gradient ? 'bg-gradient-to-br from-purple-100 to-pink-100' : 'bg-white';
  
  return (
    <div 
      className={`${baseClasses} ${gradientClasses} ${className}`}
      style={{ 
        width: colSpan > 1 ? `calc(var(--card-size) * ${colSpan} + ${colSpan - 1}rem)` : 'var(--card-size)',
        height: rowSpan > 1 ? `calc(var(--card-size) * ${rowSpan} + ${rowSpan - 1}rem)` : 'var(--card-size)',
        flexShrink: 0,
        flexGrow: 0
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
