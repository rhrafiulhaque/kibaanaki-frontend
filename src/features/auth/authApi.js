import { apiSlice } from "../api/apiSlice";

export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        userRegister: builder.mutation({
            query: (submittedData) => ({
                url: "/user/create-user",
                method: "POST",
                body: submittedData,
            }),
        }),
        userLogin: builder.mutation({
            query: (data) => ({
                url: "/user/login-user",
                method: "POST",
                body: data,
            }),
        }),

        getAdmin: (builder).query({
            query: (email) => `/admin/${email}`
        }),
        getUser: (builder).query({
            query: (email) => `/user/get-user/${email}`,
            providesTags: ["getUser"]
        }),
        updateUser: builder.mutation({
            query: (data) => ({
                url: "/user/update-user",
                method: "PATCH",
                body: data,
            }),
            invalidatesTags: ["getUser"]
        }),
        updateUserAddress: builder.mutation({
            query: (data) => ({
                url: "/user/update-user-address",
                method: "PATCH",
                body: data,
            }),
            invalidatesTags: ["getUser"]
        }),
    })
})

export const { useUserLoginMutation, useUserRegisterMutation, useGetAdminQuery, useGetUserQuery, useUpdateUserMutation, useUpdateUserAddressMutation } = authApi;