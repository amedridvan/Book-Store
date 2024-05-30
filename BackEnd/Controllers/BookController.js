const catchAsync  = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
const APIFeatures=require ("../utils/apiFeaturs.js");
const Book = require("../models/bookModel.js");
const mongoose= require ("mongoose")

exports.getALlBook =catchAsync (async(req,res,next) => {
    let filter = {};
    if (req.params.tourId) filter = { tour: req.params.tourId };

    const features = new APIFeatures(Book.find(filter), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
    // const doc = await features.query.explain();
    const doc = await features.query;
    res.status(200).json({
        status: 'success',
        results: doc.length,
        data: {
          data: doc
        }
      });
}) 

exports.GetOneBook= catchAsync (async (req,res ,next) => {
 if(!req.params.id){
  return next(new AppError(404,"book with id not found"));
 }

 const oneBook =await Book.findById(req.params.id) 
 
 console.log(req.params.id)
 res.status(200).json({
  message:"success" ,
  data:{
    oneBook
  }
 })

})