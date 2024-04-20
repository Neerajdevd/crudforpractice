

const create = async(req,res)=>{

    try{

        return res.json("hello")
    }catch(e){
        console.log(e)
    }

}


module.exports=create