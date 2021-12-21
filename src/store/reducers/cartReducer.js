
import { ADD_TO_CART , REMOVE_FROM_CART  } from "../constants/cartTypes";

const initialState = {
    loading : false,
    cartData : [],
    error : null
}

const cartReducer = (state = initialState , action) => {
    switch(action.type){
        case ADD_TO_CART:
            const productData = action && action.payload
            return {
                ...state, cartData: state.cartData.concat(productData)
            }
        case REMOVE_FROM_CART:
            const productId = action && action.payload;
            const updatedProductList = state.cartData.filter(data => data.id !== productId);
            return {
                ...state,
                cartData:updatedProductList
            }
        default:
            return state;
    }
}

export default cartReducer;
