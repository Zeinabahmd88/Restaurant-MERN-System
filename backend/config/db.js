import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect("mongodb+srv://zeinab765432:Zeinab1110@cluster0.5ftzihp.mongodb.net/food")
        .then(() => console.log("DB CONNECTED"))
        .catch((err) => console.error("DB CONNECTION ERROR:", err));
};
