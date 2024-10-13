import express from 'express';
import userRoutes from '../routes/userRoutes.js';
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

// Serve static files from the 'public' directory
// app.use(express.static('public'));


app.post('/api/v1',(req,res)=>{
    let {user}=req.body
    res.send(`hola .. amigos ${user}`);
})

app.use("/api/v1/user",userRoutes)

// app.use("/api/v1/user",userRoutes);

// app.listen(PORT,()=>{
//     console.log(`server is running on ${PORT}`);
// })

export {app}