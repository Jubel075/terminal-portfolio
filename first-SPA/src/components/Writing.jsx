import { Link } from 'react-router-dom';

import { posts } from '../data/writing';
import Reveal from './Reveal';

const Writing = () => (
  <section id="writing" className="border-t border-term-border px-6 py-28">
    <div className="mx-auto max-w-6xl">
      <div className="flex items-baseline justify-between">
        <div>
          <p className="text-sm text-term-green">$ ls ~/blog</p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">writing</h2>
        </div>
        <Link
          to="/blog"
          className="text-sm text-term-green hover:text-term-green-bright"
        >
          view all →
        </Link>
      </div>

      <ul className="mt-10 divide-y divide-term-border border-y border-term-border">
        {posts.map((post, i) => (
          <Reveal as="li" key={post.slug} delay={i * 0.05}>
            <Link to={`/blog/${post.slug}`} className="group block py-6">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-xl text-term-fg group-hover:text-term-green-bright">
                  {post.title}
                </h3>
                <time className="shrink-0 text-xs text-term-faint">
                  {post.date}
                </time>
              </div>
              <p className="mt-2 text-term-muted">{post.excerpt}</p>
            </Link>
          </Reveal>
        ))}
      </ul>
    </div>
  </section>
);

export default Writing;
