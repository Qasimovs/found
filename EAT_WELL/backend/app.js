import express  from "express";
import "dotenv/config"
import "./src/db/Connection.js"
import productRouter from "./src/routes/productRouter.js";


const app =express()
const port =process.env.PORT || 4001;
app.use(express.json())
app.use("/api/products",productRouter)





app.listen(port,()=>{
    console.log(`Server is running ${`http://localhost: ${port}`}`);
    
})