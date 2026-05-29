import { Suspense } from 'react';
import { Link, useParams } from 'react-router-dom';

import { getPost } from '../data/writing';
import { blogBodies } from '../content/registry';

const Post = () => {
  const { slug } = useParams();
  const post = getPost(slug);
  const Body = blogBodies[slug];

  if (!post || !Body) {
    return (
      <section className="mx-auto max-w-3xl px-6 py-32">
        <p className="text-term-green">$ cat blog/{slug}</p>
        <p className="mt-4 text-term-muted">
          No such post.{' '}
          <Link to="/blog" className="text-term-green-bright underline">
            ls ~/blog
          </Link>
        </p>
      </section>
    );
  }

  return (
    <article className="mx-auto max-w-3xl px-6 py-28">
      <Link to="/blog" className="text-sm text-term-green hover:text-term-green-bright">
        ← cd ../blog
      </Link>

      <header className="mt-8 border-b border-term-border pb-6">
        <p className="text-term-green">$ cat blog/{post.slug}.md</p>
        <h1 className="mt-4 text-4xl font-bold md:text-5xl">{post.title}</h1>
        <time className="mt-3 block text-xs text-term-faint">{post.date}</time>
      </header>

      <div className="prose-term mt-10">
        <Suspense fallback={<p className="text-term-green">loading…</p>}>
          <Body />
        </Suspense>
      </div>
    </article>
  );
};

export default Post;
