const getApiDocumentation = async (req, res) => {

    res.status(200).json({
        success: true,
        project: "FoodBridge Backend API",
        version: "1.0.0",

        endpoints: {

            restaurants: {
                create: "POST /api/restaurants",
                getAll: "GET /api/restaurants",
                getById: "GET /api/restaurants/:id",
                update: "PUT /api/restaurants/:id",
                delete: "DELETE /api/restaurants/:id",
                search: "GET /api/restaurants/search?name="
            },

            ngos: {
                create: "POST /api/ngos",
                getAll: "GET /api/ngos",
                getById: "GET /api/ngos/:id",
                update: "PUT /api/ngos/:id",
                delete: "DELETE /api/ngos/:id",
                search: "GET /api/ngos/search?name="
            },

            categories: {
                create: "POST /api/categories",
                getAll: "GET /api/categories",
                getById: "GET /api/categories/:id",
                update: "PUT /api/categories/:id",
                delete: "DELETE /api/categories/:id",
                search: "GET /api/categories/search?name="
            },

            donations: {
                create: "POST /api/donations",
                getAll: "GET /api/donations",
                getById: "GET /api/donations/:id",
                update: "PUT /api/donations/:id",
                delete: "DELETE /api/donations/:id",
                filter: "GET /api/donations/filter?status="
            },

            requests: {
                create: "POST /api/requests",
                getAll: "GET /api/requests",
                getById: "GET /api/requests/:id",
                update: "PUT /api/requests/:id",
                delete: "DELETE /api/requests/:id",
                filter: "GET /api/requests/filter?status="
            },

            dashboard: {
                stats: "GET /api/dashboard",
                recentDonations:
                    "GET /api/dashboard/recent-donations"
            },

            reports: {
                availableDonations:
                    "GET /api/reports/available-donations",

                pendingRequests:
                    "GET /api/reports/pending-requests",

                restaurantReport:
                    "GET /api/reports/restaurant/:restaurantId",

                ngoReport:
                    "GET /api/reports/ngo/:ngoId"
            }
        }
    });
};

module.exports = {
    getApiDocumentation
};