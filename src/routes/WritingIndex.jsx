import { Link } from 'react-router-dom';

import { posts } from '../data/writing';

const WritingIndex = () => (
  <section className="mx-auto max-w-3xl px-6 py-28">
    <Link to="/#writing" className="text-sm text-term-green hover:text-term-green-bright">
      ← cd ~
    </Link>

    <header className="mt-8 border-b border-term-border pb-6">
      <p className="text-term-green">$ ls ~/blog</p>
      <h1 className="mt-3 text-4xl font-bold">writing</h1>
    </header>

    <ul className="mt-8 divide-y divide-term-border">
      {posts.map((post) => (
        <li key={post.slug}>
          <Link
            to={`/blog/${post.slug}`}
            className="group block py-6"
          >
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="text-xl text-term-fg group-hover:text-term-green-bright">
                {post.title}
              </h2>
              <time className="shrink-0 text-xs text-term-faint">
                {post.date}
              </time>
            </div>
            <p className="mt-2 text-term-muted">{post.excerpt}</p>
          </Link>
        </li>
      ))}
    </ul>
  </section>
);

export default WritingIndex;
