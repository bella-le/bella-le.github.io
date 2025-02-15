import { useState, useEffect } from 'react';

export const useResponsiveSpan = () => {
  const [colSpan, setColSpan] = useState(2);

  useEffect(() => {
    const updateSpan = () => {
      const width = window.innerWidth;
      if (width >= 850) {
        setColSpan(2); // 4-column layout
      } else if (width >= 650 && width < 850) {
        setColSpan(1); // 3-column layout
      } else {
        setColSpan(2); // 2-column layout
      }
    };

    // Initial check
    updateSpan();

    // Add resize listener
    window.addEventListener('resize', updateSpan);

    // Cleanup
    return () => window.removeEventListener('resize', updateSpan);
  }, []);

  return colSpan;
};
