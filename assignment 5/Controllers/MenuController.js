const Menu=require('../db/mongoose');

exports.index= (req,res)=>{
  Menu.find().then(
    result=>{
        res.status(200).json({
            message: "menu fetched",
            data :result
        })
    })
    .catch(error=>{
        res.status(500).json({message:"error"})
    })
}

