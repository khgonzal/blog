import { UserProvider } from 'context';
import React, { createContext, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';

const App = () => {
  return (
    <React.StrictMode>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(App());
