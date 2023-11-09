const mongoose = require('mongoose')

const questionData=mongoose.Schema({
    questionText:{
        type:String,
        require:true
    },
    option1: {
        type: String,
        required: true
      },
      option2: {
        type: String,
        required: true
      },
      option3: {
        type: String,
        required: true
      },
      option4: {
        type: String,
        required: true
      },
      correctAnswer: {
        type: Number,
        required: true
      }
})

const question =new mongoose.model('questions', questionData);

module.exports = question;