import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1",
  }),
  tagTypes: ["product", "user", "Cart"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (params) => {
        const searchParams = new URLSearchParams(params).toString();
        return {
          url: `/products${searchParams ? `?${searchParams}` : ""}`,
          method: "GET",
        };
      },
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
      credentials: "include",
    }),

    addToCart: builder.mutation({
      query: (body) => ({
        url: "/users/add-to-cart",
        method: "POST",
        body,
        credentials: "include",
      }),
      invalidatesTags: ["Cart"],
    }),

    getCartItems: builder.query({
      query: () => ({
        url: "/users/get-cart-Items",
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["Cart"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductsByIdQuery,
  useCreateUserOnDBMutation,
  useGetAllUsersQuery,
  useGetUserByIdQuery,
  useAddToCartMutation,
  useGetCartItemsQuery,
} = productsApi;
