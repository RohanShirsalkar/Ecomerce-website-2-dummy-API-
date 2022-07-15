import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers/combine_reducers";
import thunk from "redux-thunk"

const preLoadedState = {}

const store = configureStore({
    reducer : reducers,
    preLoadedState,
    middleware : [thunk],
})

export default store