import { Suspense } from 'react';
import { Outlet, useLocation, ScrollRestoration } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import { routeTransition } from './lib/motion';
import { useLenis } from './hooks/useLenis';

// Layout shell: persistent cursor + nav + footer, animated route transitions.
const App = () => {
  const location = useLocation();
  useLenis();

  return (
    <>
      <Cursor />
      <Navigation />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          id="main"
          initial={routeTransition.initial}
          animate={routeTransition.animate}
          exit={routeTransition.exit}
        >
          <Suspense
            fallback={
              <div className="flex min-h-screen items-center justify-center text-term-green">
                <span className="caret">_</span> loading
              </div>
            }
          >
            <Outlet />
          </Suspense>
        </motion.main>
      </AnimatePresence>
      <Footer />
      <ScrollRestoration />
    </>
  );
};

export default App;
