const express = require("express")
const router = express.Router()

const productController = require("../controller/product.controller");
//const authenticate = require("../middleware/authenticate");

router.post("/", productController.createProduct);
router.post("/creates", productController.createMultipleProduct);
router.delete("/deletes", productController.deleteProduct);
router.put("/put", productController.updateProduct);

module.exports = router;
