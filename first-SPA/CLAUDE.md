# CLAUDE.md

Guidance for working in this repository.

## What this is

A motion-forward, **terminal-themed** developer portfolio SPA (the "first-SPA" of a
learning Coding-Journey). One scroll-driven home page with seven sections plus
deep-linkable detail routes for case studies and writing. Built from the "Terminal /
Dark" direction of a Claude Design build spec.

## Stack

- **React 19** + **Vite 8** (JSX, not TS)
- **react-router-dom** — `/` (home) + `/work/:slug`, `/blog`, `/blog/:slug` (lazy)
- **Framer Motion** — all animations (reveals, word-stagger, layout morphs, springs)
- **Tailwind CSS v4** via `@tailwindcss/vite` — utility classes in JSX. Theme tokens
  are CSS-first in `src/index.css` under `@theme` (no `tailwind.config`).
- **@mdx-js/rollup** — long-form case-study & post bodies as `.mdx`
- **lenis** — optional smooth-scroll · **lucide-react** — icons · **ESLint 10**

## Commands

```bash
npm run dev      # Vite dev server (HMR)
npm run build    # production build to dist/ (route + MDX chunks code-split)
npm run preview  # serve the build on port 3000
npm run lint     # ESLint
```

## Design system — Terminal / Dark

JetBrains Mono everywhere. Tokens live in `src/index.css` `@theme` and are used as
Tailwind colors (`bg-term-bg`, `text-term-fg`, `text-term-green`, etc.):

- `term-bg #0e0f0d` · `term-surface #15110e` · `term-elev #16120f` · `term-border #2a2c27`
- `term-fg #e9e6dd` · `term-muted #9b978c` · `term-faint #6c6a62`
- `term-green #6c8f6a` (prompts/labels) · `term-green-bright #7fd07a` (caret/accent)

Motifs: `$ command` prompts as section kickers, a blinking `.caret` (`_` / `|`), and
`// comment`-style subtext. Long-form MDX renders inside a `.prose-term` wrapper.

## Structure

```
src/
├─ main.jsx              # RouterProvider + <MotionConfig reducedMotion="user">
├─ router.jsx            # createBrowserRouter; lazy detail routes
├─ App.jsx               # layout shell: Cursor + Nav + animated <Outlet/> + Footer
├─ index.css            # Tailwind @import, @theme tokens, keyframes, .prose-term
├─ routes/
│  ├─ Home.jsx           # composes the 7 sections
│  ├─ CaseStudy.jsx      # /work/:slug   (renders work MDX)
│  ├─ WritingIndex.jsx   # /blog
│  └─ Post.jsx           # /blog/:slug   (renders blog MDX)
├─ components/
│  ├─ Navigation.jsx     # fixed terminal nav, scroll-spy active state
│  ├─ Hero/About/Work/Skills/Experience/Writing/Contact/Footer.jsx
│  └─ Cursor / Magnetic / Marquee / Reveal.jsx   # shared motion primitives
├─ lib/motion.js         # EASE, durations, shared variants (single source)
├─ hooks/                # useScrollSpy, useTypewriter, useMagnetic, useLenis, …
├─ data/                 # hero, projects, skills, experience, writing, contact
└─ content/              # MDX bodies + registry.js (slug → lazy MDX map)
```

## Conventions

- **Data-driven.** Structured content lives in `src/data/*.js`; long-form prose lives
  in `src/content/**.mdx`, mapped slug→component in `src/content/registry.js`. Edit
  data/MDX to change copy, not the JSX.
- **Section ids = nav targets.** Each home section is `<section id="...">`; the ids are
  listed in `Navigation.jsx`'s `sections` array (drives scroll-spy + anchor scroll).
  Add a section → add it to `routes/Home.jsx` and that array.
- **Motion tokens are centralized** in `src/lib/motion.js`. Reuse `Reveal` for
  scroll-in effects; gate any new animation on `useReducedMotion()` (global
  `MotionConfig reducedMotion="user"` already covers Framer Motion).
- Adding a project/post: add an entry in `data/projects.js` or `data/writing.js`,
  create the `.mdx` body, and register it in `content/registry.js`.

## Notes

- Some `data/hero.js` links (CV PDF, profile image) point at `/assets/*` files not yet
  in `public/`.
- Lenis smooth-scroll and the custom cursor self-disable under reduced-motion / coarse
  pointers.
