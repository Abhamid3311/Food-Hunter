// import { api } from "./api";

// const productEndpoints = api.injectEndpoints({
//   endpoints: (builder) => ({
//     getProducts: builder.query({
//       query: (params) => {
//         const searchParams = new URLSearchParams(params).toString();
//         return {
//           url: `/products${searchParams ? `?${searchParams}` : ""}`,
//           method: "GET",
//         };
//       },
//       providesTags: ["product"],
//     }),

//     // Get Single Product
//     getProductsById: builder.query({
//       query: (id) => `/products/${id}`,
//     }),
//   }),
// });

// export const { useGetProductsQuery, useGetProductsByIdQuery } =
//   productEndpoints;
