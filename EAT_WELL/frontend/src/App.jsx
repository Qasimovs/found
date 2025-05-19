import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Offer from './pages/Offer'
import News from './pages/News'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      }
      ,
      {
        path: "/offer",
        element: <Offer />
      },
      {
        path: "/news",
        element: <News />
      },
       {
        path: "/gallery",
        element: <Gallery />
      },
      {
        path: "/contact",
        element: <Contact />
      }
    ]
  }
])

function App() {


  return (
    <RouterProvider router={router} />
  )
}

export default App
