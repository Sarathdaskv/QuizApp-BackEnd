const express=require('express')
const router=express.Router();
const adminController=require('../controller/adminController')


router
.route('/login/:adminId')
.get(adminController.getAdminLogin)



module.exports=router;