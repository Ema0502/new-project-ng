const { getAllProductsController } = require("./getAllProductsController");

const getProductByIdController = async (id) => {
    const arrayAllProducts = await getAllProductsController();
    const productById = arrayAllProducts.find((product) => product.id == id);
    return productById;
}

module.exports = {
    getProductByIdController
}