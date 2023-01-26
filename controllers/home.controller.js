//fi controlleur bch yekhou requette w response
const BookModel=require('../Models/book.model')



exports.ThreeBookController=(req,res,next)=>{
BookModel.getThreeBooks().then(books=>{
    res.render('index',{books:books})
})
}






