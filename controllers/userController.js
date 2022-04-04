const pool = require("../db");
const bcrypt = require("bcrypt");
const {generateToken} =require("../util/generateToken")
const getAllUser = async (req, res) => {
  try {
    const users = await pool.query("SELECT * FROM users");
    res.json({ users: users.rows });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createUser = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    console.log(req.body);
    const newUser = await pool.query(
      "INSERT INTO users (user_name,user_email,user_password) VALUES ($1,$2,$3) RETURNING *",
      [req.body.name, req.body.email, hashedPassword]
    );
    res.json(generateToken(newUser.rows[0]));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAllUser, createUser };
