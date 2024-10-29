import mongoose from "mongoose";

const MONGO_URI='mongodb+srv://varshneysanidhya:RhyJgU1mhAJHQojN@cluster0.dlorz.mongodb.net/?retryWrites=true&appName=Cluster0';
export const dbConnection=()=>{
    mongoose.connect(MONGO_URI,{
        dbName:"khanakhazana"
    }).then(()=>{
        console.log("connected to database successfully");
    }).catch((err)=>{
        console.log(err)
    })
}
