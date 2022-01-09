const express=require('express')
const router=express.Router()
const {email}=require('../controller/email')
const {home}=require('../controller/home')

router.route('/email').post(email)
router.route('/').get(home)

module.exports=router
