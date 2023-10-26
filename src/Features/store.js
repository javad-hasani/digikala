import { configureStore } from "@reduxjs/toolkit";
import ProductsSliderReducer from "./ProductSlider/ProductSliderSlice";
import discountedProductsReducer from "./DiscountedProducts/DiscountedProductsSlice";

export const store = configureStore({
  reducer: {
    productSlider: ProductsSliderReducer,
    discountedProducts: discountedProductsReducer,
  },
});
