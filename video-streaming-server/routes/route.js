const express=require('express')
const videoController=require('../controllers/videoController')

const router=express.Router();

router.get('/search',videoController.getVideo)

module.exports=router;