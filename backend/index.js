import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import {dbConnection} from "./database/dbConnection.js"
import {errorMiddleware} from "./error/error.js"

import reservationRouter from "./routes/reservationRoute.js"
const app =express();
dotenv.config({path:'./config/config.env'})

app.use(cors({
    origin:'https://khazanakhana.netlify.app',
    methods: ['GET','POST','HEAD','PUT','PATCH','DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}))

app.get("/",(req,res)=>{
    res.send("Hello");
})
app.use(express.json());
app.use(express.urlencoded({extended:true})) 
app.use('/api/v1/reservation',reservationRouter)

dbConnection();

app.use(errorMiddleware)

export default app;