import React from 'react'
<<<<<<< HEAD
import "./Product.css"
import { FaHeart } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addBasket } from '../../redux/features/basketSlice';


const Product = ({ product }) => {

  const dispatch =useDispatch()
  return (
    <section id='card_area'>
        <div className="card">
          <div className="image">
          <FaHeart  size={"30px"} className='heart'/>

            <img src={product.image} alt="" />
          </div>
          <div className="card_content">
            <h3 className="card_title">{product.name}</h3>
            <p className="card_price">{product.description}</p>
            <span className='card_price'> {product.price}</span>
            <button style={{ padding: "10px",cursor:"pointer" }} onClick={()=>dispatch(addBasket(product))}>ADD BASKET</button>
          </div>
        </div>



    </section>
=======

const Product = () => {
  return (
    <div>Product</div>
>>>>>>> fdae8db9bb7e0ccefd0cac3f357dffe068fa00fc
  )
}

export default Product