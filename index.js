const express=require("express")
const app=express()



const crudroutes=require("./routes/crudroutes")


console.log(app)

app.use("/api",crudroutes)

