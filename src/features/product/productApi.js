import { apiSlice } from "../api/apiSlice";

export const productApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => '/products',
            providesTags: ["productList"]
        }),
        getProduct: builder.query({
            query: (id) => `/products/${id}`,
            providesTags: ["getProduct"]
        }),
        addProduct: builder.mutation({
            query: (data) => ({
                url: "/products/addproduct",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["productList"]
        }),
        getMonthlyAddOrder: (builder).query({
            query: () => `/order/monthlyaddproduct`
        }),
        deleteProduct: (builder).mutation({
            query: (id) => ({
                url: `/products/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['productList']
        }),
        updateProduct: builder.mutation({
            query: (data) => ({
                url: "/products/updateproduct",
                method: "PATCH",
                body: data,
            }),
            invalidatesTags: ["productList", "getProduct"]
        }),
        searchedProduct: (builder).query({
            query: (data) => `/products/search/${data}`
        }),
    })
})
export const { useGetProductQuery, useGetProductsQuery, useAddProductMutation, useSearchedProductQuery, useGetMonthlyAddOrderQuery, useDeleteProductMutation, useUpdateProductMutation } = productApi;