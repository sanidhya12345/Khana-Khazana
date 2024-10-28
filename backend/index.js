import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import {dbConnection} from "./database/dbConnection.js"
import {errorMiddleware} from "./error/error.js"

import reservationRouter from "./routes/reservationRoute.js"
const app =express();
dotenv.config({path:'./config/config.env'})

app.use(cors({
    origin:'https://khana-khazana-iota.vercel.app',
    methods:["POST"],
    credentials:true
}))

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://khana-khazana-iota.vercel.app'); // Allow requests from any origin
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
app.get("/",(req,res)=>{
    res.send("Hello");
})
app.use(express.json());
app.use(express.urlencoded({extended:true})) 
app.use('/api/v1/reservation',reservationRouter)

dbConnection();

app.use(errorMiddleware)

export default app;