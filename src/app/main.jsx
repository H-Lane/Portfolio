import React from 'react'
import ReactDOM from 'react-dom/client'
import '../styles/index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from './App.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
