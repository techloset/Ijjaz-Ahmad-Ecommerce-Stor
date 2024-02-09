import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ProductState } from "../../constant/AllTypes";
import { productInstance } from "../../utilities/axiosInstance/AxiosInstance";

export const FetchProduct = createAsyncThunk("FetchProduct", async (state, action) => {
  try {
    const response = await productInstance.get(`/products`);
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
    isError: false,
    categories: [],
  } as ProductState["product"],
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
      state.isError = true;
    })
  }
});

export default ecommerceslice.reducer;
