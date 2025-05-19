import product from "../model/productModel.js"

export const createProduct = async (req , res) => {
    try {
        let newProduct = new product(req.body)

        await newProduct.save()
res.status(201).send(" products  success created")        
if (!newProduct) {
res.status(400).send(" products  not created")        
    
}
    } catch (error) {
res.status(500).send("Server Errror")        
    }
}


export const deleteProduct = async (req , res) => {
    try {
        let {id } = req.params

        let deletedProduct = await product.findByIdAndDelete(id) 
        res.status(201).send(" products  success deleted")        
if (!deletedProduct) {
res.status(400).send(" products  not deleted")        
    
}

        
    } catch (error) {
res.status(500).send("Server Errror")        
    }
}


export const getProduct = async (req , res) => {
    try {

        let products = await product.find()
                res.status(201).send(products)        
if (!product) {
res.status(404).send(" products  not find")        
    
}
        
    } catch (error) {
res.status(500).send("Server Errror")        
    }
}