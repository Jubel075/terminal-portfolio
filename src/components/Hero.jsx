import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

import { heroData } from '../data/hero';
import { wordContainer, wordChild } from '../lib/motion';
import useTypewriter from '../hooks/useTypewriter';
import Magnetic from './Magnetic';

const Hero = () => {
  const { name, roles, description } = heroData;
  const words = name.toLowerCase().split(' ');
  const role = useTypewriter(roles);

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['-8%', '12%']);

  return (
    <section
      id="home"
      ref={ref}
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24"
    >
      {/* parallax backdrop */}
      <motion.div
        aria-hidden="true"
        style={{ y: bgY }}
        className="pointer-events-none absolute inset-0 select-none"
      >
        <div className="absolute right-4 top-1/3 text-[28vw] font-bold leading-none text-term-surface md:text-[20vw]">
          {'</>'}
        </div>
      </motion.div>

      <div className="relative mx-auto w-full max-w-6xl">
        <p className="text-sm text-term-green md:text-base">$ whoami</p>

        <motion.h1
          variants={wordContainer}
          initial="hidden"
          animate="show"
          className="mt-3 flex flex-wrap gap-x-6 text-6xl font-bold leading-[1.05] md:text-8xl"
        >
          {words.map((w, i) => (
            <span key={i} className="overflow-hidden">
              <motion.span variants={wordChild} className="inline-block">
                {w}
              </motion.span>
            </span>
          ))}
          <span className="caret">_</span>
        </motion.h1>

        <p className="mt-6 text-lg text-term-muted md:text-2xl">
          <span className="text-term-faint">// </span>
          {role}
          <span className="caret">|</span>
        </p>

        <p className="mt-6 max-w-xl text-term-muted">{description}</p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Magnetic>
            <a
              href="#work"
              className="inline-block border border-term-green-bright px-5 py-2.5 text-sm uppercase tracking-widest text-term-green-bright hover:bg-term-green-bright hover:text-term-bg"
            >
              ./view-work
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href="#contact"
              className="inline-block border border-term-border px-5 py-2.5 text-sm uppercase tracking-widest text-term-muted hover:border-term-fg hover:text-term-fg"
            >
              ./contact
            </a>
          </Magnetic>
        </div>
      </div>
    </section>
  );
};

export default Hero;
