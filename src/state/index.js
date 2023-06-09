import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCartOpen: false,
  cart: [],
  item: [],
};

export const cartSlicer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setItem: (state, action) => {
      state.item = action.payload;
    },
    addToCart: (state, action) => {
      state.cart = [...state, action.payload.item];
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
    increaseCount: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          item.count++;
        }
        return item;
      });
    },
    decreaseCount: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload.id && item.count > 1) {
          item.count--;
        }
        return item;
      });
    },

    setIsCartOpen: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
  },
});

export const {
  setItem,
  addToCart,
  removeFromCart,
  increaseCount,
  decreaseCount,
  setIsCartOpen,
} = cartSlicer.actions;

export default cartSlicer.reducer;
