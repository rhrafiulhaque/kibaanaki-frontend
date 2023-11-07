import { apiSlice } from "../api/apiSlice";

export const categoryApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        addCategory: builder.mutation({
            query: (data) => ({
                url: "/category/admin/addcategory",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ['categoryList']
        }),
        getCategoryList: (builder).query({
            query: () => `/category/`,
            providesTags: ['categoryList']
        }),
        deleteCategory: (builder).mutation({
            query: (id) => ({
                url: `/category/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['categoryList']
        }),

    })
})
export const { useAddCategoryMutation, useGetCategoryListQuery, useDeleteCategoryMutation } = categoryApi;