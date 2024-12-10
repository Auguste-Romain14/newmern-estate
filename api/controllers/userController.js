const User = require("../models/userModels");

const test = async (req, res) => {
  res.json({ message: "Hello World ! It's working" });
};

module.exports = { test };
