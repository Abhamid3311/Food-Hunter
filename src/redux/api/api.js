import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import.meta.env.VITE_BASE_URL
export const api = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BASE_URL}/api/v1`,
  }),

  tagTypes: ["product", "user", "Cart", "order"],

  endpoints: (builder) => ({
    // Products
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

    getProductsById: builder.query({
      query: (id) => `/products/${id}`,
    }),

    createProductOnDB: builder.mutation({
      query: (product) => ({
        url: "/products/create-product",
        method: "POST",
        body: product,
        credentials: "include",
      }),
      invalidatesTags: ["product"],
    }),

    updateProductOnDB: builder.mutation({
      query: ({ product, productID }) => ({
        url: `/products/update/${productID}`,
        method: "PUT",
        body: product,
        credentials: "include",
      }),
      invalidatesTags: ["product"],
    }),

    //User
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
      query: (id) => ({
        url: `/users/${id}`,
        credentials: "include",
      }),
      providesTags: ["user"],
    }),

    getUserByIdByAdmin: builder.query({
      query: (id) => ({
        url: `/users/admin/${id}`,
        credentials: "include",
      }),
      providesTags: ["user"],
    }),

    updateMyProfile: builder.mutation({
      query: ({ userId, userData }) => ({
        url: `/users/update/${userId}`,
        method: "PUT",
        body: userData,
        credentials: "include",
      }),
      invalidatesTags: ["user"],
    }),

    // Cart
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

    //Order
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

    updateStatusByAdmin: builder.mutation({
      query: ({ orderId, status }) => ({
        url: `/orders/singel-orders/admin/${orderId}`,
        method: "PATCH",
        body: { status },
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

    getSingelOrderByAdminId: builder.query({
      query: (id) => ({
        url: `/orders/admin/singel-orders/${id}`,
        method: "GET",
        credentials: "include",
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductsByIdQuery,
  useCreateProductOnDBMutation,
  useUpdateProductOnDBMutation,

  useCreateUserOnDBMutation,
  useGetAllUsersQuery,
  useGetUserByIdQuery,
  useGetUserByIdByAdminQuery,
  useUpdateMyProfileMutation,

  useAddToCartMutation,
  useGetCartItemsQuery,
  useRemoveCartItemMutation,

  useCreateOrderMutation,
  useGetOrdersByUserQuery,
  useGetAllOrdersByAdminQuery,
  useCancelOrderByUserMutation,
  useGetSingelOrderByIdQuery,
  useGetSingelOrderByAdminIdQuery,
  useUpdateStatusByAdminMutation,
} = api;
