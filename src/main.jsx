import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Bisnis from './pages/Bisnis';
import HyroFinance from './pages/HyroFinance';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'bisnis', element: <Bisnis /> },
      { path: 'hyrofinance', element: <HyroFinance /> },
    ],
  },
]);

// Enable React Router v7 features
if (process.env.NODE_ENV === 'development') {
  window.__reactRouterDevTools = {
    v7_startTransition: true,
    v7_relativeSplatPath: true
  };
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
