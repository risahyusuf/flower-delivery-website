const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/userControllers');
const requireAuth = require('../middleware/requireAuth');

router.post('/register', registerUser);
router.post('/login', loginUser);

module.exports = router;