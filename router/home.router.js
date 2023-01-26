//t9sim l module
const HomeController=require('../controllers/home.controller')
const router=require('express').Router()

router.get('/',HomeController.ThreeBookController)


module.exports=router 