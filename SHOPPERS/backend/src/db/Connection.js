import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("Mongo db connected");
    

}).catch(()=>{
    console.log("Mongo db not connected");
    
})