import { contactLinks } from '../data/contact';
import Reveal from './Reveal';
import Magnetic from './Magnetic';

const Contact = () => (
  <section id="contact" className="border-t border-term-border px-6 py-32">
    <div className="mx-auto max-w-6xl text-center">
      <p className="text-sm text-term-green">$ ./contact --me</p>
      <Reveal as="h2" className="mt-4 text-4xl font-bold md:text-6xl">
        let&apos;s build something
        <span className="caret">_</span>
      </Reveal>
      <p className="mx-auto mt-5 max-w-md text-term-muted">
        Open for work and collaboration. Pick a channel.
      </p>

      <div className="mt-12 flex flex-wrap justify-center gap-4">
        {contactLinks.map((link) => (
          <Magnetic key={link.label}>
            <a
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="block border border-term-border px-6 py-4 text-left hover:border-term-green-bright"
            >
              <span className="block text-xs uppercase tracking-widest text-term-green">
                {link.label}
              </span>
              <span className="mt-1 block text-term-fg">{link.handle}</span>
            </a>
          </Magnetic>
        ))}
      </div>
    </div>
  </section>
);

export default Contact;
