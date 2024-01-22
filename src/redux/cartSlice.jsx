import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItemToCart: (state, action) => {
      const existingItem = state.find((item) => item.id === action.payload.id);

      if (existingItem) {
        existingItem.count += 1;
      } else {
        state.push({ ...action.payload, count: 1 });
      }
    },
    removeItemFromCart: (state, action) => {
      const indexToRemove = state.findIndex(
        (item) => item.id === action.payload.id
      );

      if (indexToRemove !== -1) {
        state.splice(indexToRemove, 1);
      }
    },
    incrementItem: (state, action) => {
      const itemToIncrement = state.find(
        (item) => item.id === action.payload.id
      );

      if (itemToIncrement) {
        itemToIncrement.count += 1;
      }
    },
    decrementItem: (state, action) => {
      const itemToDecrement = state.find(
        (item) => item.id === action.payload.id
      );

      if (itemToDecrement) {
        if (itemToDecrement.count > 1) {
          itemToDecrement.count -= 1;
        } else {
          return state.filter((item) => item.id !== action.payload.id); // Create a new array reference
        }
      }
      return state;
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  incrementItem,
  decrementItem,
} = cartSlice.actions;
export default cartSlice.reducer;
