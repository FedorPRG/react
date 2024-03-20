import { createSlice } from "@reduxjs/toolkit";
import productData from "../data/ProductsData";

export const catalog_reducer = createSlice({
  name: "productsForCatalog",
  initialState: {
    array: [...productData],
    arrayFilter: [],
    sized: [],
  },
  reducers: {
    openCatalog: (state) => {
      state.arrayFilter = state.array;
    },
    filtrCatalog: (state, { payload: data }) => {
      if (data.e) {
        state.sized = [...state.sized, data.size];
      } else {
        state.sized = state.sized.filter((item) => item !== data.size);
      }
      if (state.sized.length === 0) {
        state.arrayFilter = state.array;
      } else {
        let total = [];
        for (const size of state.sized) {
          const filteredArray = state.array.filter((item) =>
            (item.size === size)
          );
          total = [...total, ...filteredArray];
        }
        state.arrayFilter = [...total];
      }
    },
  },
});

export const { openCatalog, filtrCatalog } = catalog_reducer.actions;

export default catalog_reducer.reducer;
