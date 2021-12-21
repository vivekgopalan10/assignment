
import { ADD_TO_CART , REMOVE_FROM_CART  } from "../constants/cartTypes";

export const addToCart = (productData = {})=>{
    return {
        type: ADD_TO_CART,
        payload: productData
    }
}

export const removeFromCart = (productData = {})=>{
    return {
        type: REMOVE_FROM_CART,
        payload: productData
    }
}

