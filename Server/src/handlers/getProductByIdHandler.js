const { getProductByIdController } = require("../controllers/getProductbyIdController");

const getProductByIdHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await getProductByIdController(id);
        return res.status(200).json(response);
    } catch (error) {
        res.status(error.status).json({ error:error.message });
    }
}

module.exports = {
    getProductByIdHandler
}