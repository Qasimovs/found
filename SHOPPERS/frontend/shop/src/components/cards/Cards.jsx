import React from 'react'
import "./cards.css"
import { useDispatch } from 'react-redux'
import { addBasket } from '../../redux/features/basketSlice'
import { Link, useParams } from 'react-router-dom'

const Cards = ({ product }) => {

    const { id } = useParams()
    const dispatch = useDispatch()

    return (
        <div className='single'>
            <Link to={`/product/${product._id}`}>
  <img onClick={() => dispatch(addBasket(id))} style={{ width: "90%", height: "300px" }} src={product.image} alt={product.name} />
</Link>
            <h4>{product.name}</h4>
            <p>{product.title}</p>
            <span>${product.price}</span>
            <button onClick={() => dispatch(addBasket(product))}>Add to Basket</button>
        </div>
    )
}

export default Cards
