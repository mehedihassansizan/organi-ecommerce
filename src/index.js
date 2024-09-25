import dotenv from "dotenv";
import { app } from "./app.js";
import connectDB from "./db/index.js";

dotenv.config({
    path: "./.env"
});

connectDB()


.then(() =>{
    app.on("error", (err) =>{
        console.error("Server error:", err);
        throw err;
    }); 

    app.listen(process.env.PORT || 8000, () =>{
        console.log(`server listening on port : ${process.env.PORT}` );
        
    });
})
.catch(err => {
    console.error("Error connecting to MongoDB:", err);
})
