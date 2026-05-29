import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

// Infinite horizontal strip; pauses on hover (Slide 6 · primitive 04).
const Marquee = ({ items, duration = 26, separator = '/' }) => {
  const reduce = useReducedMotion();
  const [paused, setPaused] = useState(false);
  const loop = [...items, ...items];

  return (
    <div
      className="overflow-hidden whitespace-nowrap"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <motion.div
        className="inline-flex"
        animate={reduce ? undefined : { x: paused ? undefined : ['0%', '-50%'] }}
        transition={{ duration, repeat: Infinity, ease: 'linear' }}
      >
        {loop.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="px-4 text-2xl text-term-fg">{item}</span>
            <span className="text-term-green-bright">{separator}</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
