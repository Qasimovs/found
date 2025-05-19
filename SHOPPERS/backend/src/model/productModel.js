import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name:{type:String},
    title:{type:String},
    image:{type:String},
    price:{type:Number}
})
const product = mongoose.model("Product" , productSchema)

export default product