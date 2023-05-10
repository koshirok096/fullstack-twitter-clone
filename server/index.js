import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auths.js";
import tweetRoutes from "./routes/tweets.js";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config()

const connect = () => {
    mongoose.set("strictQuery", false);
    mongoose
    .connect(process.env.MONGO)
    .then(() => {
        console.log("Connected to Mongo DB. Yay!");
    })
    .catch((err) => {
        throw err;``
    });
};

app.use(express.json());
app.use(cookieParser());
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/tweets", tweetRoutes);

app.listen(8000, () => {
    connect();
    console.log("I'm listening to port 8000");
})
``