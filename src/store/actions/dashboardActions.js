
import { REMOVE_FROM_PRODUCT_LIST, GET_PRODUCT_LIST_REQUEST ,GET_PRODUCT_LIST_SUCCESS ,GET_PRODUCT_LIST_REJECTED } from "../constants/dashboardTypes";
const superagent = require('superagent');

const BACKEND_API_URL = 'https://run.mocky.io/v3/05e9651d-528e-4d7c-a60b-bae8f09684c6'

export const removeFromProductList = productId =>{
    return {
        type: REMOVE_FROM_PRODUCT_LIST,
        payload: productId
    }
}
export const getProductListRequest = ()=>{
    return {
        type: GET_PRODUCT_LIST_REQUEST
    }
}
export const getProductListSuccess = productList =>{
    return {
        type: GET_PRODUCT_LIST_SUCCESS,
        payload: productList
    }
}
export const getProductListReject = error =>{
    return {
        type: GET_PRODUCT_LIST_REJECTED,
        payload: error
    }
}

export const getProductList = () => {
    return (dispatch) => {
        dispatch(getProductListRequest);
        let productInfo = [];
        let id = 0;
        superagent.get(BACKEND_API_URL).then(response=>{
        const productData = response.body.products;
           productData.forEach(data => {
               id = id + 1 ;
            productInfo.push({
                id: id,
                brandName: data && data.brand,
                productName: data && data.productName,
                price : data && data.price,
                productImage : data && data.searchImage
            })
           });
        dispatch(getProductListSuccess(productInfo))
        }).catch(error =>{
            console.log("Error",error)
            dispatch(getProductListReject)
        })
    }
}
