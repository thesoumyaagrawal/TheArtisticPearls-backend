const userService = require("../services/user.service");
const jwtProvider = require("../config/jwtProvider");
const bcrypt = require("bcrypt")
const cartService = require("../services/cart.service");
const User = require("../models/user.model");
const Address = require("../models/address.model");


const register = async(req,res)=>{
   
    const {name,email,password,streetAddress,city,state,zipCode,mobile}=req.body;
    let existingUser;
    try{
        existingUser= await User.findOne({name});
    } 
    catch(err)
    {
        return console.log(err);
    }
    if(existingUser){
        return res.status(400).json({message:"User already exists"});
    }
    const user = new User({
        name,
        email,
        password,
        streetAddress,
        city,
        state,
        zipCode,
        mobile
    });
    try{
        await user.save();
    }
    catch(err){
        return console.log(err);
    }
    await cartService.createCart(user);
    // await cartService.createCart(user);
    return res.status(201).json({message:"registered successfully, you can login now", user: existingUser});;
}

const login = async(req,res,next)=>{
    const { name,email,password,streetAddress,city,state,zipCode,mobile} = req.body;
    let existingUser;
    try{
        existingUser= await User.findOne({name});
    } 
    catch(err)
    {
        return console.log(err);
    }
    if(!existingUser){
        return res.status(404).json({message:"couldn't find user with this username"});
    }
    if(password!=existingUser.password){
        return res.status(400).json({message:"password doesn't match"});
    }
    return res.status(200).json({message:"logged in successfully", user: existingUser});
}

module.exports={register, login};