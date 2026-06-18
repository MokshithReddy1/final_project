const express = require("express");

const {
    getDashboardStats,
    getRecentDonations
} = require("../controllers/dashboardController");

const router = express.Router();

// Recent Donations Route MUST come first
router.get(
    "/recent-donations",
    getRecentDonations
);

// Dashboard Statistics
router.get(
    "/",
    getDashboardStats
);

module.exports = router;