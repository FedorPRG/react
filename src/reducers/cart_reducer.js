import { createSlice } from "@reduxjs/toolkit";
import productData from "../data/ProductsData";

export const cart_reducer = createSlice({
  name: "productsForCart",
  initialState: {
    array: [...productData],
    arrayCart: [],
  },
  reducers: {
    addInCart: (state, { payload: product }) => {
      const prod = state.array.filter((item) => item.id === product.id);
      if (state.arrayCart.length === 0) {
        state.arrayCart = [...prod];
        return;
      }
      if (state.arrayCart.some((item) => item.id === product.id)) {
        return;
      }
      state.arrayCart = [
        ...state.arrayCart,
        ...state.array.filter((item) => item.id === product.id),
      ];
    },
    deletCardInCart: (state, { payload: product }) => {
      const filteredArray = state.arrayCart.filter(
        (item) => item.id !== product.id
      );
      state.arrayCart = filteredArray;
    },
    deletAllCardsInCart: (state) => {
      state.arrayCart = [];
    },
  },
});

export const { addInCart, deletCardInCart, deletAllCardsInCart } =
  cart_reducer.actions;

export default cart_reducer.reducer;
