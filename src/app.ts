import dotenv from 'dotenv';
dotenv.config();
import express from 'express'
import { dbConnection } from './utils/db';

const app = express();

const port = process.env.PORT!

app.listen(port,()=>{
    console.log(`Server t=running on http://localhost:${port}`)
})

dbConnection();