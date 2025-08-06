import express from "express"
import cors from 'cors'
import notesRoutes from "./routes/notesRoutes.js"
import connectDataBase from "./config/db.js"
import dotenv from 'dotenv'
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

const app =express()
app.use(express.json())
;


// middleware


const PORT=process.env.PORT||5001
 
  app.use(
    cors({
      origin: "http://localhost:5173",
    })
  );




app.use(rateLimiter)

app.use("/api/notes",notesRoutes)
connectDataBase().then(()=>{
app.listen(PORT,()=>{
    console.log(`Server is running on Port ${PORT}`);
    
})
})

