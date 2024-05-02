const Datamessage=require("../models/postdata")

const create = async(req,res)=>{

    try{
        const data=req.body;
        const message = new Datamessage(data);

        const saveddata = await message.save();
        console.log(saveddata)
       
        return res.json({
            result:message
    })
    }catch(e){
        console.log(e)
    }

}


const update = async(req,res)=>{

try{
 const data=req.body;
//  console.log("1")
// console.log(data)
const updatedMessage = await Datamessage.findByIdAndUpdate(data._id, { message: data.message });
console.log(updatedMessage.message,"edit")
 const saveddata = await message.save();
 console.log(saveddata)

 return res.json({
     result:message
})
}catch(e){
 console.log(e)
}
}

     const getalldata=async (req,res)=>{
        try{
           console.log('1')
           const messagedata=await Datamessage.find()
           console.log(messagedata)
           return res.json({
            status:true,
            result:messagedata
           })
        }catch(e){
        console.log(e)
        }
      }


const getdatabyid = async(req,res)=>{

    try{
        const data=req.params._id
         console.log(data)
const updatedMessage = await Datamessage.findOne({_id: data});
    console.log(updatedMessage,"edit")
  
    
     return res.json({
         result:updatedMessage
    })
    }catch(e){
     console.log(e)
    }
    }

module.exports={create,update,getdatabyid,getalldata}
      
       




