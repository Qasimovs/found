import React from 'react'
import "./category.css"

const Category = () => {
  return (
    <div className='Container'>
        <div className="total">
<div className='cards'>
        <img style={{width:"90%"}} src="https://preview.colorlib.com/theme/shoppers/images/women.jpg" alt="" />
        <div className='cards-cont'>
                <p>Collections</p>
                <strong>Women</strong>
        </div>
      </div>
      <div className='cards'>
        <img style={{width:"90%"}} src="https://preview.colorlib.com/theme/shoppers/images/children.jpg" alt="" />
        <div className='cards-cont'>
                <p>Collections</p>
                <strong>Children</strong>
        </div>
      </div>
      <div className='cards'>
        <img style={{width:"90%"}} src="https://preview.colorlib.com/theme/shoppers/images/men.jpg" alt="" />
        <div className='cards-cont'>
                <p>Collections</p>
                <strong>Men</strong>
        </div>
      </div>
        </div>
      
    </div>
  )
}

export default Category
