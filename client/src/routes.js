import { createBrowserRouter } from 'react-router-dom';
import { Home } from './pages/Home/index';
import { Archives } from './pages/Archives/index';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  { path: '/archives', element: <Archives /> },
]);
