import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import App from './App';

import Agenda from './Screen/agenda';
import Counter from './Screen/Counter';
import Home from './Screen/Home';
import Typer from './Screen/Typer';
import Weather from './Screen/Weather';

const routerConfig = createBrowserRouter ([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/agenda",
        element: <Agenda day='lundi'/>,
      },
      {
        path:"/Counter",
        element: <Counter />,
      },
      {
        path:"/Home",
        element: <Home />,
      },
      {
        path:"/Typer",
        element: <Typer />,
      },
      {
        path:"/Weather",
        element: <Weather />,
      },
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={routerConfig}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
