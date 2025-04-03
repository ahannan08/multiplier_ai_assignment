import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import cors from "cors"
import todoRoutes from "./routes/routes.js";
import dotenv from "dotenv"
dotenv.config()
//initialize application

const app = express()

//env
//MONGO URI

const MONGO_URI = process.env.MONGO_URI
//PORT
const PORT = process.env.PORT || 5000;



//middleware 
app.use(express.json())
app.use(cors())


app.use("/todo", todoRoutes);

//connect mongo db
mongoose.connect(MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("MongoDB Connected"))
.catch((err) => console.error("MongoDB Connection Error:", err));




//start server
app.listen(PORT, ()=>{
console.log("Server running on port", `${PORT}`)
})
