import React from 'react'
import "./Text.css"
import { FaBusSimple } from "react-icons/fa6";
import { MdRefresh } from "react-icons/md";
import { FaQuestion } from "react-icons/fa";

const Text = () => {
    return (
        <section id='sectiontwo'>
            <div className="container">
                <div className="texts">
                    <div className="ship" style={{ fontSize: "25px" }}>
                        <div><FaBusSimple size="60px" /></div>
                         <div className='hp'>
                            <h3>FREE SHIP</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>

                        </div>

                    </div>
                    <div className="retur" style={{ fontSize: "25px" }}>
                        <div><MdRefresh  size="60px" /></div>
                        <div className='hp'>
                            <h3>FREE RETURNS</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>

                        </div>



                    </div>
                    <div className="custom" style={{ fontSize: "25px" }}>
                        <div><FaQuestion  size= "60px"/></div>
                         <div className='hp'>
                            <h3>FREE Customer</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>

                        </div>
                    </div>

                </div>
            </div>


        </section>
    )
}

export default Text