import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productReducer from "./Slice/ProductSclice";
import cartReducer from "./Slice/cartSlice";
import singleProductReducer from "./Slice/singleProductSlice";

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
