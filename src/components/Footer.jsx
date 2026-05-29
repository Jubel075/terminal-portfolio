import { heroData } from '../data/hero';

const Footer = () => (
  <footer className="border-t border-term-border px-6 py-8">
    <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 text-xs text-term-faint sm:flex-row">
      <span>
        <span className="text-term-green">$</span> echo &quot;© {new Date().getFullYear()}{' '}
        {heroData.name}&quot;
      </span>
      <span>built with react · vite · framer-motion</span>
    </div>
  </footer>
);

export default Footer;
