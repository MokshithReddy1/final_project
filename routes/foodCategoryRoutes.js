const express = require("express");

const {
    createCategory,
    getCategories,
    getCategoryById,
    updateCategory,
    deleteCategory,
    searchCategories
} = require("../controllers/foodCategoryController");

const router = express.Router();

// Search Route MUST come before /:id
router.get("/search", searchCategories);

// CRUD Routes
router.post("/", createCategory);
router.get("/", getCategories);

router.get("/:id", getCategoryById);
router.put("/:id", updateCategory);
router.delete("/:id", deleteCategory);

module.exports = router;