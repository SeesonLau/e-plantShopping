import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],  // [{ id, name, image, description, cost, quantity }]
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const existing = state.items.find(item => item.name === action.payload.name);
      if (!existing) {
        state.items.push({ ...action.payload, quantity: 1 });
      } else {
        existing.quantity += 1;
      }
    },

    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.name !== action.payload);
    },

    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const item = state.items.find(item => item.name === name);
      if (item) {
        if (quantity <= 0) {
          state.items = state.items.filter(i => i.name !== name);
        } else {
          item.quantity = quantity;
        }
      }
    },

    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, updateQuantity, clearCart } = cartSlice.actions;

// Selectors
export const selectCartItems = (state) => state.cart.items;
export const selectCartCount = (state) =>
  state.cart.items.reduce((sum, item) => sum + item.quantity, 0);
export const selectCartTotal = (state) =>
  state.cart.items.reduce((sum, item) => sum + item.cost * item.quantity, 0);

export default cartSlice.reducer;