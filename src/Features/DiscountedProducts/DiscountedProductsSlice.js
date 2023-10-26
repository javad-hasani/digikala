import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// Action creator for fetching discounted products
export const fetchDiscountedProducts = createAsyncThunk(
  "fetchDiscountedProducts",
  async (_, { rejectWithValue }) => {
    try {
      // Make an asynchronous request to fetch discounted products
      const res = await axios.get(
        // Add the URL you're making the request to within the empty string
      );
      // Return the data received from the request
      return res.data;
    } catch (error) {
      // In case of an error, reject the promise with a default value and the error
      return rejectWithValue([], error);
    }
  }
);

// Initial state for the discounted products slice of the Redux store
const initialState = {
  products: [], // An empty array to hold the products
  loading: false, // Loading state indicator
  error: "", // Error message, if any
};

// Create a slice of the Redux store for discounted products
const discountedProducts = createSlice({
  name: "discountedProducts", // Name of the slice
  initialState, // Initial state defined above
  extraReducers: {
    // Define how the slice should respond to different actions
    [fetchDiscountedProducts.pending]: (state) => {
      return { ...state, loading: true }; // Set loading to true when fetching is pending
    },
    [fetchDiscountedProducts.fulfilled]: (state, action) => {
      return { ...state, loading: false, products: action.payload }; // Set loading to false and update products when fetching is successful
    },
    [fetchDiscountedProducts.rejected]: (state, action) => {
      return { ...state, loading: false, error: action.payload.message }; // Set loading to false and capture error message when fetching is rejected
    },
  },
});


export default discountedProducts.reducer;
