const express = require("express");
const router = express.Router();

const { signup } = require("../controllers/authController");

router.post("/signup", signup);
// router.post("/signin", signin);

module.exports = router;
