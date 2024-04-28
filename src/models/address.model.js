const mongoose=require("mongoose");

const AddressSchema=new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },

    streetAddress:{
        type: String,
        required: true,
    },
    city:{
        type: String,
        required: true,
    },
    state:{
        type: String,
        required: true,
        default: "Customer"
    },
    zipCode:{
        type: Number,
        required: true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"users",
    },
    mobile:{
        type: String,
        required: true,
    },
})

const Address=mongoose.model('addresses',AddressSchema);
module.exports=Address;