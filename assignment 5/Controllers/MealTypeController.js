const MealType=require('../Models/Mealtype.json')

exports.getMealType= (req,res)=>{
    const type=MealType.map(item => ({ id:item._id , name:item.name ,  "meal-type":item._id}))
    res.status(200).json({
        message: "Meal-types fetched successfully",
        data:type
    })
}