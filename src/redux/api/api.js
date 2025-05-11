import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1/products",
  }),
  tagTypes: ["product"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: "/",
        method: "GET",
      }),
      providesTags: ["product"],
    }),

    // Get Single Product
    getProductsById: builder.query({
      query: (id) => `/${id}`,
    }),

    
  }),
});

export const { useGetProductsQuery, useGetProductsByIdQuery } = productsApi;
