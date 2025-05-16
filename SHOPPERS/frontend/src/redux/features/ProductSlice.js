import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios"

const initialState = {
  products: [],
};

const baseURL="http://localhost:4000/api/products"
export const getProducts =createAsyncThunk("products/create",async ()=>{
    let data =await axios.get(baseURL)
    return data
})

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
    extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products=action.payload
    })
  },
})

export const {} = productSlice.actions

export default productSlice.reducer