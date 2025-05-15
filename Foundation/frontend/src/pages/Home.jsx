import React from 'react'
import Children from '../components/children/Children'
import Hungry from '../components/hungry/Hungry'
import Products from '../components/products/Products'

const Home = () => {
  return (
    <div>
      <Children/>
      <Hungry/>
      <Products/>
    </div>
  )
}

export default Home