const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/userControllers');
const requireAuth = require('../middleware/requireAuth');

router.post('/register', registerUser);
router.post('/login', loginUser);

router.use(requireAuth);
router.get('/profile', (req, res) => {
  res.json({ message: "Welcome, authorized user!" });
});

module.exports = router;