import { combineReducers } from "redux";
import dashboardReducer from './dashboardReducer';
import wishlistReducer from './wishlistReducer';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
    dashboard : dashboardReducer,
    wishlist: wishlistReducer,
    cart: cartReducer
})

export default rootReducer;