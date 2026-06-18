require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

// Routes
const restaurantRoutes = require("./routes/restaurantRoutes");
const ngoRoutes = require("./routes/ngoRoutes");
const foodCategoryRoutes = require("./routes/foodCategoryRoutes");
const foodDonationRoutes = require("./routes/foodDonationRoutes");
const donationRequestRoutes = require("./routes/donationRequestRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const reportRoutes = require("./routes/reportRoutes");
const apiRoutes = require("./routes/apiRoutes");
const healthRoutes = require("./routes/healthRoutes");

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "FoodBridge API Running Successfully"
    });
});

//API DOCUMENTATION ROUTE
app.use(
    "/api",
    apiRoutes
);

// Restaurant Routes
app.use(
    "/api/restaurants",
    restaurantRoutes
);

// NGO Routes
app.use(
    "/api/ngos",
    ngoRoutes
);

// Food Category Routes
app.use(
    "/api/categories",
    foodCategoryRoutes
);

//Food Donation Routes
app.use(
    "/api/donations",
    foodDonationRoutes
);

//donation request routes
app.use(
    "/api/requests",
    donationRequestRoutes
);

//dashboard request routes
app.use(
    "/api/dashboard",
    dashboardRoutes
);

//report routes
app.use(
    "/api/reports",
    reportRoutes
);

// health route
app.use(
    "/health",
    healthRoutes
);

// 404 Route
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route Not Found"
    });
});

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(
        `Server Running On Port ${PORT}`
    );
});