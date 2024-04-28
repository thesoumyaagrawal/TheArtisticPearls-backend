const express = require("express");
const router = express.Router();

const cartItemController = require("../controller/cartItem.controller");
//const authenticate = require("../middleware/authenticate");

router.put("/:id",cartItemController.updateCartItem);
router.delete("/:id",cartItemController.removeCartItem);

module.exports=router; 