/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Item } from '@/interfaces';

interface Cart extends Item {
  quantity: number;
}

export type InitialState = {
  cart?: Array<Cart>;
};

const initialState: InitialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Array<Cart>>) {
      if (state.cart) {
        state.cart = action.payload;
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
