const express=require('express')

const City=require('../Controllers/CityController')
const MealType=require('../Controllers/MealTypeController')
const Restaurant=require('../Controllers/RestaurantController')
const Menu=require('../Controllers/MenuController')

const router=express.Router();

router.get('/Menu',Menu.index)
router.get('/getCity',City.getCityList)
router.get('/getRestaurantByCity/:Cname', Restaurant.getRestaurantList)
router.get('/mealType',MealType.getMealType)

module.exports=router;