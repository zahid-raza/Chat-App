const express = require("express");
const {
  registerUser,
  authUser,
  allUsers,
} = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// POST request to register a new user
router.route("/").post(registerUser).get(protect, allUsers);

// POST request to login a user
router.post("/login", authUser);

module.exports = router;
