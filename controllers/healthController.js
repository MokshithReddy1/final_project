const getHealthStatus = async (req, res) => {

    res.status(200).json({
        success: true,
        application: "FoodBridge Backend",
        status: "Running",
        timestamp: new Date(),
        environment:
            process.env.NODE_ENV || "development"
    });

};

module.exports = {
    getHealthStatus
};