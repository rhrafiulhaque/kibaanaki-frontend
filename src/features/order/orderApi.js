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
        getOrderDetails: (builder).query({
            query: ({ id, email }) => `/order/getorderdetails?id=${id}&email=${email}`
        }),
    })
})
export const { useAddOrderMutation, useGetOrderListQuery, useGetOrderDetailsQuery } = orderApi;