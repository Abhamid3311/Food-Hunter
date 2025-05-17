import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/products/productsSlice";
import authReducer from "./features/auth/authSlice";
import { productsApi } from "./api/api";

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    products: productReducer,
    auth: authReducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});
