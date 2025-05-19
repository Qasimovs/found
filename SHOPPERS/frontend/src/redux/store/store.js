import { configureStore } from '@reduxjs/toolkit'
import  productSlice  from '../features/ProductSlice'
<<<<<<< HEAD
import basketSlice from '../features/basketSlice'

export const store = configureStore({
  reducer: {products:productSlice,basket:basketSlice},
=======

export const store = configureStore({
  reducer: {products:productSlice},
>>>>>>> fdae8db9bb7e0ccefd0cac3f357dffe068fa00fc
})