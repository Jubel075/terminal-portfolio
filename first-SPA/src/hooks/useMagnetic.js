import { useRef } from 'react';
import { useMotionValue, useSpring, useReducedMotion } from 'framer-motion';

// Pulls an element toward the pointer with a spring (Slide 7 · magnetic).
// Disabled under reduced-motion and on coarse pointers (handled by caller).
export const useMagnetic = (strength = 0.4) => {
  const ref = useRef(null);
  const reduce = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 150, damping: 15 });
  const sy = useSpring(y, { stiffness: 150, damping: 15 });

  const onMouseMove = (e) => {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };

  const onMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return { ref, style: { x: sx, y: sy }, onMouseMove, onMouseLeave };
};
