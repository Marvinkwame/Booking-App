const User = require("../models/User");
const bcrypt = require("bcrypt");
const { createError } = require("../utils/error");
const jwt = require("jsonwebtoken");

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

const userLogin = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return next(createError(404, "User not found"));

    const validatePassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!validatePassword) return next(createError(400, "Wrong Password"));

    const token = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT
    );

    const { password, isAdmin, ...otherinfo } = user._doc;
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json({ ...otherinfo });
  } catch (err) {
    next(err);
  }
};

module.exports = { registerUser, userLogin };
