import { apiSlice } from "../api/apiSlice";

export const productApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => '/products'
        }),
        getProduct: builder.query({
            query: (id) => `/product/${id}`
        }),
        addProduct: builder.mutation({
            query: (data) => ({
                url: "/addproduct",
                method: "POST",
                body: data,
            }),
        })
    })
})
export const { useGetProductQuery, useGetProductsQuery,useAddProductMutation } = productApi;