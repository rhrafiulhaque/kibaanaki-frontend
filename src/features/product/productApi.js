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
        getTopProductSold: (builder).query({
            query: () => `/products/gettopproductsold`
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
            query: ({ searchKeyword, categoryFilter, brandFilter }) => {
                const categoriesString = categoryFilter.join(',');
                const brandsString = brandFilter.join(',');
                return `/products/search?searchKeyword=${searchKeyword}&category=${categoriesString}&brand=${brandsString}`;
            },
        }),

    })
})
export const { useGetProductQuery, useGetProductsQuery, useAddProductMutation, useSearchedProductQuery, useGetTopProductSoldQuery, useGetMonthlyAddOrderQuery, useDeleteProductMutation, useUpdateProductMutation } = productApi;