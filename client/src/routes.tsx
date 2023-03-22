import { createBrowserRouter } from 'react-router-dom';

// Components
import { Home } from './pages/Home';
import { Archives } from './pages/Archives';
import { SignIn } from './pages/SignIn';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  { path: '/archives', element: <Archives /> },
  { path: '/sign-in', element: <SignIn /> },
]);
