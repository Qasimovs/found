import React from 'react'
import "./Wrapper.css"
import { FaRegHeart } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";
import { Button } from '@mui/material';
import { Link } from 'react-router';



const Wrapper = () => {
    return (
        <div className='wrapper'>
            <Button className='btn' variant="outlined"><Link>Admin</Link></Button>

            <Link>
                <FaRegHeart />
                <sup className='sup'>0</sup>
            </Link>
            <Link>
                <FaBasketShopping />
                <sup className='sup'>0</sup>
            </Link>
        </div>
    )
}

export default Wrapper