import { experience } from '../data/experience';
import Reveal from './Reveal';

const Experience = () => (
  <section id="experience" className="border-t border-term-border px-6 py-28">
    <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.8fr_1.2fr]">
      {/* pinned label (Slide 6 · sticky/pinned) */}
      <div className="md:sticky md:top-28 md:h-fit">
        <p className="text-sm text-term-green">$ history</p>
        <h2 className="mt-3 text-3xl font-bold md:text-4xl">experience</h2>
      </div>

      <ol className="relative border-l border-term-border">
        {experience.map((job, i) => (
          <Reveal as="li" key={job.role + job.period} delay={i * 0.05} className="mb-10 pl-8">
            <span className="absolute -left-[5px] mt-2 h-2.5 w-2.5 rounded-full bg-term-green-bright" />
            <p className="text-xs uppercase tracking-widest text-term-faint">
              {job.period}
            </p>
            <h3 className="mt-1 text-xl text-term-fg">
              {job.role}{' '}
              <span className="text-term-green">@ {job.company}</span>
            </h3>
            <p className="mt-2 text-term-muted">{job.blurb}</p>
          </Reveal>
        ))}
      </ol>
    </div>
  </section>
);

export default Experience;
