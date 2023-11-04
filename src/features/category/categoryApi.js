import { apiSlice } from "../api/apiSlice";

export const categoryApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        addCategory: builder.mutation({
            query: (data) => ({
                url: "/category/admin/addcategory",
                method: "POST",
                body: data,
            }),
        }),
        getCategoryList: (builder).query({
            query: () => `/category/`
        }),

    })
})
export const { useAddCategoryMutation, useGetCategoryListQuery } = categoryApi;