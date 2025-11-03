import React from 'react';
import { createBrowserRouter } from 'react-router';
import RootLayout from '../Layouts/RootLayout';
import Home from '../Pages/Home';
import Apps from '../Pages/Apps';
import Installed from '../Pages/Installed';
import Details from '../Pages/Details';
import NotFound from '../Pages/NotFound';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/apps",
        element: <Apps />,
      },
      {
        path: "/installed",
        element: <Installed />,
      },
      {
        path: "/details/:id",
        element: <Details />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default appRouter;