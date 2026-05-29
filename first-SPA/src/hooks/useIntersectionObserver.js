import { useState, useEffect } from 'react';

export const useIntersectionObserver = () => {
  const [hasAnimated, setHasAnimated] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Check if the element is intersecting and hasn't been animated yet
          if (entry.isIntersecting && !hasAnimated[entry.target.id]) {
            setHasAnimated((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id]').forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [hasAnimated]);

  return hasAnimated;
};
