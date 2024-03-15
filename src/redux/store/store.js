import counterSlice from "../slices/counterSlice";
import { configureStore } from '@reduxjs/toolkit';
import productSlice from "../slices/productSlice";

export const store = configureStore({
    reducer:{
        counter: counterSlice,
        products: productSlice,
    }
})