const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema ({
  name: {
    type: String,
    required: [true, 'Please enter your name'],
  },

  email: {
    type: String,
    required: [true, 'Please enter youe email'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please enter a valid email'],
  },

  password: {
    type: String,
    required: function() {
            return !this.googleId;
        } // Password is required only if googleId is not present
  },

 googleId: {
    type: String,
    default: null,
 },

 cartData: {
    type: Object,
    default: {},
 }
}, {minimize: false},)

const User = mongoose.model('User', userSchema);
module.exports = User;