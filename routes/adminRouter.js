const express=require('express')
const router=express.Router();
const adminController=require('../controller/adminController')


router
.route('/:adminId')
.get(adminController.getAdminLogin)

router
.route('/login')
.post(adminController.adminLogin)


router 
.route('/question')
.post(adminController.addQuestion)


router
.route('/:adminId/question')
.get(adminController.getAllQuestions)

module.exports=router;