import React from 'react'
import { Link } from 'react-router-dom'
import "./Navlist.css"

const Navlist = () => {
  return (
    
        <ul className='list'>
            <li className='list_item'><Link to={"/"}>Home</Link></li>
            <li className='list_item'><Link to={"/shop"}>Shop</Link></li>
            <li className='list_item'><Link to={"/catalogs"}>Catalogs</Link></li>
            <li className='list_item'><Link to={"/contact"}>Contact</Link></li>
        </ul>
   
  )
}

export default Navlist