import dotenv from "dotenv";
import connectDB from "./db/Db_connection.js";
import { app } from "./app.js";


dotenv.config();
connectDB()

 .then(() => {
    app.listen(process.env.PORT || 8080, () => {
      console.log(`Server is running at port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection faliure !!!!", err);
  });