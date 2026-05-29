import { useState, useEffect } from 'react';

export const useScrollTop = () => {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';

    const handleScroll = () => {
      setScrollTop(window.scrollY > 400); // Show button after scrolling down 400px
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);

      document.documentElement.style.scrollBehavior = 'auto'; // Reset scroll behavior on cleanup
    };
  }, []);

  return scrollTop;
};
