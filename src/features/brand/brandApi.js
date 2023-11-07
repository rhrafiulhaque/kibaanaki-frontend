import { apiSlice } from "../api/apiSlice";

export const brandApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        addBrand: builder.mutation({
            query: (data) => ({
                url: "/brand/admin/addbrand",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ['brandList']
        }),
        getBrandList: (builder).query({
            query: () => `/brand/`,
            providesTags: ['brandList']
        }),
        deleteBrand: (builder).mutation({
            query: (id) => ({
                url: `/brand/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['brandList']
        }),

    })
})
export const { useAddBrandMutation, useDeleteBrandMutation, useGetBrandListQuery } = brandApi;