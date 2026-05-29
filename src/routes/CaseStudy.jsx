import { Suspense } from 'react';
import { Link, useParams } from 'react-router-dom';

import { getProject } from '../data/projects';
import { workBodies } from '../content/registry';

const CaseStudy = () => {
  const { slug } = useParams();
  const project = getProject(slug);
  const Body = workBodies[slug];

  if (!project || !Body) {
    return (
      <section className="mx-auto max-w-3xl px-6 py-32">
        <p className="text-term-green">$ cat work/{slug}</p>
        <p className="mt-4 text-term-muted">
          No such case study.{' '}
          <Link to="/" className="text-term-green-bright underline">
            cd ~
          </Link>
        </p>
      </section>
    );
  }

  return (
    <article className="mx-auto max-w-3xl px-6 py-28">
      <Link
        to="/#work"
        className="text-sm text-term-green hover:text-term-green-bright"
      >
        ← cd ../work
      </Link>

      <header className="mt-8 border-b border-term-border pb-8">
        <p className="text-term-green">$ cat work/{project.slug}</p>
        <h1 className="mt-4 text-4xl font-bold md:text-5xl">{project.title}</h1>
        <p className="mt-3 text-term-muted">{project.summary}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="border border-term-border px-2.5 py-1 text-xs text-term-muted"
            >
              {t}
            </span>
          ))}
        </div>
      </header>

      <div className="prose-term mt-10">
        <Suspense fallback={<p className="text-term-green">loading…</p>}>
          <Body />
        </Suspense>
      </div>

      <footer className="mt-10 flex gap-6 border-t border-term-border pt-6 text-sm">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="text-term-green hover:text-term-green-bright"
        >
          ./github
        </a>
        <a
          href={project.website}
          target="_blank"
          rel="noreferrer"
          className="text-term-green hover:text-term-green-bright"
        >
          ./live
        </a>
      </footer>
    </article>
  );
};

export default CaseStudy;
