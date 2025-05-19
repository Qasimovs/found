import React from 'react'
import { Link } from 'react-router'
import "./Navlist.css"

const Navlist = () => {
  return (
    <div>
        <ul className='list'>
            <li className='list_item'><Link to={"/"}>Home</Link></li>
            <li className='list_item'><Link to={"/about"}>About</Link></li>
            <li className='list_item'><Link to={"/offer"}>Offer</Link></li>
            <li className='list_item'><Link to={"/gallery"}>Gallery</Link></li>
            <li className='list_item'><Link to={"news"}>News</Link></li>
            <li className='list_item'><Link to={"contact"}>Contact</Link></li>
          
        </ul>
    </div>
  )
}

export default Navlist