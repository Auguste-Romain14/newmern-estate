const express = require("express");
const router = express.Router();

const { test, updateUser } = require("../controllers/userController");
const { verifyToken } = require("../utils/verifyUser");

router.get("/test", test);
router.post("/update/:id", verifyToken, updateUser);

module.exports = router;
