import product from "../models/productModel.js"


export const productCreate=async(req,res)=>{
    try {
        let newProduct=new product(req.body)
        await newProduct.save()
        res.status(200).send("Product create succes" ,newProduct)

        
    } catch (error) {
        res.status(500).send("Server error")
    }
}
export const productDelete=async(req,res)=>{
    let {id}=req.params
    try {
        let deleteproduct =await product.findByIdAndDelete(id)
        if (!deleteproduct) {
            res.status(401).send("Product not found")
        }
        res.status(200).send("Product delete succes")
        

        
    } catch (error) {
        res.status(500).send("Server error")
    }
}
export const getProduct=async(req,res)=>{
    try {
        let products=await product.find()
        if (!products) {
            res.status(401).send("Product not found")
        }
        res.status(200).send(products)
        

        
    } catch (error) {
        res.status(500).send("Server error")
    }
}