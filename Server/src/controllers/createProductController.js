const createProductController = (name, feature, publicationDate, image, price, conditionProd) => {
    const newProduct = { name, publicationDate, feature, image, price, conditionProd };
    console.log(name, feature, publicationDate, image, price, conditionProd);
    return newProduct;
}

module.exports = {
    createProductController
}