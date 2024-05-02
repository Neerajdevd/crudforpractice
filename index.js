const express=require("express")
const app=express()
const connectDB=require("./dbconnection/dbconnection")
const bodyParser = require("body-parser");




const crudroutes=require("./routes/crudroutes")



app.use(bodyParser.json())
app.use("/api",crudroutes)
app.use(express.urlencoded({ extended: true }));




const serverlisten=async ()=>{
   await connectDB()
    app.listen(8000, async()=>{


       console.log("app listen 8000")
    })
}

serverlisten()
