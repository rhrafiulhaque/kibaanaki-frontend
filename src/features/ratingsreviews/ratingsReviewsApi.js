import { apiSlice } from "../api/apiSlice";

export const ratingsReviewsApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

        addReview: builder.mutation({
            query: (data) => ({
                url: "/review/addreview",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ['productList']
        }),
        getMonthlyAddOrder: (builder).query({
            query: () => `/order/monthlyaddproduct`
        }),

        getReviewsByUserId: (builder).query({
            query: ({ userId, email }) => `/review/user/${userId}/${email}`,
            providesTags: ['getReviewListByUser']
        }),
        getAllReviews: (builder).query({
            query: () => `/review/getallreview`,
            providesTags: ["getAllReviews"]
        }),
        getReviewByUserIdAndReviewId: (builder).query({
            query: ({ userId, email, revId }) => `/review/getreviewidwithuserid/${userId}/${email}/${revId}`,
            providesTags: ['getReviewListByUserIdandReviewID']
        }),
        deleteReviewsByUserId: (builder).mutation({
            query: ({ userId, email, _id }) => ({
                url: `/review/deletereview/${userId}/${email}/${_id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['getReviewListByUser', "getAllReviews"]
        }),
        updateReview: builder.mutation({
            query: (data) => ({
                url: "/review/reviewupdate",
                method: "PATCH",
                body: data,
            }),
            providesTags: ["updateReview"],
            invalidatesTags: ["getReviewListByUser", "updateReview", "getReviewListByUserIdandReviewID"]
        }),


    })
})
export const { useAddReviewMutation, useGetReviewsByUserIdQuery, useUpdateReviewMutation, useGetAllReviewsQuery, useDeleteReviewsByUserIdMutation, useGetReviewByUserIdAndReviewIdQuery } = ratingsReviewsApi;