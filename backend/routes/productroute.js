const express=require("express")
const getproductcontroller=require("../controllers/products/getproductcontroller")
const router=express.Router()
router.get('/',getproductcontroller)
router.get('/category/:category',getproductcontroller)
router.get('/name/:name',getproductcontroller)
router.get('/sub_category/:sub_category',getproductcontroller)
module.exports=router