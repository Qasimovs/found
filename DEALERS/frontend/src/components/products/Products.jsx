import React from 'react'
import "./Products.css"

const Products = () => {
  return (
    <section  id= ' sectionone'>
        <div className="container">
            <div className="products">
                <h2>Products</h2>
                <div className="highlow">
                    <button>Hihg</button>
                    <button>LOW</button>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Products