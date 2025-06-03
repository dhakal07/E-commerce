const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  getAllOrders,
  getAllFeedback,
  getAllReturns,
  getAllLogins, // Added
} = require("../controllers/adminController");

// ✅ Updated import to match the correct middleware file
const adminCheck = require("../middleware/admincheck");

// ✅ No need to add auth middleware here — it's handled globally in server.js
router.get("/users", adminCheck, getAllUsers);
router.get("/orders", adminCheck, getAllOrders);
router.get("/feedbacks", adminCheck, getAllFeedback); // Changed to /feedbacks to match client
router.get("/returns", adminCheck, getAllReturns);
router.get("/logins", adminCheck, getAllLogins); // Added

module.exports = router;