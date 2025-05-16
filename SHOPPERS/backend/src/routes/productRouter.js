import express from "express";
import { getProduct, productCreate, productDelete } from "../controllers/productContoller.js";

const productRouter=express.Router()

productRouter.post("/",productCreate)
productRouter.delete("/:id",productDelete)
productRouter.get("/",getProduct)

export default productRouter