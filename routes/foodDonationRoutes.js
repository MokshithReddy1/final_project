const express = require("express");

const {
    createFoodDonation,
    getFoodDonations,
    getFoodDonationById,
    updateFoodDonation,
    deleteFoodDonation,
    filterDonationsByStatus,
    markDonationDelivered
} = require("../controllers/foodDonationController");

const router = express.Router();

// Filter Route MUST come before /:id
router.get("/filter", filterDonationsByStatus);

router.put(
    "/deliver/:id",
    markDonationDelivered
);

// CRUD Routes
router.post("/", createFoodDonation);
router.get("/", getFoodDonations);

router.get("/:id", getFoodDonationById);
router.put("/:id", updateFoodDonation);
router.delete("/:id", deleteFoodDonation);


module.exports = router;