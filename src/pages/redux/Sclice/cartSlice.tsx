import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartProduct {
  // Define the structure of your product here
  id: number;
  // Add other properties as needed
}

interface CartState {
  cart: CartProduct[];
}

const getLocalCartData = (): CartProduct[] => {
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
  } as CartState, // Use CartState as the type for initialState
  reducers: {
    addproduct: (state, action: PayloadAction<CartProduct>) => {
      state.cart.push(action.payload);
      localStorage.setItem("cartProduct", JSON.stringify(state.cart));
    },
    removeproduct: (state, action: PayloadAction<number>) => {
      let updatedCart = state.cart.filter(
        (curItem) => curItem.id !== action.payload
      );
      state.cart = updatedCart;
    },
    deleteproduct: (state) => {
      state.cart = [];
    },
  },
});

export const { addproduct, removeproduct, deleteproduct } = cartSlice.actions;

export default cartSlice.reducer;
