import { createSlice } from "@reduxjs/toolkit";

export const ProductsSlice = createSlice({
  name: "products",
  initialState: {
    array: [
      {
        id: 1,
        name: "Название1",
        description: "Описание1",
        price: "100",
        available: "да",
      },
      {
        id: 2,
        name: "Название2",
        description: "Описание2",
        price: "200",
        available: "нет",
      },
      {
        id: 3,
        name: "Название3",
        description: "Описание3",
        price: "300",
        available: "да",
      },
    ],
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
  ProductsSlice.actions;

export default ProductsSlice.reducer;
