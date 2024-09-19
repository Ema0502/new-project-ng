const { Router } = require('express');
const { getAllUsersHandler } = require("../handlers/getAllUsersHandler");
const { loginUserHandler } = require("../handlers/loginUserHandler");
const { getAllProductsHandler } = require('../handlers/getAllProductsHandler');
const { createUserHandler } = require("../handlers/createUserHandler");
const { createProductHandler } = require("../handlers/createProductHandler");
 
const router = Router();

router.get("/users", getAllUsersHandler);
router.get("/products", getAllProductsHandler);
router.post("/login", loginUserHandler);
router.post("/createUser", createUserHandler);
router.post("/createProduct", createProductHandler);

module.exports = router; 