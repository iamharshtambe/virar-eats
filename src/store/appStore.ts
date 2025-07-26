import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice.ts";

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof appStore.getState>;

export default appStore;
