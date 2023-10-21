const express=require('express')
const router=express.Router();

const controllers=require('../controllers/fun.controller')
router.post("/books",controllers.bookstore);
router.get("/books",controllers.bookshow);
router.get("/books/:id",controllers.specific);
router.delete("/books/:id",controllers.delete_specific)
module.exports=router;
