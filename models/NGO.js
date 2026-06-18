const mongoose = require("mongoose");

const ngoSchema = new mongoose.Schema(
    {
        ngoName: {
            type: String,
            required: true,
            trim: true
        },

        address: {
            type: String,
            required: true,
            trim: true
        },

        contactNumber: {
            type: String,
            required: true,
            trim: true
        },

        email: {
            type: String,
            trim: true
        },

        isActive: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model(
    "NGO",
    ngoSchema
);