const { Router } = require('express');
const { getAllUsersHandler } = require("../handlers/getAllUsersHandler");
const { loginUserHandler } = require("../handlers/loginUserHandler");
const { getAllProductsHandler } = require('../handlers/getAllProductsHandler');
 
const router = Router();

router.get("/users", getAllUsersHandler);
router.get("/products", getAllProductsHandler);
router.post("/login", loginUserHandler);

module.exports = router; 