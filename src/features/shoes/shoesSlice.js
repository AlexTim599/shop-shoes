import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  shoes: [
    {
      id: 1,
      title: "Кроссовки Air Max Dawn",
      price: 4556,
      image: "./img/shoes/1.jpg",
    },
    {
      id: 2,
      title: "Кроссовки Air Max",
      price: 2341,
      image: "./img/shoes/2.jpg",
    },
    {id: 3, title: "Кроссовки  Dawn", price: 6543, image: "./img/shoes/4.jpg"},
    {id: 4, title: "Кроссовки Nike", price: 3434, image: "./img/shoes/5.jpg"},
    {
      id: 5,
      title: "Кроссовки Nike Air",
      price: 2777,
      image: "./img/shoes/6.jpg",
    },
    {id: 6, title: "Кроссовки Adidas", price: 3666, image: "./img/shoes/7.jpg"},
    {
      id: 7,
      title: "Кроссовки Air Max Dawn",
      price: 1555,
      image: "./img/shoes/8.jpg",
    },
  ],

  cardAside: [],
  searchResult: [],
  favorits: [],
  orders: [],
  searchValue: "",
  clickPlus: false,
  asidePanel: false,
  favoritsIsOpen: false,
  ordersIsOpen: false,
};

const shoesSlice = createSlice({
  name: "arrShoes",
  initialState,

  reducers: {
    setShoes: (state, action) => {
      return {
        ...state,
        shoes: action.payload,
      };
    },

    addAside: (state, action) => {
      state.cardAside.push(action.payload);
    },

    openAside: (state) => {
      return {
        ...state,
        asidePanel: true,
      };
    },

    closeAside: (state) => {
      return {
        ...state,
        asidePanel: false,
      };
    },

    removeShoes: (state, action) => {
      return {
        ...state,
        cardAside: [...state.cardAside.filter((i) => i.id !== action.payload)],
      };
    },

    searhSoes: (state, action) => {
      return {
        ...state,
        searchResult: action.payload.filtredShoes,
        searchValue: action.payload.searchValue,
      };
    },

    addFavorits: (state, action) => {
      state.favorits.push(action.payload);
    },

    openFavorits: (state) => {
      return {
        ...state,
        favoritsIsOpen: true,
      };
    },
    removeFavoritsShoes: (state, action) => {
      return {
        ...state,
        favorits: [...state.favorits.filter((i) => i.id !== action.payload)],
      };
    },
    openOrders: (state) => {
      return {
        ...state,
        ordersIsOpen: true,
      };
    },
    addOrders: (state, action) => {
      state.orders.push(action.payload);
    },
  },
});

export const {
  setShoes,
  addAside,
  openAside,
  closeAside,
  removeShoes,
  searhSoes,
  addFavorits,
  openFavorits,
  removeFavoritsShoes,
  openOrders,
  addOrders,
} = shoesSlice.actions;
export default shoesSlice.reducer;
