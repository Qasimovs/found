import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Table from 'react-bootstrap/Table'
import { deleteProducts, createProduct } from '../../redux/features/productSlice'
import { useFormik } from 'formik'

const Admin = () => {
  const dispatch = useDispatch()
  const { products } = useSelector((state) => state.products)

  const formik = useFormik({
    initialValues: {
      name: '',
      image: '',
      price: ''
    },
    onSubmit: (values, { resetForm }) => {
      dispatch(createProduct(values))
      resetForm()
    }
  })

  return (
    <div className='Container'>
      <form onSubmit={formik.handleSubmit} style={{ marginBottom: '20px' }}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formik.values.image}
          onChange={formik.handleChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formik.values.price}
          onChange={formik.handleChange}
        />
        <button type="submit">Add Product</button>
      </form>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Settings</th>
          </tr>
        </thead>
        <tbody>
          {
            products && products.map((item) =>
              <tr key={item._id}>
                <td style={{ width: "20%" }}>
                  <img style={{ width: "100%" }} src={item.image} alt={item.name} />
                </td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                  <button onClick={() => dispatch(deleteProducts(item._id))}>Remove</button>
                </td>
              </tr>
            )
          }
        </tbody>
      </Table>
    </div>
  )
}

export default Admin
