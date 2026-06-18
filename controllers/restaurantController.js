const Restaurant = require("../models/Restaurant");

// Create Restaurant
const createRestaurant = async (req, res) => {
    try {

        const restaurant = await Restaurant.create(req.body);

        res.status(201).json({
            success: true,
            data: restaurant
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Get All Restaurants
const getRestaurants = async (req, res) => {
    try {

        const restaurants = await Restaurant.find();

        res.status(200).json({
            success: true,
            count: restaurants.length,
            data: restaurants
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Get Single Restaurant
const getRestaurantById = async (req, res) => {
    try {

        const restaurant = await Restaurant.findById(
            req.params.id
        );

        if (!restaurant) {
            return res.status(404).json({
                success: false,
                message: "Restaurant Not Found"
            });
        }

        res.status(200).json({
            success: true,
            data: restaurant
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Update Restaurant
const updateRestaurant = async (req, res) => {
    try {

        const restaurant =
            await Restaurant.findByIdAndUpdate(
                req.params.id,
                req.body,
                {
                    new: true,
                    runValidators: true
                }
            );

        if (!restaurant) {
            return res.status(404).json({
                success: false,
                message: "Restaurant Not Found"
            });
        }

        res.status(200).json({
            success: true,
            data: restaurant
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Delete Restaurant
const deleteRestaurant = async (req, res) => {
    try {

        const restaurant =
            await Restaurant.findByIdAndDelete(
                req.params.id
            );

        if (!restaurant) {
            return res.status(404).json({
                success: false,
                message: "Restaurant Not Found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Restaurant Deleted Successfully"
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const searchRestaurants = async (req, res) => {
    try {

        const keyword =
            req.query.name || "";

        const restaurants =
            await Restaurant.find({
                restaurantName: {
                    $regex: keyword,
                    $options: "i"
                }
            });

        res.status(200).json({
            success: true,
            count: restaurants.length,
            data: restaurants
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    createRestaurant,
    getRestaurants,
    getRestaurantById,
    updateRestaurant,
    deleteRestaurant,
    searchRestaurants
};