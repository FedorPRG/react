import { configureStore } from "@reduxjs/toolkit";
import ProductsSlice from "../reducers/ProductsReducer";

export const store = configureStore({
  reducer: {
    products: ProductsSlice,
  },
});
export default store;
