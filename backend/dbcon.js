
import mongoose from "mongoose";


export default async function connectdb() {

    try{
        await mongoose.connect(process.env.MONGOURI);
      console.log("database connected sucesfully")
    }
    catch(error) {
        console.log("error",error);
        
    }
}