const express = require("express");

const {
    createNGO,
    getNGOs,
    getNGOById,
    updateNGO,
    deleteNGO,
    searchNGOs
} = require("../controllers/ngoController");

const router = express.Router();

// Search Route MUST come before /:id
router.get("/search", searchNGOs);

// CRUD Routes
router.post("/", createNGO);
router.get("/", getNGOs);

router.get("/:id", getNGOById);
router.put("/:id", updateNGO);
router.delete("/:id", deleteNGO);

module.exports = router;