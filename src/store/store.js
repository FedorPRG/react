import { configureStore } from "@reduxjs/toolkit";
import discounts_item from "../reducers/discounts_item";
import products_reducer from "../reducers/products_reducer";

export const store = configureStore({
  reducer: {
    discounts: discounts_item,
    products: products_reducer,
  },
});
export default store;