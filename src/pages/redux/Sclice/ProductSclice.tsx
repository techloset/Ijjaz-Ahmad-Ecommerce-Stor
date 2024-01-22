import { createAsyncThunk, createSlice, PayloadAction, ThunkAction } from "@reduxjs/toolkit";
import axios from "axios";


interface Product {
  id: number;
  title: string;
}

interface RootState {
  product: {
    isLoading: boolean;
    products: Product[];
    isErrer: boolean;
    categories: string[];
  };
}
export const FetchProduct = createAsyncThunk("FetchProduct", async (state, action) => {
  try {
    const response = await axios.get(`https://fakestoreapi.com/products`);
    const data = response.data;
    return data;
  } catch (error) {
  }
});

const ecommerceslice = createSlice({
  name: "product",
  initialState: {
    isLoading: false,
    products: [],
    isErrer: false,
    categories: [],
  } as RootState["product"],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(FetchProduct.pending, (state, action) => {
      state.isLoading = true;
    })
    builder.addCase(FetchProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload
    })
    builder.addCase(FetchProduct.rejected, (state, action) => {
      state.isErrer = true;
    })
  }
});

export default ecommerceslice.reducer;
