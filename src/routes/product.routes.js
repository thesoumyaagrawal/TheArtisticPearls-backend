const express = require("express")
const router = express.Router();

const productConroller = require("../controller/product.controller");
//const autheticate = require("../middleware/authenticate");

router.get("/",productConroller.getAllProducts);
router.get("/id/:id",productConroller.findProductById);

module.exports=router;