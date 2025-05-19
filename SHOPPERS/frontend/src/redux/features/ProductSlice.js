import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios"

const initialState = {
  products: [],
};

<<<<<<< HEAD
const baseURL = "http://localhost:4000/api/products";

export const getProducts = createAsyncThunk("products/getProducts", async () => {
  const response = await axios.get(baseURL);
  return response.data; // 
});
=======
const baseURL="http://localhost:4000/api/products"
export const getProducts =createAsyncThunk("products/create",async ()=>{
    let data =await axios.get(baseURL)
    return data
})
>>>>>>> fdae8db9bb7e0ccefd0cac3f357dffe068fa00fc

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
<<<<<<< HEAD
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload; 
    });
  },
});
export const {} = productSlice.actions

export default productSlice.reducer;
=======
    extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products=action.payload
    })
  },
})

export const {} = productSlice.actions

export default productSlice.reducer
>>>>>>> fdae8db9bb7e0ccefd0cac3f357dffe068fa00fc
