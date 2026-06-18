const mongoose = require("mongoose");

const donationRequestSchema = new mongoose.Schema(
    {
        ngoId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "NGO",
            required: true
        },

        foodDonationId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "FoodDonation",
            required: true
        },

        quantityRequested: {
            type: Number,
            required: true
        },

        requestStatus: {
            type: String,
            enum: [
                "Pending",
                "Approved",
                "Rejected",
                "Completed"
            ],
            default: "Pending"
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model(
    "DonationRequest",
    donationRequestSchema
);