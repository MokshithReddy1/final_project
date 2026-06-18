const FoodDonation = require("../models/FoodDonation");
const DonationRequest = require("../models/DonationRequest");

// Available Donations
const getAvailableDonations = async (req, res) => {
    try {

        const donations =
            await FoodDonation.find({
                status: "Available"
            })
            .populate("restaurantId")
            .populate("categoryId");

        res.status(200).json({
            success: true,
            count: donations.length,
            data: donations
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Pending Requests
const getPendingRequests = async (req, res) => {
    try {

        const requests =
            await DonationRequest.find({
                requestStatus: "Pending"
            })
            .populate("ngoId")
            .populate("foodDonationId");

        res.status(200).json({
            success: true,
            count: requests.length,
            data: requests
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

//get donations by restaurant
const getDonationsByRestaurant = async (req, res) => {
    try {

        const restaurantId =
            req.params.restaurantId;

        const donations =
            await FoodDonation.find({
                restaurantId: restaurantId
            })
            .populate("restaurantId")
            .populate("categoryId");

        res.status(200).json({
            success: true,
            count: donations.length,
            data: donations
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

//NGO-wise Donation Request Report
const getRequestsByNGO = async (req, res) => {
    try {

        const ngoId =
            req.params.ngoId;

        const requests =
            await DonationRequest.find({
                ngoId: ngoId
            })
            .populate("ngoId")
            .populate("foodDonationId");

        res.status(200).json({
            success: true,
            count: requests.length,
            data: requests
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    getAvailableDonations,
    getPendingRequests,
    getDonationsByRestaurant,
    getRequestsByNGO
};