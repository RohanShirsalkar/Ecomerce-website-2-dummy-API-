import axios from "axios"
import action_types from "../constants/action_type"

export const loginUser = (loginDetails) => {

    return async function (dispatch) {

        await axios({
            url: "https://dummyjson.com/auth/login",
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            data: loginDetails
        })
        .then(res => dispatch({
            type: action_types.LOGIN_USER,
            payload : res.data,
        }))
        .catch(err => dispatch({
            type: action_types.LOGIN_USER,
            payload: err.response
        }))
    }
} 

export const setLogin = (status) => {
    
    return (dispatch) => {
        dispatch({
            type : action_types.SET_LOGIN,
            payload : status
        })
    }
}