import { skills } from '../data/skills';
import Marquee from './Marquee';
import Reveal from './Reveal';

const Skills = () => {
  const allItems = skills.flatMap((g) => g.items);

  return (
    <section id="skills" className="border-t border-term-border py-28">
      <div className="mx-auto mb-12 max-w-6xl px-6">
        <p className="text-sm text-term-green">$ skills --list</p>
        <h2 className="mt-3 text-3xl font-bold md:text-4xl">stack</h2>
      </div>

      <div className="border-y border-term-border py-6">
        <Marquee items={allItems} />
      </div>

      <div className="mx-auto mt-12 grid max-w-6xl gap-8 px-6 sm:grid-cols-3">
        {skills.map((group, i) => (
          <Reveal key={group.category} delay={i * 0.05}>
            <h3 className="text-xs uppercase tracking-[0.18em] text-term-green">
              {group.category}
            </h3>
            <ul className="mt-4 space-y-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="text-term-muted transition-colors hover:text-term-fg"
                >
                  <span className="text-term-faint">→ </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Skills;
