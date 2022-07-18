import axios from "axios";
import api_data from "../../api/api_data";
import action_types from "../constants/action_type";


export const getCartProducts = (id) => {
    
    return async function (dispatch) {

        await axios ({
            url : api_data.CART_URL + `/${id}`,
            method : "GET",
            headers : api_data.HEADERS,
        })
        .then(res => dispatch({
            type : action_types.GET_CART_PRODUCTS,
            payload : res.data.carts[0]
        }))
        .catch(err => console.log(err))
    }
}  

export const getCartProductsById = (id) => {

    return async (dispatch) => {

        await axios({
            url: api_data.PRODUCTS_URL + `/${id}`,
            mehod: "GET",
            headers: api_data.HEADERS
          })
            .then(res => dispatch({
                type : action_types.GET_CART_PRODUCTS_BY_ID,
                payload : res.data
            }))
            .catch(err => console.log(err))
    }
}