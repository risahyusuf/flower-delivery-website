const jwt = require('jsonwebtoken');

const requireAuth = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) return res.status(401).json({ message: "Authorization token required" });

  const token = authorization.split(" ")[1];

  try {
    const { id } = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findOne({ _id }).select('id')
    next();
  } catch (error) {
    res.status(401).json({ message: "Request not authorized" });
  }
};

module.exports = requireAuth;

