import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ExamplePage from './views/ExamplePage';
import MainPage from './views/MainPage';
import MealPage from './views/MealPage';

import './styles/index.scss';

const ROUTER = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/example',
    element: <ExamplePage />,
  },
  {
    path: '/meal',
    element: <MealPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={ROUTER} />
  </React.StrictMode>,
);
