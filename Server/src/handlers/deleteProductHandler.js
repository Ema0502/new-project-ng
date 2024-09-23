const { deleteProductController } = require("../controllers/deleteProductController");

const deleteProductHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await deleteProductController(id);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(error.status).json({ error: error.message });
    }
}

module.exports = {
    deleteProductHandler
}