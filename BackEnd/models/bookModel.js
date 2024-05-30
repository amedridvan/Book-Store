const mongoes  =require('mongoose') ;

const BookSchema=mongoes.Schema({
    title :{
        type:String  ,
        required :[true ,"a book must have a title"]
    } ,
    author: {
        type :String ,
        required :[true ,"a book must have a author"]
    } ,
    publisher: {
        type :String ,
        required :[true ,"a book must have a publisher"]
    } ,
    page:{
        type: Number ,
        required :[true ," book must have a page number "]
    } ,
    language :{
        type: String ,
        required :[true ," book must have a page language "]
    } ,
    discount_rate :{
        type: String
    } ,
    discounted_price :{
        type: Number 
    } ,
    price :{
        type: Number ,
        required :[true ," book must have a page price "]
    } ,
    rating :{
    type :Number ,
    required :[true, " a book must have rate "]
    },
    reviews :{
        type :Number ,
    },
    cover:{
        type:String  ,
    } ,

    paper:{
        type:String  ,
    } ,
    isbn :{
type: Number 
    }, 
    date:{
type:Date
    },
    link:{
type:String
    } ,
    image :{
        type:String  ,
        required :[true ,"a book must have a image"]
    }

})
const Book= mongoes.model ("Books",BookSchema); 
module.exports =Book ;