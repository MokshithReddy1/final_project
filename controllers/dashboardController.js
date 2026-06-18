const Restaurant = require("../models/Restaurant");
const NGO = require("../models/NGO");
const FoodCategory = require("../models/FoodCategory");
const FoodDonation = require("../models/FoodDonation");
const DonationRequest = require("../models/DonationRequest");

const getDashboardStats = async (req, res) => {
    try {

        const restaurants =
            await Restaurant.countDocuments();

        const ngos =
            await NGO.countDocuments();

        const categories =
            await FoodCategory.countDocuments();

        const donations =
            await FoodDonation.countDocuments();

        const requests =
            await DonationRequest.countDocuments();

        const availableDonations =
            await FoodDonation.countDocuments({
                status: "Available"
            });

        const pendingRequests =
            await DonationRequest.countDocuments({
                requestStatus: "Pending"
            });

        const approvedRequests =
            await DonationRequest.countDocuments({
                requestStatus: "Approved"
            });

        res.status(200).json({
            success: true,
            data: {
                restaurants,
                ngos,
                categories,
                donations,
                requests,
                availableDonations,
                pendingRequests,
                approvedRequests
            }
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Recent Donations Dashboard Report
const getRecentDonations = async (req, res) => {
    try {

        const recentDonations =
            await FoodDonation.find()
                .populate("restaurantId")
                .populate("categoryId")
                .sort({ createdAt: -1 })
                .limit(5);

        res.status(200).json({
            success: true,
            count: recentDonations.length,
            data: recentDonations
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    getDashboardStats,
    getRecentDonations
};