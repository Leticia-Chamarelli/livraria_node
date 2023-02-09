import mongoose from "mongoose";

mongoose.connect("mongodb+srv://leticia:liky190903@alura.a5nnjk6.mongodb.net/alura-node");

let db = mongoose.connection; 

export default db;