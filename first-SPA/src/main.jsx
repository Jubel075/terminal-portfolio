import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';

import './index.css';
import { router } from './router';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* reducedMotion="user" makes every animation respect prefers-reduced-motion */}
    <MotionConfig reducedMotion="user">
      <RouterProvider router={router} />
    </MotionConfig>
  </StrictMode>
);
