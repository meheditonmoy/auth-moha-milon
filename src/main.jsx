import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './compunents/Root';
import Home from './compunents/Home';
import Register from './compunents/Register';
import LogIn from './compunents/LogIn';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path:'/register',
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <LogIn></LogIn>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
