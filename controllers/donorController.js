// controllers/donorController.js
const Donation = require('../models/donation');

// Create a new donation ad
exports.createDonation = async (req, res) => {
  const { bloodGroup, address, tel } = req.body;

  try {
    const donation = await Donation.create({
      bloodGroup,
      address,
      tel,
      createdBy: req.user.id,
    });
    res.status(201).json(donation);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Get all donors
exports.getAllDonors = async (req, res) => {
  try {
    const donors = await Donation.find().populate('createdBy', 'name email');
    res.status(200).json(donors);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};
