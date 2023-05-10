import { apiSlice } from "../api/apiSlice";

export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        userRegister: builder.mutation({
            query: (data) => ({
                url: "/register",
                method: "POST",
                body: data,
            }),
        }),
        userLogin: builder.mutation({
            query: (data) => ({
                url: "/login",
                method: "POST",
                body: data,
            }),
        }),
        getAdmin:(builder).query({
            query:(email)=>`/admin/${email}`
        })
    })
})

export const {useUserLoginMutation,useUserRegisterMutation,useGetAdminQuery} = authApi;