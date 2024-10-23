const { getProductByIdController } = require("./getProductbyIdController");

const updateProductController = async ( id, name, publicationDate, feature, image, price, conditionProd ) => {
    const updateProduct = {};
    const productById = await getProductByIdController(id);
    
    updateProduct.id = id;
    updateProduct.name = name ? name : productById.name;
    updateProduct.publicationDate = publicationDate ? publicationDate : productById.publicationDate;
    updateProduct.feature = feature ? feature : productById.feature;
    updateProduct.image = image ? image : productById.image;
    updateProduct.price = price ? price : productById.price;
    updateProduct.conditionProd = conditionProd ? conditionProd : productById.conditionProd;
    console.log(updateProduct);
    return updateProduct;
}

module.exports = {
    updateProductController
}