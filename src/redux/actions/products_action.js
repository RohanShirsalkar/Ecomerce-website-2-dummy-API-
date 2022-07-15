import axios from "axios"
import product_action_type from "../constants/product_action_types"
import api_data from "../../api/api_data"

export const getProducts = ({ limit }) => {

    return async function (dispatch) {

        await axios({
            url: api_data.PRODUCTS_URL + `?limit=${limit}`,
            method: "GET",
            headers: api_data.HEADERS
        })
            .then(res => dispatch({
                type: product_action_type.GET_PRODUCT,
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
                type: product_action_type.GET_PRODUCTS_BY_CATEGORY,
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
                type: product_action_type.SEARCH_PRODUCT,
                payload: res.data
            }))
            .catch(err => console.log(err))

    }
}