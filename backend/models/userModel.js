const mongoose = require('mongoose');

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