import express from 'express'
import cors from 'cors'
import {dbConnection} from "./database/dbConnection.js"
import {errorMiddleware} from "./error/error.js"

import reservationRouter from "./routes/reservationRoute.js"
const app =express();

app.use(cors({
    origin: 'https://khazanakhana.netlify.app', // Allow specific origin
    methods: 'GET,POST,PUT,DELETE,OPTIONS', // Specify allowed methods
    allowedHeaders: 'Content-Type,Authorization',
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