const express=require('express')
const router=express.Router();
const userController=require('../controller/userController')
const checkAuthentication=require('../middleware/check-auth')

router
.route('/users')
.get(userController.getUsers)

router
.route('/user/:userId')
.get(userController.getUser)

router
.route('/login')
.post(userController.userLogin)

module.exports=router