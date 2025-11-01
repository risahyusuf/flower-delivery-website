const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const requireAuth = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: "Authorization token required" });
  }

  const token = authorization.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // <-- store as 'decoded'
    const user = await User.findById(decoded.userId).select('_id'); // <-- access decoded.userId directly

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error("Auth Error:", error.message);
    res.status(401).json({ message: "Request not authorized" });
  }
};

module.exports = requireAuth;