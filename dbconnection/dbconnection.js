const { mongoose } = require("mongoose")



const connectDB= async()=>{

  try{

     await mongoose.connect(`mongodb+srv://neerajdeori82:1E2b1iFqUTQWSwgj@cluster0.l0jwbg7.mongodb.net/`,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
     }) 
     console.log("connect to db")
  }catch(e){
    console.log(e)
  }
}

module.exports=connectDB