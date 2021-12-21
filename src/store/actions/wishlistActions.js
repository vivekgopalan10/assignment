
import { ADD_TO_WISHLIST , REMOVE_FROM_WISHLIST  } from "../constants/wishlistTypes";

export const addToWishlist = (productData = {})=>{
    return {
        type: ADD_TO_WISHLIST,
        payload: productData
    }
}

export const removeFromWishlist = (productData = {})=>{
    return {
        type: REMOVE_FROM_WISHLIST,
        payload: productData
    }
}



