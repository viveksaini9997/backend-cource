// require('dotenv').config({path:"./env"})

import dotenv from "dotenv";
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDb from "./db/index.js";

dotenv.config({
  path: "./env",
});

connectDb()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Mongodb is running ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("Mongodb connection error:", err);
  });

/*
import express from "express"
const  app = express()
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
    app.on("error",(error)=>{
        console.log("ERROR:", error)
        throw error
    })
    app.listen(process.env.PORT,()=>{
        console.log(`App is listing on ${process.env.PORT}`)
    })
  } catch (error) {
    console.error("ERROR:", error);
    throw err;
  }
})();*/
