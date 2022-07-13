const mongoose=require('mongoose');

const videoSchema= new mongoose.Schema({
   videoid:{
        type: Number,
        required:true
    },
    caption:{
        type:String,
        required:true
    },
    link:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    thumbnail:{
        type:String,
        required:true
    }
})

module.exports= mongoose.model("Video",videoSchema,"video")