/* eslint-disable react-refresh/only-export-components -- route config file, not a component module */
import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import App from './App';
import Home from './routes/Home';

// Detail views are lazy so their chunks code-split (Slide 3 · "Lazy-load route chunks").
const CaseStudy = lazy(() => import('./routes/CaseStudy'));
const WritingIndex = lazy(() => import('./routes/WritingIndex'));
const Post = lazy(() => import('./routes/Post'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'work/:slug', element: <CaseStudy /> },
      { path: 'blog', element: <WritingIndex /> },
      { path: 'blog/:slug', element: <Post /> },
    ],
  },
]);
