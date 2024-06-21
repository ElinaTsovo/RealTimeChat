import { response } from "express";
import mongoose from "mongoose";
const url = process.env.DB_URL

export const dbConnection = async() =>{
    try {
        await mongoose.connect(`${url}`)
        console.log('DataBase Connected')
    } catch (error) {
        console.log('DataBase not connected')
    }
}