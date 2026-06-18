const FoodCategory = require("../models/FoodCategory");

// Create Category
const createCategory = async (req, res) => {
    try {

        const category = await FoodCategory.create(
            req.body
        );

        res.status(201).json({
            success: true,
            data: category
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Get All Categories
const getCategories = async (req, res) => {
    try {

        const categories =
            await FoodCategory.find();

        res.status(200).json({
            success: true,
            count: categories.length,
            data: categories
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Get Category By ID
const getCategoryById = async (req, res) => {
    try {

        const category =
            await FoodCategory.findById(
                req.params.id
            );

        if (!category) {

            return res.status(404).json({
                success: false,
                message: "Category Not Found"
            });
        }

        res.status(200).json({
            success: true,
            data: category
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Update Category
const updateCategory = async (req, res) => {
    try {

        const category =
            await FoodCategory.findByIdAndUpdate(
                req.params.id,
                req.body,
                {
                    new: true,
                    runValidators: true
                }
            );

        if (!category) {

            return res.status(404).json({
                success: false,
                message: "Category Not Found"
            });
        }

        res.status(200).json({
            success: true,
            data: category
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Delete Category
const deleteCategory = async (req, res) => {
    try {

        const category =
            await FoodCategory.findByIdAndDelete(
                req.params.id
            );

        if (!category) {

            return res.status(404).json({
                success: false,
                message: "Category Not Found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Category Deleted Successfully"
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

//search
const searchCategories = async (req, res) => {
    try {

        const keyword =
            req.query.name || "";

        const categories =
            await FoodCategory.find({
                categoryName: {
                    $regex: keyword,
                    $options: "i"
                }
            });

        res.status(200).json({
            success: true,
            count: categories.length,
            data: categories
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    createCategory,
    getCategories,
    getCategoryById,
    updateCategory,
    deleteCategory,
    searchCategories
};