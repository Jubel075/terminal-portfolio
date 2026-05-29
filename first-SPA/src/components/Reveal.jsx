import { motion } from 'framer-motion';

import { revealVariants } from '../lib/motion';

// Scroll reveal wrapper: fade + 24px rise on enter, once (Slide 6 · primitive 01).
const Reveal = ({ children, as = 'div', delay = 0, className, ...rest }) => {
  const MotionTag = motion[as];
  return (
    <MotionTag
      variants={revealVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-15%' }}
      transition={{ delay }}
      className={className}
      {...rest}
    >
      {children}
    </MotionTag>
  );
};

export default Reveal;
