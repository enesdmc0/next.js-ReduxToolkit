import {configureStore} from "@reduxjs/toolkit";
import {reducer as userReducer} from "./userStore/index";
import {reducer as productsReducer} from "./productsStore/index";
import {reducer as basketReducer} from "./basket-store";

export const createStore = (preloadedState = {}) => {
    const store = configureStore({
        reducer: {
            user: userReducer,
            products: productsReducer,
            basket: basketReducer
        },
        preloadedState
    })
    return store
}

export const store = createStore({})