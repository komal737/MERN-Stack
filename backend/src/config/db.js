import mongoose from "mongoose"
const connectDataBase=async()=>{
  try{
// await mongoose.connect("mongodb+srv://admin:admin%40123@cluster0.ksl0mcl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
await mongoose.connect(process.env.MONGO_URI)
    console.log("database is connectd ");
    
  }catch(err)
  {
console.error("Error connecting in databse conmecting");
process.exit(1)
  }
}
export default connectDataBase