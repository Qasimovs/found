import React from 'react'
import Product from '../product/Product'
import "./Products.css"

const Products = () => {
    return (
        <section id='sectionone'>
            <div className="container">
                <h1 style={{textAlign:"center"}}>Salam </h1>
                <div className="row products">
                    <div className="col-6">
                        <h2>Cards</h2>
                    </div>
                    <div className="col-6" style={{ display: 'flex', justifyContent: "end" }}>
                        <div>
                            <button>High</button>
                            <button>low</button>
                        </div>
                    </div>
                </div>
                <div>
                    <Product />
                </div>
            </div>



        </section>

    )
}

export default Products