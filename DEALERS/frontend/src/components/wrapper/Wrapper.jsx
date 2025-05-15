import React from 'react'
import { FaHeart } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import "./Wrapper.css"


const Wrapper = () => {
  return (
    <div className='wrapper'>
        <Link><FaHeart />
        <sup>0</sup>
        </Link>
        <Link><FaBasketShopping />
        <sup>0</sup>
        </Link>

    </div>
  )
}

export default Wrapper