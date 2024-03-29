import axios from "axios"
import api_data from "../../api/api_data"
import action_types from "../constants/action_type"


// currently not in use
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
//

export const getUserById = () => {

    return async (dispatch) => {

        await axios({
            url : api_data.GET_USER_URL + "/" + api_data.USER_ID,
            method : "GET",
            headers : api_data.HEADERS,
        })
        .then(res => dispatch({
            type : action_types.GET_USER,
            payload : res.data
        }))
        .catch(err => console.log(err))
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