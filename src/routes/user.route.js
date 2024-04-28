const express = require("express")
const router = express.Router();
const userContoller = require("../controller/user.contoller");

router.get("/profile",userContoller.getUserProfile);
router.get("/",userContoller.getAllUsers);

module.exports=router;
