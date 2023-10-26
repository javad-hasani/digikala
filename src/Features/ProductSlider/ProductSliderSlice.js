import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProductsSlider = createAsyncThunk(
  "productsSlider/ProductsSlider",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get("");
      return res.data;
    } catch (error) {
      return rejectWithValue([], error);
    }
  }
);

const initialState = {
  productsSlider: [],
  loading: false,
  error: "",
};

export const ProductsSlider = createSlice({
  name: "productsSlider",
  initialState,
  extraReducers: {
    [fetchProductsSlider.pending]: (state) => {
      return { ...state, loading: true };
    },
    [fetchProductsSlider.fulfilled]: (state, action) => {
      return { ...state, loading: false, productsSlider: action.payload };
    },
    [fetchProductsSlider.rejected]: (state, action) => {
      return { ...state, loading: false, error: action.error.message };
    },
  },
});

export default ProductsSlider.reducer;
