import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("fetchData", async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
});

const productSlice = createSlice({
  name: "products",
  initialState: {
    isLoading: false,
    products : [],
    isError: false,
  },
  reducers: {}, // You can add reducers here if needed
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        console.log("Error", action.error.message);
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default productSlice.reducer;
