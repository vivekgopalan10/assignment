import { REMOVE_FROM_PRODUCT_LIST, GET_PRODUCT_LIST_REQUEST ,GET_PRODUCT_LIST_SUCCESS ,GET_PRODUCT_LIST_REJECTED } from "../constants/dashboardTypes";

const initialState = {
    loading : false,
    loaded : false,
    productList : [],
    error : null
}

const dashboardReducer = (state = initialState , action) => {
    switch(action.type){
        case REMOVE_FROM_PRODUCT_LIST:
            const productId = action && action.payload;
            const updatedProductList = state.productList.filter(data => data.id !== productId);
            return {
                ...state,
                productList:updatedProductList
            }
        case GET_PRODUCT_LIST_REQUEST:
            return {
                ...state,
                loading : true
            }
        case GET_PRODUCT_LIST_SUCCESS:
            return {
                loading: false,
                productList : action && action.payload,
                loaded: true,
                error : null
            }
        case GET_PRODUCT_LIST_REJECTED:
            return {
                loading: false,
                productList : [],
                error : action.payload
            }
        default:
            return state;

    }
}

export default dashboardReducer;