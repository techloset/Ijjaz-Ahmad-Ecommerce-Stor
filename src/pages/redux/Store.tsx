import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productReducer from "./Sclice/ProductSclice";
import cartReducer from "./Sclice/cartSlice";
import singleProductReducer from "./Sclice/singleProductSlice";

const rootReducer = combineReducers({
    redux: productReducer,
    cart: cartReducer,
    singleProduct: singleProductReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const Store = configureStore({
    reducer: rootReducer,
});
