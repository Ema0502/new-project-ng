const { getAllProductsController } = require("../controllers/getAllProductsController");

const getAllProductsHandler = (req, res) => {
    try {
        const allProducts = getAllProductsController();
        return res.status(200).json(allProducts);
    } catch (error) {
        return res.status(error.status).json(error.message);
    }
}

module.exports = {
    getAllProductsHandler
}