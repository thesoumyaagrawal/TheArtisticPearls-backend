const express = require("express");
const router = express.Router();

const reviewController = require("../controller/review.contoller");
//const authenticate = require("../middleware/authenticate");

router.post("/create",reviewController.createReview);
router.get("/product/:productId",reviewController.getAllReview);

module.exports=router;
