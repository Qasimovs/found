import React from 'react'
import "./Wrapper.css"
import { FaUser } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';
<FaHeart />

const Wrapper = () => {
  return (
    <div className='wrapper'>
        <Link><FaUser /></Link>
        <Link><FaHeart />
        <sup>0</sup>
        </Link>
        <Link> <FaBasketShopping /> <sup>0  </sup></Link>
        
    </div>
  )
}

export default Wrapper