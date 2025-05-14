import React from 'react'
import "./Hungry.css"

const Hungry = () => {
    return (
        <div className="row">

            <div className="col-4" style={{ padding: "20px", backgroundColor: "grey" }}>
                <div className="text" style={{ backgroundColor: 'grey' }}>
                    <h3>RESCUE AN ORPHAN</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,<br /> libero.</p>

                </div>
            </div>




            <div className="col-4" style={{ padding: "20px", backgroundColor: "orange" }}>
                <div className="text " style={{ backgroundColor: "orange" }}>
                    <h3>FEED THE HUNGRY</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, explicabo?</p>

                </div>
            </div>




            <div className="col-4" style={{ padding: "20px", backgroundColor: "red" }}>
                <div className="text" style={{ backgroundColor: "red" }}>
                    <h3>FREE EDUCATION</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, maiores?</p>

                </div>
            </div>




        </div>
    )
}

export default Hungry