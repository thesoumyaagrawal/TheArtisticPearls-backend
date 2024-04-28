const mongoose=require("mongoose");
const Schema = mongoosee;

const orderSchema=new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'users',
        //required: true,
    },
    orderItems:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'cartItems',
            //required: true,
        }
    ],
    orderDate:{
        type:Date,
        required true,
    },
    deliveryDate:{
       type: Date,
    },
    shippingAddress:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'addresses',
    },
    paymentDetails:{
    paymentMethod:{
        type: String,
    }
    transactionId:{
        type: String,
    }
    paymentId:{
        type: String,
    }
    paymentStatus:{
        type: String,
        default:"PENDING",
    }
},
    totalPrice:{
        type: Number,
        required: true,
        //default: 0   
    },
    totalDiscountedPrice:{
        type: Number,
        required: true,
        //default: 0
    },
    discount:{
        type: Number,
        required: true,
        default: 0
    },
    orderStatus:{
        type: Number,
        required: true,
        default:"PENDING"
    },
    totalItem:{
        type: Number,
        required: true,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },
});

const Order = mongoose.model('orders',orderSchema);
module.exports=Order;