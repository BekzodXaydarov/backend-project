exports.Validation = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body)
  if (error) {
    return res.status(400).json({
      success: false,
      message: error.details[0].message
    })
  }
  next()
}

exports.verifyToken = (req, res, next) => {
  const token = req.headers["Authorization"];

  if (!token) {
    return res.status(403).json({ message: "No token provided!" });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err) => {
    if (err) {
      return res.status(401).json({ message: "Failed to authenticate token!" });
    }
    req.user = user;
    next();
  });
};