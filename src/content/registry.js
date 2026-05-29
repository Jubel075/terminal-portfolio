import { lazy } from 'react';

// Explicit slug → lazy MDX component maps (static imports so Vite can code-split).
export const workBodies = {
  'portfolio-website': lazy(() => import('./work/portfolio-website.mdx')),
  'task-tracker': lazy(() => import('./work/task-tracker.mdx')),
  'weather-dashboard': lazy(() => import('./work/weather-dashboard.mdx')),
};

export const blogBodies = {
  'building-this-portfolio': lazy(() =>
    import('./blog/building-this-portfolio.mdx')
  ),
  'learning-in-public': lazy(() => import('./blog/learning-in-public.mdx')),
};
