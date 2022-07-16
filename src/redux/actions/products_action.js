import axios from "axios"
import api_data from "../../api/api_data"
import action_types from "../constants/action_type"

export const getProducts = ({ limit }) => {

    return async function (dispatch) {

        await axios({
            url: api_data.PRODUCTS_URL + `?limit=${limit}`,
            method: "GET",
            headers: api_data.HEADERS
        })
            .then(res => dispatch({
                type: action_types.GET_PRODUCT,
                payload: res.data
            }))
            .catch(err => console.log(err.response))
    }
}

export const getProductsByCategory = ({ limit, category }) => {

    return async function (dispatch) {

        await axios({
            url: api_data.PRODUCTS_URL + `/category/${category}?limit=${limit}`,
            method: "GET",
            headers: api_data.HEADERS
        })
            .then(res => dispatch({
                type: action_types.GET_PRODUCTS_BY_CATEGORY,
                payload: res.data
            }))
            .catch(err => {
                console.log(err)
            })

    }
}

export const getSearchedProducts = (query) => {

    return async function (dispatch) {

        await axios({
            url: api_data.BASE_URL + `/products/search?q=${query}`,
            method: "GET",
            heders: api_data.HEADERS
        })
            .then(res => dispatch({
                type: action_types.SEARCH_PRODUCT,
                payload: res.data
            }))
            .catch(err => console.log(err))
    }
}

export const getSingleProduct = (productId) => {

    return async (dispatch) => {

        await axios({
            url: api_data.PRODUCTS_URL + `/${productId}`,
            method: "GET",
            headers: api_data.HEADERS
        })
            .then(res => dispatch({
                type : action_types.GET_SINGLE_PRODUCT,
                payload : res.data
            }))
            .catch(err => console.log(err))
    }
}