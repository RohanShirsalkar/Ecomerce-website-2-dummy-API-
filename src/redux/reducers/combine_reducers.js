import { combineReducers } from "redux";
import { userReducer } from "./user_reducer";
import { productReducer, searchedProductReducer } from "./product_reducer";


const reducers = combineReducers( {
    user : userReducer,
    products : productReducer,
    searchedProduct : searchedProductReducer,
})

export default reducers