import { createSlice } from "@reduxjs/toolkit";
import axios from "axios"

const initialState = {
  basket: [],
};




export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addBasket:(state,action)=>{
      let findProduct =state.basket.find((item) =>item._id == action.payload._id)

      if (!findProduct) {
        state.basket.push({...action.payload,count :1})
        
      }else{
        findProduct.count +=1
      }


    }
  },
 
});
export const {addBasket} = basketSlice.actions

export default basketSlice.reducer;
