import action_types from "../constants/action_type";


export const cartProductReducer = (state = {}, {type, payload}) => {

    switch (type) {
        case action_types.GET_CART_PRODUCTS:
            return {...state, ...payload}
            break;
    
        default:
            return state;
    }
}

export const cartProductsByIdReducer = (state = {arr : []}, {type, payload}) => {

    switch (type) {
        case action_types.GET_CART_PRODUCTS_BY_ID:
            return {...state, ...payload}
            break;
    
        default:
            return state;
    }
}