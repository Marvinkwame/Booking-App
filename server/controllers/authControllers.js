const User = require("../models/User");
const bcrypt = require("bcrypt");

const registerUser = async (req, res, next) => {
  try {
    const { username, password, email } = req.body;

    if (!(email && password && username)) {
      return res.status(400).json({ error: "All input fields are required" });
    }

    // Check if the user with the same email already exists
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res
        .status(409)
        .json({ error: "User with email already exists. Please log in." });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      username: req.body.username,
      password: hashedPassword,
      email: req.body.email,
      phone: req.body.phone,
      city: req.body.city,
      country: req.body.country,
    });

    const savedUser = await newUser.save();

    // return new user
    res.status(200).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = { registerUser };
