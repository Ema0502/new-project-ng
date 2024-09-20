const { getAllProductsController } = require("../controllers/getAllProductsController");

const getAllProductsHandler = async (req, res) => {
    try {
        const allProducts = await getAllProductsController();
        return res.status(200).json(allProducts);
    } catch (error) {
        return res.status(error.status).json(error.message);
    }
}

module.exports = {
    getAllProductsHandler
}