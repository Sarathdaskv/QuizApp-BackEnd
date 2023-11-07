const adminModel = require('../model/adminCredentials')
const { default: mongoose } = require('mongoose');

const getAdminLogin = async (req, res) => {
    try{
        const adminId=new mongoose.Types.ObjectId(req.params.adminId) 
        const admin=await adminModel.findById(adminId)
        if(!admin){
            return res.json({
                message:'admin not found'
            })
        }
        res.json(admin)
    }
    catch(err){
        res.json({
            message:'admin not found'
        })
    }
}

module.exports = { getAdminLogin }