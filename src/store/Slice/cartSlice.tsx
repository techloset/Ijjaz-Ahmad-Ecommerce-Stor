import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, CartState } from "../../constant/AllTypes";

const getLocalCartData = (): CartItem[] => {
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
  } as CartState,
  reducers: {
    addproduct: (state, action: PayloadAction<CartItem>) => {
      state.cart.push(action.payload);
      localStorage.setItem("cartProduct", JSON.stringify(state.cart));
    },
    removeproduct: (state, action: PayloadAction<number>) => {
      let updatedCart = state.cart.filter(
        (curItem) => curItem.id !== action.payload
      );
      state.cart = updatedCart;
    },
    SetDec: (state, action: PayloadAction<number>) => {
      let updatedCart = state.cart.filter(
        (curItem) => curItem.id !== action.payload
      );
      state.cart = updatedCart;
    },
    SetInc: (state, action: PayloadAction<number>) => {
      let updatedProducts = state.cart.map((curElem: any) => {
        if (curElem.id === action.payload) {
          let incAmount = curElem.amounts + 1;

          return {
            ...curElem,
            amount: incAmount,
          };
        } else {
          return curElem;
        }
      });

      state.cart = updatedProducts
    },
    deleteproduct: (state) => {
      state.cart = [];
    },
  },
});

export const { addproduct, removeproduct, deleteproduct } = cartSlice.actions;

export default cartSlice.reducer;
