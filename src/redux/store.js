import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/products/productsSlice";
import authReducer from "./features/auth/authSlice";
import { api } from "./api/api";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    products: productReducer,
    auth: authReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
