const mongoose=require("mongoose");

const productSchema=new mongoose.Schema({
    title:{
        type: String,
    },
    description:{
        type: String,
    }
    price:{
        type: Number,
    }
    discountedPrice:{
        type: Number,
    }
    discountedPercent:{
        type: Number,
    }
    quantity:{
        type: Number,
    }
    brand:{
        type: String,
    },
    imageUrl:{
        type: String,
    },
    ratings:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'ratings',
        },
    ],
    reviews:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'reviews',
        },
    ],
    numRatings: {
        type:  Number,
        default: 0,
    },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'categories',
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },
});

const Product = mongoose.model('products',productSchema);
module.exports=Product;