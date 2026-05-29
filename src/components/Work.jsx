import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import { projects } from '../data/projects';
import Reveal from './Reveal';

const Work = () => {
  const [active, setActive] = useState(null);
  const closeRef = useRef(null);

  // Esc closes; move focus into the overlay when it opens (Slide 5 a11y).
  useEffect(() => {
    if (!active) return;
    const onKey = (e) => e.key === 'Escape' && setActive(null);
    document.addEventListener('keydown', onKey);
    closeRef.current?.focus();
    return () => document.removeEventListener('keydown', onKey);
  }, [active]);

  return (
    <section id="work" className="border-t border-term-border px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm text-term-green">$ ls ~/work</p>
        <h2 className="mt-3 text-3xl font-bold md:text-4xl">selected work</h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <Reveal key={p.slug}>
              <motion.button
                layoutId={`card-${p.slug}`}
                onClick={() => setActive(p)}
                className="flex h-full w-full flex-col border border-term-border p-6 text-left hover:border-term-green-bright"
              >
                <motion.h3
                  layoutId={`title-${p.slug}`}
                  className="text-lg text-term-fg"
                >
                  {p.title}
                </motion.h3>
                <p className="mt-3 flex-grow text-sm text-term-muted">
                  {p.summary}
                </p>
                <span className="mt-4 text-xs uppercase tracking-widest text-term-green">
                  open ◇
                </span>
              </motion.button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-label={`${active.title} details`}
          >
            <motion.div
              className="absolute inset-0 bg-term-bg/80 backdrop-blur"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActive(null)}
            />
            <motion.div
              layoutId={`card-${active.slug}`}
              className="relative z-10 w-full max-w-xl border border-term-green-bright bg-term-elev p-8"
            >
              <button
                ref={closeRef}
                onClick={() => setActive(null)}
                className="absolute right-4 top-4 text-term-muted hover:text-term-fg"
                aria-label="Close"
              >
                [esc]
              </button>
              <motion.h3
                layoutId={`title-${active.slug}`}
                className="text-2xl font-bold text-term-fg"
              >
                {active.title}
              </motion.h3>
              <p className="mt-4 text-term-muted">{active.summary}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {active.tech.map((t) => (
                  <span
                    key={t}
                    className="border border-term-border px-2.5 py-1 text-xs text-term-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex gap-6 text-sm">
                <Link
                  to={`/work/${active.slug}`}
                  className="text-term-green-bright hover:underline"
                >
                  read case study →
                </Link>
                <a
                  href={active.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-term-green hover:text-term-green-bright"
                >
                  ./github
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Work;
