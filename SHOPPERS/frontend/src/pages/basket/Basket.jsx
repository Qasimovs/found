import React from 'react'
import { useSelector } from 'react-redux'
import Table from 'react-bootstrap/Table';
import Button from '@mui/material/Button';

const Basket = () => {

    let { basket } = useSelector((state) => state.basket)
    console.log(basket);

    return (
        <div className='Container'>
            <Table striped bordered hover >
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Count</th>
                        <th>Settings</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        basket && basket.map((item) =>
                            <tr key={item._id}>
                                <td style={{ width: "20%" }}><img style={{ width: "100%" }} src={item.image} alt="" />  </td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.count}</td>
                                <td><Button variant="contained" color="success">
                                    Remove
                                </Button> </td>
                            </tr>)
                    }
                </tbody>
            </Table>

        </div>
    )
}

export default Basket