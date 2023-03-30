import { createBrowserRouter } from 'react-router-dom';

// Components
import { Home } from './pages/Home';
import { Archives } from './pages/Archives';
import { SignIn } from './pages/SignIn';
import { Content } from 'pages/Content';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  { path: '/archives', element: <Archives /> },
  { path: '/sign-in', element: <SignIn /> },
  { path: '/create-content', element: <Content /> },
  { path: '/edit-content/:id', element: <Content /> },
]);
