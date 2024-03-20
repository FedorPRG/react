import { configureStore } from "@reduxjs/toolkit";
import discounts_item from "../reducers/discounts_item";
import products_reducer from "../reducers/products_reducer";
import catalog_reducer from "../reducers/catalog_reducer";
import cart_reducer from "../reducers/cart_reducer";

export const store = configureStore({
  reducer: {
    discounts: discounts_item,
    products: products_reducer,
    productsForCatalog: catalog_reducer,
    productsForCart: cart_reducer,
  },
});
export default store;
