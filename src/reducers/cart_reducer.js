import { createSlice } from "@reduxjs/toolkit";

export const cart_reducer = createSlice({
  name: "productsForCart",
  initialState: {
    array: [
      {
        id: "101",
        img: "/img/product-box_item1.jpg",
        img1: "/img/product-box_item1-1.jpg",
        img2: "/img/product-box_item1-2.jpg",
        img3: "/img/product-box_item1-3.jpg",
        name: "ELLERY X M'O CAPSULE",
        text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        textProduct:
          "Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals.",
        price: "52.00",
        color: "Red",
        size: "XS",
        quantity: "2",
        gender: "MEN",
      },
      {
        id: "102",
        img: "/img/product-box_item2.jpg",
        img1: "/img/product-box_item2-1.jpg",
        img2: "/img/product-box_item2-2.jpg",
        img3: "/img/product-box_item2-3.jpg",
        name: "ELLERY X M'O CAPSULE",
        text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        textProduct:
          "Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals.",
        price: "52.00",
        color: "Red",
        size: "S",
        quantity: "2",
        gender: "WOMEN",
      },
      {
        id: "103",
        img: "/img/product-box_item3.jpg",
        img1: "/img/product-box_item3-1.jpg",
        img2: "/img/product-box_item3-2.jpg",
        img3: "/img/product-box_item3-3.jpg",
        name: "ELLERY X M'O CAPSULE",
        text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        textProduct:
          "Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals.",
        price: "52.00",
        color: "Red",
        size: "M",
        quantity: "2",
        gender: "MEN",
      },
      {
        id: "104",
        img: "/img/product-box_item4.jpg",
        img1: "/img/product-box_item4-1.jpg",
        img2: "/img/product-box_item4-2.jpg",
        img3: "/img/product-box_item4-3.jpg",
        name: "ELLERY X M'O CAPSULE",
        text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        textProduct:
          "Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals.",
        price: "52.00",
        color: "Red",
        size: "L",
        quantity: "2",
        gender: "MEN",
      },
      {
        id: "105",
        img: "/img/product-box_item5.jpg",
        img1: "/img/product-box_item5-1.jpg",
        img2: "/img/product-box_item5-2.jpg",
        img3: "/img/product-box_item5-3.jpg",
        name: "ELLERY X M'O CAPSULE",
        text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        textProduct:
          "Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals.",
        price: "52.00",
        color: "Red",
        size: "XS",
        quantity: "2",
        gender: "WOMEN",
      },
      {
        id: "106",
        img: "/img/product-box_item6.jpg",
        img1: "/img/product-box_item6-1.jpg",
        img2: "/img/product-box_item6-2.jpg",
        img3: "/img/product-box_item6-3.jpg",
        name: "ELLERY X M'O CAPSULE",
        text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        textProduct:
          "Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals.",
        price: "52.00",
        color: "Red",
        size: "S",
        quantity: "2",
        gender: "WOMEN",
      },
      {
        id: "107",
        img: "/img/product-box_item7.jpg",
        img1: "/img/product-box_item7-1.jpg",
        img2: "/img/product-box_item7-2.jpg",
        img3: "/img/product-box_item7-3.jpg",
        name: "ELLERY X M'O CAPSULE",
        text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        textProduct:
          "Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals.",
        price: "52.00",
        color: "Red",
        size: "M",
        quantity: "2",
        gender: "MEN",
      },
      {
        id: "108",
        img: "/img/product-box_item8.jpg",
        img1: "/img/product-box_item8-1.jpg",
        img2: "/img/product-box_item8-2.jpg",
        img3: "/img/product-box_item8-3.jpg",
        name: "ELLERY X M'O CAPSULE",
        text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        textProduct:
          "Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals.",
        price: "52.00",
        color: "Red",
        size: "L",
        quantity: "2",
        gender: "MEN",
      },
      {
        id: "109",
        img: "/img/product-box_item9.jpg",
        img1: "/img/product-box_item9-1.jpg",
        img2: "/img/product-box_item9-2.jpg",
        img3: "/img/product-box_item9-3.jpg",
        name: "ELLERY X M'O CAPSULE",
        text: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        textProduct:
          "Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals.",
        price: "52.00",
        color: "Red",
        size: "XS",
        quantity: "2",
        gender: "MEN",
      },
    ],
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
