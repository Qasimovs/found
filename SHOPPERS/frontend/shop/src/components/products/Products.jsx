import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../redux/features/productSlice'
import Cards from '../cards/Cards'
import Sorting from '../sorting/Sorting'

const Products = () => {
    const dispatch = useDispatch()
    const {products} = useSelector((state) => state.products)
    

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])
    


    return (
        <div className='Container' >

            <h2 style={{ display: "flex", justifyContent: "center", gap: "20px", padding: "30px 0" }}>Featured Products</h2>
            <Sorting/>

            <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
                {
                    products && products.map((product) => <Cards key={product._id} product={product}/>)
                }
                
            </div>

        </div>
    )
}

export default Products
