import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface Product {
  // Define the structure of your product based on the API response
  // For example:
  id: number;
  title: string;
  // ... other properties
}

interface RootState {
  product: {
    isLoading: boolean;
    products: Product[];
    isErrer: boolean;
    categories: string[];
  };
}

export const FetchProduct = createAsyncThunk<Product[]>("FetchProduct", async () => {
  const response = await axios.get('https://fakestoreapi.com/products');
  return response.data;
});
FetchProduct()

// export const FetchCategories = createAsyncThunk<string[]>("FetchCategories", async () => {
//   const res = await fetch("https://fakestoreapi.com/products");
//   let data = await res.json();

//   const getUnique = (data: any[], property: string): string[] => {
//     let newVal = data.map((currElem) => {
//       return currElem[property];
//     });

//     return ["All", ...new Set(newVal)];
//   };

//   let categoryOnlyData = getUnique(data, "category");
//   return categoryOnlyData;
// });

const ecommerceslice = createSlice({
  name: "product",
  initialState: {
    isLoading: false,
    products: [],
    isErrer: false,
    categories: [],
  } as RootState["product"],
  reducers: {
    FetchCategories(state, action: PayloadAction) {
      console.log("🚀 ~ FetchCategories ~ state.products:", state.products);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(FetchProduct.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(FetchProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
      console.log("🚀 ~ builder.addCase ~ action.payload:", action.payload)
    });
    builder.addCase(FetchProduct.rejected, (state) => {
      state.isErrer = true;
    });
    // builder.addCase(FetchCategories.pending, (state) => {
    //   state.isLoading = true;
    // });
    // builder.addCase(FetchCategories.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   state.categories = action.payload;
    // });
    // builder.addCase(FetchCategories.rejected, (state) => {
    //   state.isErrer = true;
    // });
  },
});

export default ecommerceslice.reducer;
