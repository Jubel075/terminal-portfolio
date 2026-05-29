export const heroData = {
  // Basic identity
  greeting: 'Hello, I am',
  name: 'Jubel',
  title: 'Front-end Developer',
  tagline: 'Building accessible, performant web experiences',

  // Roles / specialties
  roles: ['Frontend Engineer', 'React Specialist', 'UI/UX Enthusiast'],

  // Short bio
  description:
    'I design and develop scalable single-page applications with a focus on accessibility and clean code.',

  // Contact & social links
  socialLinks: [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/Jubel075',
      icon: 'LinkedIn',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/jubel',
      icon: 'Github',
    },
    {
      name: 'Email',
      url: 'mailto:jubel@example.com',
      icon: 'Mail',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/jubel',
      icon: 'Twitter',
    },
  ],

  // Quick stats to show on the hero section
  stats: [
    { value: 50, label: 'Projects Completed' },
    { value: 30, label: 'Happy Clients' },
    { value: 5, label: 'Years of Experience' },
  ],

  // Call-to-action buttons
  ctaButtons: [
    {
      text: 'Download CV',
      url: '/assets/Jubel-CV.pdf',
      variant: 'primary',
    },
    {
      text: 'Contact Me',
      url: 'mailto:jubel@example.com',
      variant: 'secondary',
    },
    {
      text: 'View Projects',
      url: '/projects',
      variant: 'tertiary',
    },
  ],

  // Additional features
  profileImage: '/assets/profile.jpg',
  location: 'Berlin, Germany',
  availability: 'Open for work',
  hireable: true,

  // Skills for badges or chips
  skills: [
    { name: 'React', level: 'expert' },
    { name: 'JavaScript (ES6+)', level: 'expert' },
    { name: 'TypeScript', level: 'advanced' },
    { name: 'CSS / Sass', level: 'advanced' },
    { name: 'Accessibility', level: 'intermediate' },
  ],

  // Languages
  languages: [
    { name: 'English', level: 'native' },
    { name: 'German', level: 'conversational' },
  ],

  // Small portfolio highlights
  highlights: [
    {
      title: 'E-commerce SPA',
      description:
        'Performance-optimized React store with SSR and lazy loading',
      url: 'https://example-store.com',
    },
    {
      title: 'Design System',
      description: 'Reusable component library and token-driven theming',
      url: 'https://design.example.com',
    },
  ],

  // Theme preference for hero section
  themeColor: '#0ea5a4',
};
