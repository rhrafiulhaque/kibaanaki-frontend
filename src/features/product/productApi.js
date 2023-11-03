import { apiSlice } from "../api/apiSlice";

export const productApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => '/products',
            providesTags: ["productList"]
        }),
        getProduct: builder.query({
            query: (id) => `/products/${id}`
        }),
        addProduct: builder.mutation({
            query: (data) => ({
                url: "/products/addproduct",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["productList"]
        })
    })
})
export const { useGetProductQuery, useGetProductsQuery, useAddProductMutation } = productApi;