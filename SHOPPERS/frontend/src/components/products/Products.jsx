import React, { useEffect } from 'react'
import "./Products.css"
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../redux/features/ProductSlice'

const Products = () => {

    const {products} =useSelector((state)=>state.products)
    const dispatch =useDispatch();
    console.log(products);

    useEffect(()=>{
        dispatch(getProducts())
    },[dispatch])
    





    
    return (
        <div>
            <div className="container">
                <div className="products">
                    <h2>Featured Products</h2>
                    <div className='highlow'>
                        <button style={{padding:"15px 30px",fontSize:"20px",cursor:"pointer"}}>High</button>
                        <button style={{padding:"15px 30px",fontSize:"20px",cursor:"pointer"}}>Low</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Products