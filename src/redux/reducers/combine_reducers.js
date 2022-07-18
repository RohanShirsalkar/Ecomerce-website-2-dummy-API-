import { combineReducers } from "redux";
import { checkIsLogin, userReducer } from "./user_reducer";
import { productReducer, searchedProductReducer, singleProductReducer } from "./product_reducer";
import { cartProductReducer, cartProductsByIdReducer } from "./cart_reducer";


const reducers = combineReducers( {
    userStatus : checkIsLogin,
    userData : userReducer,
    products : productReducer,
    singleProduct : singleProductReducer,
    searchedProduct : searchedProductReducer,
    cart : cartProductReducer,
    cartProductsById : cartProductsByIdReducer,

})

export default reducers