const express=require('express')
const restController=require('../controllers/restaurant')

const router=express.Router();

router.post('/filter/:pageNo',restController.getRestaurant)
router.post('/search',restController.getRestDetails)

module.exports=router;