import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import 'dotenv/config'
// App config
const app = express();
const port = 4000;

// Middleware
app.use(express.json());
app.use(cors());

// db connection
connectDB();


//api endpoints
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.get("/", (req, res) => {
    res.send("API WORKING");
});

app.use("/api/user",userRouter)

app.listen(port, () => {
console.log(`SERVER STARTED on http://localhost:${port}`) // ✅ Correct
});


//mongodb+srv://zeinab765432:Zeinab1110@cluster0.5ftzihp.mongodb.net/?