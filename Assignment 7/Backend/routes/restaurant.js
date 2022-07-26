const express=require('express')
const restController=require('../controllers/restaurant')

const router=express.Router();


router.get('/details/:Name',restController.getRestaurantByName)
router.get('/:cID',restController.getRestaurantByCityID)

module.exports=router;