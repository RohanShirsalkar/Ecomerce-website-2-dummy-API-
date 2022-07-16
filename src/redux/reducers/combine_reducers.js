import { combineReducers } from "redux";
import { checkIsLogin, userReducer } from "./user_reducer";
import { productReducer, searchedProductReducer, singleProductReducer } from "./product_reducer";
import { cartProductReducer } from "./cart_reducer";


const reducers = combineReducers( {
    userStatus : checkIsLogin,
    userData : userReducer,
    products : productReducer,
    singleProduct : singleProductReducer,
    searchedProduct : searchedProductReducer,
    cart : cartProductReducer

})

export default reducers