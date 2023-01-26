//this file sharing to all project fih l base de donne 
 const mongoose=require('mongoose')





 var shemaBook=mongoose.Schema({
    _id:String,
    title:String,
    description:String,
    price:Number,
    image:String,
    author:String,
 } )
 var Book=mongoose.model('book',shemaBook)
 var url='mongodb://localhost:27017/library'


 exports.getThreeBooks=()=>{

return new Promise((resolve , reject)=>{ //promise asynscrone function  yanni tjb wala trejcty data
    mongoose.connect(url,{useNewUrlParser:true})
    .then(()=>{
      return Book.find({}).limit(3) //njib data bch tgib ken 3 ktob
}).then(books=>{
    mongoose.disconnect()
    resolve(books)
}).catch(err=>reject(err))

})
 }
 
exports.getAllBooks=()=>{

    return new Promise((resolve , reject)=>{ //promise asynscrone function  yanni tjb wala trejcty data
        mongoose.connect(url,{useNewUrlParser:true})
        .then(()=>{
          return Book.find({})//njib data tjib lktob lkol
    }).then(books=>{
        mongoose.disconnect()
        resolve(books)
    }).catch(err=>reject(err))
    
    })
     }
 
     exports.getOneBookDetails=(id)=>{

        return new Promise((resolve , reject)=>{ 
            mongoose.connect(url,{useNewUrlParser:true})
            .then(()=>{
              return Book.findById(id)  
        }).then(books=>{
            mongoose.disconnect()
            resolve(books)
        }).catch(err=>reject(err))
        
        })
         }