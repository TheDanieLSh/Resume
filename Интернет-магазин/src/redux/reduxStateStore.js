import { configureStore } from "@reduxjs/toolkit"
import fetchDataReducer from "./fetchDataReducer"
import searchReducer from "./searchReducer"

export const store = configureStore({
    reducer: {
        fetchDataReducer,
        searchReducer
    }
})