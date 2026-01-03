import mongoose from "mongoose";

const connectDB = async ()=>{

    try 
    {
        const connection_Resp =  await mongoose.connect(`${process.env.MONGODB_URI}`);
        console.log(`MONGODB CONNECTION SUCCESSFULLY !! DB HOST : ${connection_Resp.connection.host}`);
          
    } catch (error) {

        console.log("MONGODB CONNECTION ERROR !!!", error);
        process.exit(1);
    }
};

export default connectDB;