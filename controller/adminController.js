const adminModel = require('../model/adminCredentials')
const questionModel=require('../model/question')
const jwt = require('jsonwebtoken')
const { default: mongoose } = require('mongoose');

const getAdminLogin = async (req, res) => {
    try {
        console.log("dewdf");
        const adminId = new mongoose.Types.ObjectId(req.params.adminId)
        const admin = await adminModel.findById(adminId)
        if (!admin) {
            return res.json({
                message: 'admin not found'
            })
        }
        res.json(admin)
    }
    catch (err) {
        res.json({
            message: 'admin not found'
        })
    }
}

const adminLogin = async (req, res) => {
    try {
        const adminUser = await adminModel.findOne({ email: req.body.email })
        if (adminUser == null) {
            return res.json({
                message: 'email does not exist'
            })
        }
       
        if (adminUser.password === req.body.password) {
            const token = jwt.sign({ email: adminUser.email, adminId: adminUser._id },
                process.env.JWT_SECRET_KEY,
                { expiresIn: '1h' })
            return res.status(200).json({
                userData: adminUser,
                token: token,
                expiresIn: "3600"
            })
        }
        else {
            return res.json({
                message: 'invalid credentials'
            })
        }
    }
    catch (err) {
        res.json({
            message: 'something went wrong'
        })
    }
}

const addQuestion = async (req, res) => {
    try {
        const questionData = req.body;
        const data = new questionModel(questionData);
        await data.save(); 
        if (!data) {
            return res.json({
                message: 'something went wrong'
            });
        } else {
            return res.send(data); 
        }
    } catch (err) {
       
        res.json({
            message: err
        });
    }
};

const getAllQuestions=async(req,res)=>{
    try{
        const questions=await questionModel.find();
        if(!questions){
            return res.json({
                message: 'something went wrong'
            });
        }
        return res.json(questions)
    }
    catch(err){
        res.json({
            message: err
        });
    }
}



module.exports = { getAdminLogin, adminLogin, addQuestion ,getAllQuestions}