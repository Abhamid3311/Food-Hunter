import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import.meta.env.VITE_BASE_URL
export const api = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BASE_URL}/api/v1`,
  }),
  tagTypes: ["product", "user", "Cart", "order"],
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
        credentials: "include",
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

    removeCartItem: builder.mutation({
      query: (productId) => ({
        url: `/users/remove-cart-item/${productId}`,
        method: "DELETE",
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

    createOrder: builder.mutation({
      query: (body) => ({
        url: "/orders/create-order",
        method: "POST",
        body,
        credentials: "include",
      }),
      invalidatesTags: ["order", "Cart"],
    }),

    getOrdersByUser: builder.query({
      query: () => ({
        url: "/orders/my-orders",
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["order"],
    }),

    getAllOrdersByAdmin: builder.query({
      query: () => ({
        url: "/orders/all-orders",
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["order"],
    }),

    cancelOrderByUser: builder.mutation({
      query: (orderId) => ({
        url: `/orders/my-orders/${orderId}`,
        method: "PATCH",
        credentials: "include",
      }),
      invalidatesTags: ["order"],
    }),

    getSingelOrderById: builder.query({
      query: (id) => ({
        url: `/orders/my-orders/${id}`,
        method: "GET",
        credentials: "include",
      }),
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
  useRemoveCartItemMutation,

  useCreateOrderMutation,
  useGetOrdersByUserQuery,
  useGetAllOrdersByAdminQuery,
  useCancelOrderByUserMutation,
  useGetSingelOrderByIdQuery,
} = api;
