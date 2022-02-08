import {configureStore } from "@reduxjs/toolkit";
import selectSlice from './selectSlice'

const store = configureStore({
    reducer: {
        allProducts: selectSlice
    }
})

export default store;