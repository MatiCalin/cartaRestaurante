import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import products from "./products" 


const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    products: products.reducer,
  },
});

export default store;