const express = require("express");

const {
    getAvailableDonations,
    getPendingRequests,
    getDonationsByRestaurant,
    getRequestsByNGO
} = require("../controllers/reportController");

const router = express.Router();

router.get(
    "/available-donations",
    getAvailableDonations
);

router.get(
    "/pending-requests",
    getPendingRequests
);

router.get(
    "/restaurant/:restaurantId",
    getDonationsByRestaurant
);

router.get(
    "/ngo/:ngoId",
    getRequestsByNGO
);

module.exports = router;