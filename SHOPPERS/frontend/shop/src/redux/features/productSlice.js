import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios"

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async () => {
    const {data} = await axios("http://localhost:4000/api/product")
    return data
  },
)
export const deleteProducts = createAsyncThunk(
  'products/deleteProducts',
  async (_id) => {
    const {data} = await axios.delete(`http://localhost:4000/api/product/${_id}`)
    return _id
  },
)
export const createProduct = createAsyncThunk(
  'products/createProduct',
  async (newProduct) => {
    const {data} = await axios.post(`http://localhost:4000/api/product` ,newProduct)
    return data
  },
)




const initialState = {
  products: [],
  allproducts: []
}


export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    high:(state)=>{
              state.products = state.products.slice().sort((a, b) => a.price- b.price)
    },
    low:(state)=>{
              state.products = state.products.slice().sort((a, b) => b.price- a.price)
    },
    search:(state,action)=>{
              state.products = state.allproducts.filter((product)=>product.name.toLowerCase().trim().includes(action.payload))
    },
   
  },
    extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload
      state.allproducts = action.payload
    }),
    builder.addCase(deleteProducts.fulfilled, (state, action) => {
      state.products = state.products.filter((item)=> item._id != action.payload)
    }),
    builder.addCase(createProduct.fulfilled, (state, action) => {
          state.products.push(action.payload);
    state.allproducts.push(action.payload); 
    })
   
  },
  

})

export const { high,low ,search} = productSlice.actions

export default productSlice.reducer