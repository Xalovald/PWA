import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';
import Card from './Component/Card.js';
import Home from './Screen/Home.js';

const routerConfig = createBrowserRouter ([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/Card",
        element: <Card/>,
      },
      {
        path: "/Home",
        element: <Home />

      }

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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
