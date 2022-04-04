const express = require("express");
const {
  getAllUser,
  createUser,
  deleteUser,
  login,
} = require("../controllers/userController");
const { authMiddleWare } = require("../middlewares/auth");
const router = express.Router();

router.get("/", authMiddleWare, getAllUser);
router.post("/", createUser);
router.post("/login", login)
router.delete("/", deleteUser);

module.exports = router;
