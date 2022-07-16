import axios from "axios";
import api_data from "../../api/api_data";
import action_types from "../constants/action_type";

export const getCartProducts = () => {
    
    return async function (dispatch) {

        await axios ({
            url : api_data.CART_URL + `/1`,
            method : "GET",
            headers : api_data.HEADERS,
        })
        .then(res => dispatch({
            type : action_types.GET_CART_PRODUCTS,
            payload : res.data
        }))
        .catch(err => console.log(err))
    }
}  
