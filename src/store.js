import { configureStore } from "@reduxjs/toolkit";
import  cartSlice  from "./redux/reducers/reducer";

const store = configureStore({
    reducer:{
        cart:cartSlice
    }
});

export default store;