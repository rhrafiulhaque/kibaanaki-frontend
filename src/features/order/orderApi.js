import { apiSlice } from "../api/apiSlice";

export const orderApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        addOrder: builder.mutation({
            query: (data) => ({
                url: "/order/addorder",
                method: "POST",
                body: data,
            }),
        }),
        getOrderList: (builder).query({
            query: (email) => `/order/getorderlist/${email}`
        }),
        adminGetOrderList: (builder).query({
            query: () => `/order/admin/getorderlist`,
            providesTags: ['adminGetOrderList']
        }),
        getOrderDetails: (builder).query({
            query: ({ id, email }) => `/order/getorderdetails?id=${id}&email=${email}`
        }),
        updateDeliveryStatus: builder.mutation({
            query: (data) => ({
                url: "/order/updatedeliverystatus",
                method: "PATCH",
                body: data,
            }),
            invalidatesTags: ["adminGetOrderList"]
        }),
    })
})
export const { useAddOrderMutation, useGetOrderListQuery, useGetOrderDetailsQuery, useAdminGetOrderListQuery, useUpdateDeliveryStatusMutation } = orderApi;