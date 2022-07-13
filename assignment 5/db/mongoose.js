const mongoose=require('mongoose')



const menuSchema= new mongoose.Schema({
    itemName: {
        type: String,
        required:true
    },
    itemPrice: {
        type: Number,
        required:true

    },
    isVeg: {
        type: Boolean,
        required:true

    },
    restName:{
        type:String,
        required:true

    }
},{timestamps:true})

module.exports= mongoose.model('menu',menuSchema,"menu")
