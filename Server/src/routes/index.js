const { Router } = require('express');

const { getAllUsersHandler } = require("../handlers/getAllUsersHandler");
const { loginUserHandler } = require("../handlers/loginUserHandler");
const { getAllProductsHandler } = require('../handlers/getAllProductsHandler');
const { createUserHandler } = require("../handlers/createUserHandler");
const { createProductHandler } = require("../handlers/createProductHandler");
const { getProductByIdHandler } = require('../handlers/getProductByIdHandler');
const { deleteProductHandler } = require('../handlers/deleteProductHandler');
const { updateProductHandler } = require('../handlers/updateProductHandler');

const router = Router();

router.get("/users", getAllUsersHandler);
router.get("/products", getAllProductsHandler);
router.get("/products/:id", getProductByIdHandler);
router.post("/login", loginUserHandler);
router.post("/createUser", createUserHandler);
router.post("/createProduct", createProductHandler);
router.put("/products/:id", updateProductHandler);
router.delete("/products/:id", deleteProductHandler);

module.exports = router;