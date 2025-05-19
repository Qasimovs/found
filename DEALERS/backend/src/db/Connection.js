import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("Mongo DB connected");
    
}).catch(()=>{
    console.log("Mongo DB not connected");
    
})