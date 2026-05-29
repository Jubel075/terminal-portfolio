import { heroData } from '../data/hero';
import Reveal from './Reveal';

const About = () => {
  const { description, tagline, languages = [] } = heroData;

  return (
    <section id="about" className="border-t border-term-border px-6 py-28">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.8fr_1.2fr]">
        {/* pinned label */}
        <div className="md:sticky md:top-28 md:h-fit">
          <p className="text-sm text-term-green">$ cat about.txt</p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">about</h2>
        </div>

        <div className="space-y-6 text-lg leading-relaxed text-term-muted">
          <Reveal as="p">{description}</Reveal>
          <Reveal as="p" delay={0.05}>
            {tagline}.
          </Reveal>
          {languages.length > 0 && (
            <Reveal delay={0.1} className="flex flex-wrap gap-3 pt-2">
              {languages.map((l) => (
                <span
                  key={l.name}
                  className="border border-term-border px-3 py-1 text-sm text-term-fg"
                >
                  {l.name}
                  <span className="text-term-faint"> · {l.level}</span>
                </span>
              ))}
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
