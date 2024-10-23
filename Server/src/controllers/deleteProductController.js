const { getAllProductsController } = require("./getAllProductsController")

const deleteProductController = async (id) => {
    const arrayAllProducts = await getAllProductsController();
    const allOtherProducts = arrayAllProducts.filter((product) => product.id !== Number(id));
    return allOtherProducts;
}

module.exports = {
    deleteProductController
}