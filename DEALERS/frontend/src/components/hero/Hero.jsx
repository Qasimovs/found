import React from 'react'
import "./Hero.css"

const Hero = () => {
  return (
    <div>
        <div className="container">
            <div className="hero">
                <div className="madewell">
                    <h1>Madewell</h1>
                    <p>Summer Collection</p>
                    <p>1,499</p>
                    <div className='btn'>
                        <button>Shop Now</button>
                        <button className='blue'>Shop Now</button>
                    </div>
                </div>
                <div className='girl'>
                    <img src="https://preview.colorlib.com/theme/dealers/images/new/person_transparent.png" alt="" />

                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero