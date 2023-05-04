import { apiSlice } from "../api/apiSlice";

export const productApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => '/products'
        }),
        getProduct: builder.query({
            query: (id) => `/product/${id}`
        }),
    })
})
export const {useGetProductQuery,useGetProductsQuery}=productApi;