const mongoose = require('mongoose')

const questionData=mongoose.Schema({
    questionText:{
        type:String,
        require:true
    },
    options: {
        type: Array,
        required: true
      },
      correctAnswer: {
        type: Number,
        required: true
      }
})

const question =new mongoose.model('questions', questionData);

module.exports = question;