// routes/userRoutes.js
const express = require('express');
const { registerUser, loginUser, getUserProfile, updateUserProfile } = require('../controllers/userController');
const protect = require('../middleware/auth');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile);

module.exports = router;
