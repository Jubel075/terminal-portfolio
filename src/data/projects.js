// Selected work. `slug` deep-links to /work/:slug; the long-form case study body
// lives in src/content/work/<slug>.mdx (registered in src/content/registry.js).
export const projects = [
  {
    slug: 'portfolio-website',
    title: 'portfolio-website',
    summary:
      'A personal portfolio to showcase projects, skills, and contact information using React and responsive design.',
    tech: ['React', 'CSS', 'JavaScript'],
    year: '2026',
    github: 'https://github.com/username/portfolio-website',
    website: 'https://username.github.io/portfolio-website',
  },
  {
    slug: 'task-tracker',
    title: 'task-tracker',
    summary:
      'A simple task management app with add, delete, and toggle features, built for productivity and ease of use.',
    tech: ['React', 'Context API', 'CSS'],
    year: '2025',
    github: 'https://github.com/username/task-tracker',
    website: 'https://username.github.io/task-tracker',
  },
  {
    slug: 'weather-dashboard',
    title: 'weather-dashboard',
    summary:
      'A weather dashboard that fetches live weather data and displays it in a clean, user-friendly interface.',
    tech: ['React', 'API', 'Bootstrap'],
    year: '2025',
    github: 'https://github.com/username/weather-dashboard',
    website: 'https://username.github.io/weather-dashboard',
  },
];

export const getProject = (slug) => projects.find((p) => p.slug === slug);
