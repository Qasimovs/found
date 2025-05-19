import React from 'react'
import { IoIosHeartEmpty } from "react-icons/io";
import { FaShoppingBasket } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Wrap = () => {
  return (
    <div style={{display:"flex",alignItems:"center" , gap:"20px"}}>
<IoIosHeartEmpty  size={24} />
<Link to="/basket"> 
<FaShoppingBasket  size={24} />
</Link>

<Link to="/admin">
<button> ADMIN </button>
</Link>
    </div>
  )
}

export default Wrap
