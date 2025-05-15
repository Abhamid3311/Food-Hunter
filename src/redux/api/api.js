import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1",
  }),
  tagTypes: ["product", "user"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: "/products/",
        method: "GET",
      }),
      providesTags: ["product"],
    }),

    // Get Single Product
    getProductsById: builder.query({
      query: (id) => `/products/${id}`,
    }),

    createUserOnDB: builder.mutation({
      query: (user) => ({
        url: "/users/create-user",
        method: "POST",
        body: user,
        credentials: "include",
      }),
      invalidatesTags: ["user"], //Remove Chache for refetch data
    }),

    getAllUsers: builder.query({
      query: () => ({
        url: "/users/",
        method: "GET",
      }),
      providesTags: ["user"],
    }),

    getUserById: builder.query({
      query: (id) => `/users/${id}`,
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductsByIdQuery,
  useCreateUserOnDBMutation,
  useGetAllUsersQuery,
  useGetUserByIdQuery
} = productsApi;
