// Central motion tokens — keep durations & easings in one place (Slide 6/8 spec).
export const EASE = [0.2, 0.8, 0.2, 1];
export const EASE_OUT = [0.2, 0.7, 0.2, 1];

export const DUR = {
  fast: 0.3,
  base: 0.5,
  slow: 0.7,
};

// Fade + 24px rise as elements enter; fires once (Slide 6 · primitive 01).
export const revealVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: DUR.slow, ease: EASE },
  },
};

// Staggered word reveal — clipped baseline rise (Slide 4).
export const wordContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

export const wordChild = {
  hidden: { y: '110%' },
  show: { y: 0, transition: { duration: DUR.slow, ease: EASE } },
};

// Route page transition (Slide 7).
export const routeTransition = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: DUR.base, ease: EASE } },
  exit: { opacity: 0, y: -16, transition: { duration: DUR.fast, ease: EASE } },
};
