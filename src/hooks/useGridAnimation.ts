import { useLayoutEffect, useRef } from 'react';

const getColumnsCount = () => {
  const width = window.innerWidth;
  if (width >= 850) return 4;
  if (width >= 650) return 3;
  return 2;
};

const getCardSize = () => {
  const width = window.innerWidth;
  if (width >= 650) return 200;
  return Math.min((width - 48) / 2, 200); // (100vw - 3rem) / 2
};

const getGapSize = () => 16; // 1rem

export const useGridAnimation = (selector: string) => {
  const positions = useRef<Map<Element, DOMRect>>(new Map());
  const animating = useRef(false);

  const updateLayout = () => {
    if (animating.current) return;

    const elements = document.querySelectorAll(selector);
    const currentPositions = new Map<Element, DOMRect>();
    
    // Calculate new positions
    const cardSize = getCardSize();
    const gap = getGapSize();
    const columns = getColumnsCount();

    elements.forEach((element, index) => {
      const el = element as HTMLElement;
      const rect = el.getBoundingClientRect();
      currentPositions.set(element, rect);

      const row = Math.floor(index / columns);
      const col = index % columns;
      const x = col * (cardSize + gap);
      const y = row * (cardSize + gap);

      // Store current position before any changes
      if (positions.current.size === 0) {
        el.style.transform = `translate(${x}px, ${y}px)`;
        return;
      }

      const prevRect = positions.current.get(element);
      if (!prevRect) return;

      // Calculate the difference from previous position
      const deltaX = prevRect.left - x;
      const deltaY = prevRect.top - y;

      animating.current = true;

      // Animate from previous to new position
      requestAnimationFrame(() => {
        el.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
        
        requestAnimationFrame(() => {
          el.style.transition = 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
          el.style.transform = `translate(${x}px, ${y}px)`;

          const cleanup = () => {
            animating.current = false;
            el.removeEventListener('transitionend', cleanup);
          };
          el.addEventListener('transitionend', cleanup);
        });
      });
    });

    positions.current = currentPositions;
  };

  useLayoutEffect(() => {
    updateLayout();

    const handleResize = () => {
      if (!animating.current) {
        requestAnimationFrame(updateLayout);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
};
