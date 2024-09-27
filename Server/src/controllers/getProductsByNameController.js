const { getAllProductsController } = require("./getAllProductsController");

const getProductsByNameController = async (name) => {
  const lowerCaseName = name.toLowerCase().trim();
  const arrayAllProducts = await getAllProductsController();
  const arrayProductByname = arrayAllProducts.filter((product) => product.name.toLowerCase().includes(lowerCaseName));
  return arrayProductByname;
}

module.exports = {
  getProductsByNameController
}