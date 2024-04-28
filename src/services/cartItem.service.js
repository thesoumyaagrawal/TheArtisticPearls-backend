const userService = require("../services/user.service.js");


async function updateCartItem(userId, cartItemId, cartItemData){
    try {
        const item = await findCartItemsById(cartItemId);
        if(!item){
            throw new Error("cart item not found : ",cartItemId)
        }
        const user=await userService.findUserById(item.userId);
        if(!user){
            throw new Error("user not found : ",userId)
        }
        if(user._id.toString()===userId.toString()){
            item.quantity=cartItemData.quantity;
            item.price=item.quantity*item.product.price;
            item.discountedPricce=item.quantity*item.product.discountedPrice;
            const updatedCartItem=await item.save();
            return updatedCartItem;
        }
        else{
            throw new Error("You cant update this cart Item");
        }
    } catch (error) {
        throw new Error(error.message);
    }
}

async function removeCartItem(userId,cartItemId){
    const cartItem = await findCartItemById(cartItemId);
    const user=await user.Service.findUserById(userId);

    if(user._id.toString()===cartItem.userId.toString()){
        await CartItem.findByIdAndDelete(cartItemId)
    }
    throw new Error("You can't remove another user's Item");
}

async function findCartItemById(cartItemId){
    const cartItem  = await findCartItemById(cartItemId);
    if(cartItem){
        return cartItem
    }
    else{
        throw new Error("Cart Item not found with Id", cartItemId);
    }
}

module.exports={
    updateCartItem,
    removeCartItem,
    findCartItemById,
};