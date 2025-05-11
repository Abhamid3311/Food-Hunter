import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/products/productsSlice";
import { productsApi } from "./api/api";

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    products: productReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});
