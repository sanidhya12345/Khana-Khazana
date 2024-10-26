import mongoose from "mongoose";

export const dbConnection=()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName:"khanakhazana"
    }).then(()=>{
        console.log("connected to database successfully");
    }).catch((err)=>{
        console.log(err)
    })
}
