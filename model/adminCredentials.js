const mongoose = require('mongoose')

const adminCredentials = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
}
)

const admin =new mongoose.model('admins', adminCredentials);

module.exports = admin;