import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

import { useScrollSpy } from '../hooks/useScrollSpy';

const sections = [
  { id: 'home', label: 'home' },
  { id: 'about', label: 'about' },
  { id: 'work', label: 'work' },
  { id: 'skills', label: 'skills' },
  { id: 'experience', label: 'exp' },
  { id: 'writing', label: 'writing' },
  { id: 'contact', label: 'contact' },
];

const sectionIds = sections.map((s) => s.id);

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const onHome = location.pathname === '/';
  const active = useScrollSpy(sectionIds);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setIsOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const go = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    if (onHome) {
      document
        .getElementById(id)
        ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.replaceState(null, '', `#${id}`);
    } else {
      navigate(`/#${id}`);
    }
  };

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-term-border bg-term-bg/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a
          href="/#home"
          onClick={(e) => go(e, 'home')}
          className="text-sm font-bold tracking-widest text-term-green-bright"
        >
          ~/jubel
        </a>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          className="text-term-fg md:hidden"
          onClick={() => setIsOpen((v) => !v)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <ul
          className={`${
            isOpen ? 'flex' : 'hidden'
          } absolute inset-x-0 top-full flex-col gap-1 border-b border-term-border bg-term-bg px-6 py-4 md:static md:flex md:flex-row md:items-center md:gap-6 md:border-0 md:bg-transparent md:p-0`}
        >
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`/#${s.id}`}
                onClick={(e) => go(e, s.id)}
                aria-current={onHome && active === s.id ? 'true' : undefined}
                className={`text-xs uppercase tracking-[0.18em] transition-colors hover:text-term-green-bright ${
                  onHome && active === s.id
                    ? 'text-term-green-bright'
                    : 'text-term-muted'
                }`}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
