import React from 'react'
import { Link } from 'react-router-dom'

const Navlist = () => {
  return (
    <ul style={{display:"flex",justifyContent:"center" , gap:"20px",padding:"20px 0"}}>
      <li>
        <Link  to="/">Home</Link>
      </li>
      <li>
        <Link  to="/about">About</Link>
      </li>
      <li>
        <Link to="/shop">Shop</Link>
      </li>
      <li>
        <Link  to="/catalog">Catalog</Link>
      </li>
      <li>
        <Link  to="/arrivals">Arrivals</Link>
      </li>
      <li>
        <Link  to="/contact">Contact</Link>
      </li>
    </ul>
  )
}

export default Navlist
