const City=require('../Models/City.json')

exports.getCityList=(req,res)=>{
    const cityList=City.map(item=> item.name)
    res.status(200).json({
        message: "List of cities fetched successfully",
        data:cityList
    })
}