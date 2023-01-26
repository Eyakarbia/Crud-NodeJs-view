const express=require('express')
const path=require('path')
const RouterHome=require('./router/home.router')
const RouterBook=require('./router/book.route')
const RouterAuth=require('./router/auth.route')
const app=express()//used for function 





 app.use(express.static(path.join(__dirname,'assets')))//static folder
 app.set('view engine','ejs')//ejs=>hiya lview html !
 app.set('views','views')//u can't write 5atr deja esmou viwes




app.use('/',RouterHome)
app.use('/books',RouterBook)
app.use('/',RouterAuth)

// app.get('/contact',(req,res,next)=>{
//         res.render('contact')})

// app.get('/about',(req,res,next)=>{
//             res.render('about')})

 //app.get('/books',(req,res,next)=>{
            //     res.render('books')})

// app.get('/login',(req,res,next)=>{
//       res.render('login')})
 //app.get('/register',(req,res,next)=>{
      // res.render('register')})

 //app.get('/details',(req,res,next)=>{
  //               res.render('details')}) 
               

app.listen(3000,()=>console.log('server run in port 3000'))



