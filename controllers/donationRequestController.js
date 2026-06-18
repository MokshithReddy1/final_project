const DonationRequest = require("../models/DonationRequest");
const FoodDonation = require("../models/FoodDonation");

// Create Donation Request
const createDonationRequest = async (req, res) => {
    try {

        const request =
            await DonationRequest.create(
                req.body
            );

        res.status(201).json({
            success: true,
            data: request
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Get All Requests
const getDonationRequests = async (req, res) => {
    try {

        const requests =
            await DonationRequest.find()
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

// Get Request By ID
const getDonationRequestById = async (req, res) => {
    try {

        const request =
            await DonationRequest.findById(
                req.params.id
            )
                .populate("ngoId")
                .populate("foodDonationId");

        if (!request) {

            return res.status(404).json({
                success: false,
                message: "Request Not Found"
            });
        }

        res.status(200).json({
            success: true,
            data: request
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Update Request
// const FoodDonation = //require("../models/FoodDonation");

const updateDonationRequest = async (req, res) => {
    try {

        const request =
            await DonationRequest.findById(
                req.params.id
            );

        if (!request) {

            return res.status(404).json({
                success: false,
                message: "Request Not Found"
            });
        }

        request.requestStatus =
            req.body.requestStatus ||
            request.requestStatus;

        await request.save();

        if (
            request.requestStatus === "Approved"
        ) {

            await FoodDonation.findByIdAndUpdate(
                request.foodDonationId,
                {
                    status: "Requested"
                }
            );
        }

        res.status(200).json({
            success: true,
            data: request
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Delete Request
const deleteDonationRequest = async (req, res) => {
    try {

        const request =
            await DonationRequest.findByIdAndDelete(
                req.params.id
            );

        if (!request) {

            return res.status(404).json({
                success: false,
                message: "Request Not Found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Request Deleted Successfully"
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

//Request Status Filter API
const filterRequestsByStatus = async (req, res) => {
    try {

        const status =
            req.query.status;

        const requests =
            await DonationRequest.find({
                requestStatus: status
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
    createDonationRequest,
    getDonationRequests,
    getDonationRequestById,
    updateDonationRequest,
    deleteDonationRequest,
    filterRequestsByStatus
};