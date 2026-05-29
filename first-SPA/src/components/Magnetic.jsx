import { motion } from 'framer-motion';

import { useMagnetic } from '../hooks/useMagnetic';

// Wraps a child so it springs toward the pointer (Slide 7 · magnetic CTA).
const Magnetic = ({ children, strength = 0.4, className, ...rest }) => {
  const { ref, style, onMouseMove, onMouseLeave } = useMagnetic(strength);

  return (
    <motion.div
      ref={ref}
      style={style}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default Magnetic;
