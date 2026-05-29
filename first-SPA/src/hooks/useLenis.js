import { useEffect } from 'react';
import Lenis from 'lenis';

// Optional smooth-scroll (Slide 8 stack · "Lenis smooth-scroll · opt").
// No-op under reduced-motion so we never fight the user's preference.
export const useLenis = () => {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const lenis = new Lenis({ duration: 1.1 });
    let raf;
    const loop = (time) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);
};
