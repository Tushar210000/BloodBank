// routes/donorRoutes.js
const express = require('express');
const { createDonation, getAllDonors } = require('../controllers/donorController');
const protect = require('../middleware/auth');

const router = express.Router();

// Route to create a new donation ad
router.post('/', protect, createDonation);

// Route to get all donors
router.get('/', getAllDonors);

module.exports = router;
