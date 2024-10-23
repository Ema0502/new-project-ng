const { getProductsByNameController } = require("../controllers/getProductsByNameController");

const getProductsByNameHandler = async (req, res) => {
  try {
    const { name } = req.query;
    const response = await getProductsByNameController(name);
    return res.status(200).json(response);
  } catch (error) {
    res.status(error.status).json({ error:error.message });
}
}

module.exports = {
  getProductsByNameHandler
}