const express = require("express");

const {
    getApiDocumentation
} = require("../controllers/apiController");

const router = express.Router();

router.get(
    "/",
    getApiDocumentation
);

module.exports = router;