// models/User.js
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
//   bloodGroup: {
//     type: String,
//     required: true,
//   },
//   address: {
//     type: String,
//     required: true,
//   },
//   tel: {
//     type: String,
//     required: true,
//   },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  donations: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Donation',
    },
  ],
});

const User = mongoose.model('User', userSchema);
module.exports = User;
