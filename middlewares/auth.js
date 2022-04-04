const jwt = require("jsonwebtoken");

const authMiddleWare = async (req, res, next) => {
  const token = req.header("Authorization").split(" ")[1];
  if (token == null) return res.status(401).json({ error: "Null token" });

  jwt.verify(token, process.env.JWT_SECRET, (error, user) => {
    if (error) return res.status(403).json({ error: error.message });
    req.user = user;
    next();
  });
};
module.exports= { authMiddleWare };
