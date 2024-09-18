const { createUserController } = require("../controllers/createUserController");

const createUserHandler = (req, res) => {
    try {
        const { userName, firstName, lastName, birth, email, password } = req.body;
        const newUser = { 
            userName, 
            firstName, 
            lastName, 
            birth, 
            email, 
            password 
        }
        const response = createUserController(newUser);
        return res.status(201).json(response);
    } catch (error) {
        return res.status(error.status).json({ error: error.message });
    }
}

module.exports = {
    createUserHandler
}