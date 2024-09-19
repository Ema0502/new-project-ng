const { loginUserController } = require("../controllers/loginUserController");

const loginUserHandler = (req, res) => {
    try {
        const { email, password } = req.body;
        if ( !email || !password) {
            throw new Error(res.status(404).json({error: "fail load"}));
        }
        const resultLogin = loginUserController(email, password);
        return res.status(200).json(resultLogin);
    } catch (error) {
        res.status(error.status).json({ error: error.message });
    }
}

module.exports = {
    loginUserHandler
}