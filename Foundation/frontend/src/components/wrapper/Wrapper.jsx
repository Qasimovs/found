import React from 'react'
import "./Wrapper.css"
import { FaHeart } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';
<FaHeart />

const Wrapper = () => {
  return (
    <div className='wrapper'>
        <Link>
        <FaHeart />
        <sup>0</sup>
        </Link>
        <Link>
        <FaBasketShopping />
        <sup>0</sup>
        </Link>
    </div>
  )
}

export default Wrapper