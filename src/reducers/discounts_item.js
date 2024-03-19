import { createSlice } from "@reduxjs/toolkit";

export const discounts_item = createSlice({
  name: "discounts",
  initialState: {
    array: [
      {
        srcFront: 'img/discounts_item1-1.jpg',
        srcBack: "img/discounts_item1-2.png",
        heading: "FOR WOMEN",
        text: "30% OFF",
      },
      {
        srcFront: 'img/discounts_item2-1.jpg',
        srcBack: "img/discounts_item1-2.png",
        heading: "FOR MEN",
        text: "OT DEAL",
      },
      {
        srcFront: 'img/discounts_item3-1.jpg',
        srcBack: "img/discounts_item1-2.png",
        heading: "FOR KIDS",
        text: "NEW ARRIVALS",
      },

    ],
  },
  reducers: {

  },
});


export default discounts_item.reducer;