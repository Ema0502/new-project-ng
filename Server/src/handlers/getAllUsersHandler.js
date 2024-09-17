const { getAllUsersController } = require("../controllers/getAllUsersController");

const getAllUsersHandler = (req, res) => {
    try {
      const allUserResult = getAllUsersController();
      return res.status(200).json(allUserResult);
    } catch (error) {
      return res.status(error.status).json({ error: error.message });
    }
  }

module.exports = {
    getAllUsersHandler
};