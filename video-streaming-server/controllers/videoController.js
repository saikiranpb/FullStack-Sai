const video=require('../models/video')

exports.getVideo=(req,res)=>{
    video.find()
    .then(result=>{
        console.log(result)
        res.status(200).json({
           result
        })
    })
    .catch((error) => {
      res.status(404).json({message: "error in db" });
    });
}