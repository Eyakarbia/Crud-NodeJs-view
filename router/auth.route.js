const router = require('./home.router')

const route=require('express').Router()







route.get('/register',(req,res,next)=>{
    res.render('register')
})



module.exports=route