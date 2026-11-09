import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect(process.env.MONGODB_CONNECTIONSTRING)
        .then(() => { console.log('DB connected') })
        .catch((err) => { console.log('DB error:', err) })
}