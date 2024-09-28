// models/Donation.js
const mongoose = require('mongoose');

const donationSchema = mongoose.Schema({
  bloodGroup: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  tel: {
    type: String,
    required: true,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Donation = mongoose.model('Donation', donationSchema);
module.exports = Donation;
