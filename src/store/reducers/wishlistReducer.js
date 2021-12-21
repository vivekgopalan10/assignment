
import { ADD_TO_WISHLIST , REMOVE_FROM_WISHLIST  } from "../constants/wishlistTypes";

const initialState = {
    loading : false,
    wishlistData : [],
    error : null
}

const wishListReducer = (state = initialState , action) => {
    switch(action.type){
        case ADD_TO_WISHLIST:
            const productData = action && action.payload
            return {
                ...state, wishlistData: state.wishlistData.concat(productData)
            }
            case REMOVE_FROM_WISHLIST:
                const productId = action && action.payload;
                const updatedProductList = state.wishlistData.filter(data => data.id !== productId);
                return {
                    ...state,
                    wishlistData:updatedProductList
                }
        default:
            return state;

    }
}
export default wishListReducer;
