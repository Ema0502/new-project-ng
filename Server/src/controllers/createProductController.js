const createProductController = (name, publicationDate, feature, image, price, conditionProd) => {
    const newProduct = { name, publicationDate, feature, image, price, conditionProd }
    return newProduct;
}

module.exports = {
    createProductController
}