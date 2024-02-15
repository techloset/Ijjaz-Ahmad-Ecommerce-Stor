import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productReducer from "./slice/ProductSclice";
import cartReducer from "./slice/CartSlice";
import singleProductReducer from "./slice/SingleProductSlice";

const rootReducer = combineReducers({
    redux: productReducer,
    cart: cartReducer,
    singleProduct: singleProductReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof Store.dispatch;
export const Store = configureStore({
    reducer: rootReducer,
});
