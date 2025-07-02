import mongoose from "mongoose";
export const connectDB = async ()=>{
    try{
        mongoose.connection.on('connected', ()=>console.log('Database connected'))
        await mongoose.connect(`${process.env.MONGOURL}/breaking-chat`);
    } catch(e){
        console.log(e);
    }
}