import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { cartItem, cartState } from "../../constant/Types";

const getLocalCartData = (): cartItem[] => {
  let localCartData = localStorage.getItem("cartProduct");

  if (!localCartData || JSON.parse(localCartData).length === 0) {
    return [];
  } else {
    return JSON.parse(localCartData);
  }
};

const cartSlice = createSlice({
  name: "cartProduct",
  initialState: {
    cart: getLocalCartData(),
    total_amount: 0,
    amount: 0,
    total_price: 0,
  } as cartState, // Explicitly type initialState as cartState
  reducers: {
    addProduct: (state, action: PayloadAction<cartItem>) => {
      state.cart.push(action.payload);
      localStorage.setItem("cartProduct", JSON.stringify(state.cart));
    },
    removeproduct: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter(
        (curItem) => curItem.id !== action.payload
      );
    },
    SetDec: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter(
        (curItem) => curItem.id !== action.payload
      );
    },
    SetInc: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.map((curElem) => {
        if (curElem.id === action.payload) {
          let incAmount = (curElem.amounts || 0) + 1;

          return {
            ...curElem,
            amount: incAmount,
          };
        } else {
          return curElem;
        }
      });
    },
    deleteproduct: (state) => {
      state.cart = [];
    },
  },
});

export const { addProduct, removeproduct, deleteproduct } = cartSlice.actions;

export default cartSlice.reducer;
