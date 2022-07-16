import action_types from "../constants/action_type";

export const productReducer = (state = {}, { type, payload }) => {

    switch (type) {
        case action_types.GET_PRODUCT:
            return { ...state, ...payload }
            break;

        case action_types.GET_PRODUCTS_BY_CATEGORY:
            return { ...state, ...payload }
            break;

        case action_types.REMOVE_PRODUCTS:
            return {}
            break;

        default:
            return state;
    }
}

export const searchedProductReducer = (state = {}, { type, payload }) => {

    switch (type) {
        case action_types.SEARCH_PRODUCT:
            return { ...state, ...payload }
            break;

        case action_types.REMOVE_SEARCHED_PRODUCT:
            return {}
            break;

        default:
            return state;
    }
}

export const singleProductReducer = (state = {}, { type, payload }) => {

    switch (type) {

        case action_types.GET_SINGLE_PRODUCT:
            return { ...state, ...payload }
            break;

        case action_types.REMOVE_SINGLE_PRODUCT:
            return {}
            break;

        default:
            return state;
    }
}
