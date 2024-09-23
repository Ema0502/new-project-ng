const { updateProductController } = require("../controllers/updateProductController");

const updateProductHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, publicationDate, feature, image, price, conditionProd } = req.body;
        if (!id) {
            throw new Error("Invalid Id");
        }
        const response = await updateProductController( id, name, publicationDate, feature, image, price, conditionProd );
        return res.status(200).json(response);
    } catch (error) {
        return res.status(error.status).json({ error: error.message });
    }
}

module.exports = {
    updateProductHandler
}