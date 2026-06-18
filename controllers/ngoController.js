const NGO = require("../models/NGO");

// CREATE NGO
const createNGO = async (req, res) => {
    try {
        const ngo = await NGO.create(req.body);

        res.status(201).json({
            success: true,
            data: ngo,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

// GET ALL NGOs
const getNGOs = async (req, res) => {
    try {
        const ngos = await NGO.find();

        res.status(200).json({
            success: true,
            count: ngos.length,
            data: ngos,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

// GET NGO BY ID
const getNGOById = async (req, res) => {
    try {
        const ngo = await NGO.findById(req.params.id);

        if (!ngo) {
            return res.status(404).json({
                success: false,
                message: "NGO Not Found",
            });
        }

        res.status(200).json({
            success: true,
            data: ngo,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

// UPDATE NGO
const updateNGO = async (req, res) => {
    try {
        const ngo = await NGO.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true,
            }
        );

        if (!ngo) {
            return res.status(404).json({
                success: false,
                message: "NGO Not Found",
            });
        }

        res.status(200).json({
            success: true,
            data: ngo,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

// DELETE NGO
const deleteNGO = async (req, res) => {
    try {
        const ngo = await NGO.findByIdAndDelete(
            req.params.id
        );

        if (!ngo) {
            return res.status(404).json({
                success: false,
                message: "NGO Not Found",
            });
        }

        res.status(200).json({
            success: true,
            message: "NGO Deleted Successfully",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
//search ngo
const searchNGOs = async (req, res) => {
    try {

        const keyword =
            req.query.name || "";

        const ngos =
            await NGO.find({
                ngoName: {
                    $regex: keyword,
                    $options: "i"
                }
            });

        res.status(200).json({
            success: true,
            count: ngos.length,
            data: ngos
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    createNGO,
    getNGOs,
    getNGOById,
    updateNGO,
    deleteNGO,
    searchNGOs
};