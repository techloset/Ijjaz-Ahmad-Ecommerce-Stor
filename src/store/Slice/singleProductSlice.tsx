import axios from "axios";
import { createSlice, PayloadAction, ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "../Store";
import { SingleState } from "../../constant/AllTypes";
import { productInstance } from "../../utilities/axiosInstance/AxiosInstance";

export const FetchSingleProduct = (
  productId: string
): ThunkAction<void, RootState, unknown, any> => async (dispatch) => {
  try {
    dispatch(fetchSingleProductStart());
    const response = await productInstance.get(`/products/${productId}`);
    const data = response.data;
    dispatch(fetchSingleProductSuccess(data));
  } catch (error) {
    dispatch(fetchSingleProductError('error.message'));
  }
};


const singleProductSlice = createSlice({
  name: "singleProduct",
  initialState: {
    singleProduct: {},
    loading: false,
    error: null,
  } as SingleState,
  reducers: {
    fetchSingleProductStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchSingleProductSuccess(state, action: PayloadAction<any>) {
      state.loading = false;
      state.singleProduct = action.payload;
    },
    fetchSingleProductError(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchSingleProductStart,
  fetchSingleProductSuccess,
  fetchSingleProductError,
} = singleProductSlice.actions;


export default singleProductSlice.reducer;
