import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

type Item = {
  card: {
    info: {
      id: string;
      name: string;
      description?: string;
      defaultPrice?: number;
      price?: number;
      imageId: string;
    };
  };
};

type CartState = {
  items: Item[];
};

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Item>) => {
      state.items.push(action.payload);
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
