const express = require("express");

const {
    createDonationRequest,
    getDonationRequests,
    getDonationRequestById,
    updateDonationRequest,
    deleteDonationRequest,
    filterRequestsByStatus
} = require("../controllers/donationRequestController");

const router = express.Router();

// Filter Route MUST come before /:id
router.get("/filter", filterRequestsByStatus);

// CRUD Routes
router.post("/", createDonationRequest);
router.get("/", getDonationRequests);

router.get("/:id", getDonationRequestById);
router.put("/:id", updateDonationRequest);
router.delete("/:id", deleteDonationRequest);

module.exports = router;