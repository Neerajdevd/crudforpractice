const mongoose = require("mongoose");

const PostdataSchema = new mongoose.Schema({
    message:{
        type:String
    } 
})

const Datamessage=mongoose.model("Postdata",PostdataSchema)


module.exports=Datamessage;