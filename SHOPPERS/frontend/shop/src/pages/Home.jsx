import React from 'react'
import Hero from '../components/hero/Hero'
import Infocard from '../components/infocard/Infocard'
import Category from '../components/category/Category'
import Products from '../components/products/Products'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Infocard/>
      <Category/>
      <Products/>
    </div>
  )
}

export default Home
