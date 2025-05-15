import mongoose  from "mongoose";

const mongooseSchema=mongoose.Schema({
    name:{type:String,required:true},
    description:{type:String,required:true},
    price:{type:Number,required:true},
},{collection:"Products"})

const product =mongoose.model("Products",mongooseSchema)
export default product