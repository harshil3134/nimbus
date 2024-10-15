import express from 'express';
import userRoutes from '../routes/userRoutes.js';
import watchlistRoutes from "../routes/watchlistRoutes.js"
import cors from "cors";
import cookieParser from "cookie-parser"




const app=express();

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    method: ["GET", "POST", "DELETE", "PUT"],
    credentials:true,
}))



const PORT=process.env.PORT || 5000;
// Parse incoming JSON payloads
app.use(express.json({}));

app.use(cookieParser())

// Parse URL-encoded payloads (for form submissions)
app.use(express.urlencoded({ extended: true }));





//Routes
app.use("/api/v1/user",userRoutes)
app.use("/api/v1/watchlist",watchlistRoutes)



export {app}