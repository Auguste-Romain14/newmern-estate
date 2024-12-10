const User = require("../models/userModels");
// const errorHandler = require("../utils/error");

const bcrypt = require("bcryptjs");
const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    // res.status(500).json({ error: error.message });
    // next(errorHandler(550, "error from the function"));
    next(error);
  }
};

module.exports = { signup };
