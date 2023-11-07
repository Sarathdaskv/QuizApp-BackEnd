const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const userModel = require('../model/userCredentials.js');
const { token } = require('morgan');
const { default: mongoose } = require('mongoose');

const getUsers = async (req, res) => {

    try {
        const users = await userModel.find();
        res.json(users)
    }
    catch (err) {
        console.log(err);
    }
}

const userLogin = async (req, res) => {
    try {

        const checkUser = await userModel.findOne({ email: req.body.email });
        if (checkUser==null) {
            console.log("hello");
            return res.json({
                message: 'email does not exist'
            })
        }
        if (checkUser.password === req.body.password) {
            const token = jwt.sign({ email: checkUser.email, userId: checkUser._id },
                process.env.JWT_SECRET_KEY,
                { expiresIn: '1h' })
            return res.status(200).json({
                userData:checkUser,
                token: token,
                expiresIn:"3600"
            })
        }
        else {
            return res.json({
                message: 'invalid credentials'
            })
        }
    }
    catch (err) {
        console.log(err);
    }
}

const getUser=async(req,res)=>{
    try{
        const userId=new mongoose.Types.ObjectId(req.params.userId) 
        const user=await userModel.findById(userId)
        if(!user){
            return res.json({
                message:'user not found'
            })
        }
        res.json(user)
    }
    catch(err){
        res.json({
            message:'user not found'
        })
    }
}

module.exports = { getUsers, userLogin,getUser }