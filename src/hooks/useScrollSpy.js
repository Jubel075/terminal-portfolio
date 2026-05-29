import { useState, useEffect } from 'react';

// Highlights the section currently in view (Slide 3 · scroll-spy nav).
// Updates the URL hash without a jump.
export const useScrollSpy = (ids, { rootMargin = '-45% 0px -50% 0px' } = {}) => {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
            if (history.replaceState) {
              history.replaceState(null, '', `#${entry.target.id}`);
            }
          }
        });
      },
      { rootMargin, threshold: 0 }
    );

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [ids, rootMargin]);

  return active;
};
