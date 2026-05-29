import { useEffect, useState } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from 'framer-motion';

// Custom cursor that lerps toward the pointer and grows over interactive
// elements. Disabled on coarse/touch pointers and under reduced-motion
// (Slide 7 · "Disable magnetics & cursor on touch / coarse pointers").
const Cursor = () => {
  const reduce = useReducedMotion();
  // Resolve pointer capability once, at mount — no setState in effect.
  const [fine] = useState(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia('(pointer: fine)').matches
  );
  const [hovering, setHovering] = useState(false);
  const enabled = fine && !reduce;

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });

  useEffect(() => {
    if (!enabled) return;

    document.body.classList.add('has-custom-cursor');

    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const interactive = e.target.closest('a, button, [role="button"]');
      setHovering(Boolean(interactive));
    };

    window.addEventListener('pointermove', move);
    return () => {
      window.removeEventListener('pointermove', move);
      document.body.classList.remove('has-custom-cursor');
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full border border-term-green-bright mix-blend-difference"
      style={{ x: sx, y: sy, translateX: '-50%', translateY: '-50%' }}
      animate={{
        width: hovering ? 44 : 16,
        height: hovering ? 44 : 16,
        backgroundColor: hovering
          ? 'rgba(127,208,122,0.15)'
          : 'rgba(127,208,122,0)',
      }}
      transition={{ duration: 0.18 }}
    />
  );
};

export default Cursor;
