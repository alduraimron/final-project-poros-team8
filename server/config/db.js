const mongoose = require("mongoose");

mongoose.set('strictQuery', false);

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/BlogApp";
//mongoose.connect("mongodb://127.0.0.1:27017/BlogApp").then(()=>{
//mongoose.connect("mongodb://admin:password@localhost:27017/BlogApp?authSource=admin")
mongoose.connect(MONGO_URI).then(()=>{
    console.log("connected!");
}).catch((err)=>{
    console.log(err);
})