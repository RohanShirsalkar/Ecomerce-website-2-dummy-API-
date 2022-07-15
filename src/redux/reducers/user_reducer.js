import action_types from "../constants/action_type"

export const userReducer = (state ={}, {type, payload}) => {

    switch (type) {
        case action_types.LOGIN_USER:
            return state = {...state, ...payload}
            break;
    
        default:
            return state;
    }
}