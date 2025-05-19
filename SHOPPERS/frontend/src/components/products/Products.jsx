import React, { useEffect } from 'react'
import "./Products.css"
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../redux/features/ProductSlice'
<<<<<<< HEAD
import Product from '../product/Product'

const Products = () => {

    const { products } = useSelector((state) => state.products)
    const dispatch = useDispatch();
    console.log(products);

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    


=======

const Products = () => {

    const {products} =useSelector((state)=>state.products)
    const dispatch =useDispatch();
    console.log(products);

    useEffect(()=>{
        dispatch(getProducts())
    },[dispatch])
    





    
>>>>>>> fdae8db9bb7e0ccefd0cac3f357dffe068fa00fc
    return (
        <div>
            <div className="container">
                <div className="products">
                    <h2>Featured Products</h2>
                    <div className='highlow'>
<<<<<<< HEAD
                        <button style={{ padding: "15px 30px", fontSize: "20px", cursor: "pointer" }}>High</button>
                        <button style={{ padding: "15px 30px", fontSize: "20px", cursor: "pointer" }}>Low</button>
                    </div>

                </div>
                <div className="products_list">
                    {
                        products && products.map((product) => <Product key={product._id} product={product} />)
                    }
                </div>

=======
                        <button style={{padding:"15px 30px",fontSize:"20px",cursor:"pointer"}}>High</button>
                        <button style={{padding:"15px 30px",fontSize:"20px",cursor:"pointer"}}>Low</button>
                    </div>

                </div>
>>>>>>> fdae8db9bb7e0ccefd0cac3f357dffe068fa00fc
            </div>
        </div>
    )
}

export default Products