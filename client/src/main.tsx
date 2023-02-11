import React from 'react';
import ReactDOM from 'react-dom/client';
import router from './router';
import { UserContextProvider } from './context/ContextProvider';
import { RouterProvider } from 'react-router-dom';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  </React.StrictMode>
);
