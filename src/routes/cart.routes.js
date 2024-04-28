const express = require("express");
const router = express.Router();

const cartController = require("../controller/cart.controller");
// const authenticate = require("../middleware/authenticate");

router.get("/", cartController.findUserCart);
router.put("/add", cartController.addItemToCart);

module.exports = router;
