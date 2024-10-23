const { createProductController } = require("../controllers/createProductController");

const createProductHandler = (req, res) => {
    try {
        const { name, feature, publicationDate, image, price, conditionProd } = req.body;
        if ( !name || !publicationDate || !feature || !image || !price || !conditionProd) {
            throw new Error(res.status(404).json({error: "fail load"}));
        }
        const response = createProductController(name, feature, publicationDate, image, price, conditionProd);
        return res.status(201).json(response);
    } catch (error) {
        return res.status(error.status).json({ error: error.message });
    }
}

module.exports = {
    createProductHandler
}