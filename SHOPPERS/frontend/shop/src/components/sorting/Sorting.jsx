import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { high, low, search } from '../../redux/features/productSlice'

const Sorting = () => {

    const dispatch = useDispatch()
    const {products} = useSelector((state) => state.products)

  return (
    <div className='Container' style={{display:"flex" , justifyContent:"space-between" ,padding:"40px 0"}}>

        <div>
            <input type="text" onChange={(e) => dispatch(search(e.target.value))}/>
        </div>

        <div>
            <button  onClick={()=>dispatch(high(products.price))}>Sort High to Low</button>
            <button onClick={()=>dispatch(low(products.price))}>Sort Low to High</button>
        </div>

      
    </div>
  )
}

export default Sorting
