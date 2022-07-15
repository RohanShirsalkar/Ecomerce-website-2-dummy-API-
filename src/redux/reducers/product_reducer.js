import product_action_type from "../constants/product_action_types";

export const productReducer = (state = {}, { type, payload }) => {

    switch (type) {
        case product_action_type.GET_PRODUCT:
            return { ...state, ...payload }
            break;

        case product_action_type.GET_PRODUCTS_BY_CATEGORY:
            return { ...state, ...payload }
            break;
            
        default:
            return state;
    }
}

export const searchedProductReducer = (state = {}, {type, payload}) => {

    switch (type) {
        case product_action_type.SEARCH_PRODUCT:
            return {...state, ...payload}
            break;
    
        default:
            return state;
    }
}
