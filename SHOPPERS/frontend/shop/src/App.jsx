import React from 'react'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './components/layout/Layout';
import About from './pages/About';
import Contact from './pages/Contact';
import Shop from './pages/Shop';
import Catalog from './pages/Catalog';
import Arrivals from './pages/Arrivals';
import Admin from './pages/admin/Admin';
import Basket from './pages/Basket';
import Error from './pages/Error';
import Home from './pages/Home';
import Detail from './pages/detail/Detail';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/catalog",
        element: <Catalog />,
      },
      {
        path: "/arrivals",
        element: <Arrivals />,
      },
      {
        path: "/admin",
        element: <Admin />,
      },
      {
        path: "/basket",
        element: <Basket />,
      },
      {
        path: "/:id",
        element: <Detail />,
      },
      {
        path: "*",
        element: <Error />,
      },

    ],
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
