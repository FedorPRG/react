import { createSlice } from "@reduxjs/toolkit";
import productData from "../data/ProductsData";

export const products_reducer = createSlice({
  name: "products",
  initialState: {
    array: [...productData],
  },
  reducers: {
    addProduct: (state, { payload: newProduct }) => {
      if (state.array.some((item) => item.id === newProduct.id)) {
        return;
      }
      state.array.push(newProduct);
    },
    deleteProduct: (state, { payload: product }) => {
      const filteredArray = state.array.filter(
        (item) => item.id !== product.id
      );
      state.array = filteredArray;
    },
    changeAvailable: (state, { payload: product }) => {
      var searchIndex = state.array.findIndex((item) => item.id === product.id);
      state.array[searchIndex].available =
        state.array[searchIndex].available === "да" ? "нет" : "да";
    },
    editProduct: (state, { payload: editProduct }) => {
      var searchIndex = state.array.findIndex(
        (item) => item.id === editProduct.id
      );
      state.array.splice(searchIndex, 1, editProduct);
    },
  },
});

export const { addProduct, deleteProduct, changeAvailable, editProduct } =
  products_reducer.actions;

export default products_reducer.reducer;
