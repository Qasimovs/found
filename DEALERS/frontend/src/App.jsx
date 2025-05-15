import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Catalogs from './pages/Catalogs'
import Contact from './pages/Contact'

const router = createBrowserRouter([

  {path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/shop",
        element:<Shop/>
      },
      {
        path:"/catalogs",
        element:<Catalogs/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
    ]

  }
])



function App() {
  

  return (
   <RouterProvider router={router}/>
  )
}

export default App
