import action_types from "../constants/action_type"

export const userReducer = (state = {}, { type, payload }) => {

    switch (type) {
        case action_types.LOGIN_USER:
            // setIslogin(true)
            return { ...state, ...payload }
            break;
            
        case action_types.GET_USER:
            return {...state, ...payload}
            break;

        default:
            return state;
    }
}

export const checkIsLogin = (state = { isLogin : false }, {type, payload}) => {

    switch (type) {
        case action_types.SET_LOGIN:
            return {...state, isLogin : payload}
            break;
    
        default:
            return state;
    }
}