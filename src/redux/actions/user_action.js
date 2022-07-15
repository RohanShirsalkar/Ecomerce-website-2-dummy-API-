import axios from "axios"
import action_types from "../constants/action_type"

export const loginUser = ({email, password}) => {

    return async function (dispatch) {

        const data = {
            username: email,
            password: password,
        }

        await axios({
            url: "https://dummyjson.com/auth/login",
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: data
        })
        .then(res => dispatch({
            type: action_types.LOGIN_USER,
            payload : res,
        }))
        .catch(err => dispatch({
            type: action_types.LOGIN_USER,
            payload: err.response
        }))
    }
} 