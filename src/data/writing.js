// Writing list. `slug` deep-links to /blog/:slug; the post body lives in
// src/content/blog/<slug>.mdx (registered in src/content/registry.js).
export const posts = [
  {
    slug: 'building-this-portfolio',
    title: 'Building this portfolio',
    date: '2026-05-29',
    excerpt:
      'How I turned a Vite starter into a terminal-themed, motion-forward SPA.',
  },
  {
    slug: 'learning-in-public',
    title: 'Learning in public',
    date: '2026-04-12',
    excerpt: 'Why I share unfinished work, and what it has taught me so far.',
  },
];

export const getPost = (slug) => posts.find((p) => p.slug === slug);
