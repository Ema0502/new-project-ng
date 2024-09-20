const axios = require("axios");

const getAllProductsController = async () => {
  const { data } = await axios("https://fakestoreapi.com/products/");
  const allProductsResult = data.map((product) => {
    return {
      id: product.id,
      name: product.title,
      feature: product.description,
      publicationDate: product.publicationDate || new Date(),
      image: product.image,
      price: product.price,
      conditionProd: product.conditionProd || "new"
    }
  });
  return allProductsResult;
}

module.exports = {
  getAllProductsController
}