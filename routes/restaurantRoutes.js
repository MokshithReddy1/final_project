const express = require("express");

const {
    createRestaurant,
    getRestaurants,
    getRestaurantById,
    updateRestaurant,
    deleteRestaurant,
    searchRestaurants
} = require("../controllers/restaurantController");

const router = express.Router();

// Search Route MUST come first
router.get("/search", searchRestaurants);

// CRUD Routes
router.post("/", createRestaurant);
router.get("/", getRestaurants);

router.get("/:id", getRestaurantById);
router.put("/:id", updateRestaurant);
router.delete("/:id", deleteRestaurant);

module.exports = router;