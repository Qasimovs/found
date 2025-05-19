import express from "express"
import { getProduct, productCreate, productDelete } from "../controllers/productController.js"

const productRouter=express.Router()

productRouter.post("/",productCreate)
productRouter.delete("/",productDelete)
productRouter.get("/",getProduct)
export default productRouter