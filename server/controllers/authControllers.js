const User = require("../models/User");
const bcrypt = require("bcrypt");

const registerUser = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    if (!(email && password && username)) {
      return res.status(400).json({ error: "All input fields are required" });
    }
  } catch (err) {
    console.log(err);
  }
};
