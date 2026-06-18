const FoodDonation = require("../models/FoodDonation");

// Create Food Donation
const createFoodDonation = async (req, res) => {
    try {

        const donation =
            await FoodDonation.create(req.body);

        res.status(201).json({
            success: true,
            data: donation
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Get All Food Donations
const getFoodDonations = async (req, res) => {
    try {
        const donations =
            await FoodDonation.find()
                .populate("restaurantId")
                .populate("categoryId")
                .sort({ createdAt: -1 });

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

// Get Food Donation By ID
const getFoodDonationById = async (req, res) => {
    try {

        const donation =
            await FoodDonation.findById(
                req.params.id
            )
                .populate("restaurantId")
                .populate("categoryId");

        if (!donation) {

            return res.status(404).json({
                success: false,
                message: "Food Donation Not Found"
            });
        }

        res.status(200).json({
            success: true,
            data: donation
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Update Food Donation
const updateFoodDonation = async (req, res) => {
    try {

        const donation =
            await FoodDonation.findByIdAndUpdate(
                req.params.id,
                req.body,
                {
                    new: true,
                    runValidators: true
                }
            );

        if (!donation) {

            return res.status(404).json({
                success: false,
                message: "Food Donation Not Found"
            });
        }

        res.status(200).json({
            success: true,
            data: donation
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Delete Food Donation
const deleteFoodDonation = async (req, res) => {
    try {

        const donation =
            await FoodDonation.findByIdAndDelete(
                req.params.id
            );

        if (!donation) {

            return res.status(404).json({
                success: false,
                message: "Food Donation Not Found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Food Donation Deleted Successfully"
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

//filter donation by status
const filterDonationsByStatus = async (req, res) => {
    try {

        const status =
            req.query.status;
        
        const donations =
            await FoodDonation.find({
                status: status
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

const markDonationDelivered = async (req, res) => {
    try {

        const donation =
            await FoodDonation.findByIdAndUpdate(
                req.params.id,
                {
                    status: "Delivered"
                },
                {
                    new: true
                }
            );

        if (!donation) {

            return res.status(404).json({
                success: false,
                message: "Donation Not Found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Donation Marked As Delivered",
            data: donation
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    createFoodDonation,
    getFoodDonations,
    getFoodDonationById,
    updateFoodDonation,
    deleteFoodDonation,
    filterDonationsByStatus,
    markDonationDelivered
};