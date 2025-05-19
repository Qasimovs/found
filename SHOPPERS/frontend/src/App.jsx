import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Shop from './pages/Shop'
import Catalogue from './pages/Catalogue'
import New from './pages/New'
import Contact from './pages/Contact'
import Basket from './pages/basket/Basket'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element:<Home/>
      },
      {
        path: "/about",
        element:<About/>
      },
      {
        path: "/shop",
        element:<Shop/>
      },
      {
        path: "/catalogue",
        element:<Catalogue/>
      },
      {
        path: "/new",
        element:<New/>
      },
      {
        path: "/contact",
        element:<Contact/>
      },
      {
        path: "/basket",
        element:<Basket/>
      }
    ]
  }
])

function App() {
  const [count, setCount] = useState(0)

  return (
    <RouterProvider router={router}/>
  )
}

export default App
