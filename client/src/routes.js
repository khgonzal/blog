import { createBrowserRouter } from 'react-router-dom';
import { Home } from './pages/Home/index.tsx';
import { Archives } from './pages/Archives/index.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  { path: '/archives', element: <Archives /> },
]);
