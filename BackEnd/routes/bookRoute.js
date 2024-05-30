const express = require('express');
const router = express.Router();
const userController=require ("../controllers/userController.js") ; 
const bookController =require ("../Controllers/BookController.js");

router
.route("")
.get(bookController.getALlBook) ;
router
.route('/:id')
.get(bookController.GetOneBook)


module.exports = router;