
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';
import {connectDb} from "./db/index.js"
import {app} from "./utils/app.js"

dotenv.config(
    {
        path: './.env'
    }
);

connectDb()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is running at port :${process.env.PORT}`)
    })
})
.catch((error)=>console.log("error caught",error))



