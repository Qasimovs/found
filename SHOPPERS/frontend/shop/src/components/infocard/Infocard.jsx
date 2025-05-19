import React from 'react'
import { FaCar } from "react-icons/fa6";

const Infocard = () => {
    return (
        <div className='Container'>
            <div style={{display:"flex" ,padding:"40px  0" ,gap:"12px" }}>
 <div className="info" style={{display:"flex" ,gap:"20px" ,alignItems:"center"}}>
                <FaCar size={100}/>
                <div>
                    <strong>Free Shipping </strong>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
                </div>


            </div>
            <div className="info" style={{display:"flex" ,gap:"20px",alignItems:"center"}}>
                <FaCar size={100}/>
                <div>
                    <strong>Free Shipping </strong>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
                </div>


            </div>
            <div className="info" style={{display:"flex" ,gap:"20px",alignItems:"center"}}>
                <FaCar size={100}/>
                <div>
                    <strong>Free Shipping </strong>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
                </div>


            </div>
            </div>
           
        </div>
    )
}

export default Infocard
