const mongoose = require("mongoose");

const foodDonationSchema = new mongoose.Schema(
    {
        foodName: {
            type: String,
            required: true,
            trim: true
        },

        quantity: {
            type: Number,
            required: true
        },

        expiryDate: {
            type: Date,
            required: true
        },

        restaurantId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Restaurant",
            required: true
        },

        categoryId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "FoodCategory",
            required: true
        },

        status: {
            type: String,
            enum: [
                "Available",
                "Requested",
                "Approved",
                "Delivered"
            ],
            default: "Available"
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model(
    "FoodDonation",
    foodDonationSchema
);