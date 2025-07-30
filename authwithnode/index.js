import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./database/connectDb.js";
import authRoutes from "./routes/authRoutes.js";
import cors from "cors";

dotenv.config()
const app = express()
const PORT = process.env.PORT
app.use(express.json()); // allows us to parse incoming requests:req.body
app.use(cors({ origin: "http://localhost:5173", credentials : true}));

app.get("/",(req,res)=>{
    res.send("hello expres222s")
})

app.use("/api/auth",authRoutes);


app.listen(PORT,()=>{
    connectDb();
    console.log(`server running on ${PORT}`)
})