import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
const BaseURL = "http://localhost:5000/all/";
export const apiRequest = createApi({
  reducerPath: "apiRequest",
  baseQuery: fetchBaseQuery({ baseUrl: BaseURL }),
  tagTypes: ["user", "customer"],

  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (newData) => ({
        url: "user/signup",
        method: "POST",
        body: newData,
        headers: {
          "Content-type": "application/json;charset=UTF-8",
        },
      }),
      invalidatesTags: ["user"],
    }),
    loginUser: builder.mutation({
      query: (newData) => ({
        url: "user/login",
        method: "POST",
        body: newData,
        headers: {
          "Content-type": "application/json;charset=UTF-8",
        },
      }),
      invalidatesTags: ["user"],
    }),
    updateUserProfile: builder.mutation({
      query: ({ newData, token }) => ({
        url: "user/profileupdate",
        method: "POST",
        body: newData,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json;charset=UTF-8",
        },
      }),
      invalidatesTags: ["user"],
    }),
    forgetPassword: builder.mutation({
      query: (newData) => ({
        url: "user/sendotp",
        method: "POST",
        body: newData,
        headers: {
          "Content-type": "application/json;charset=UTF-8",
        },
      }),
      invalidatesTags: ["user"],
    }),
    verifyOTP: builder.mutation({
      query: ({ email, otp }) => ({
        url: "user/verifyotp",
        method: "PUT",
        body: {
          email,
          otp,
        },
        headers: {
          "Content-type": "application/json;charset=UTF-8",
        },
      }),
      invalidatesTags: ["user"],
    }),
    recoverPassword: builder.mutation({
      query: ({ email, newPassword }) => ({
        url: "user/recoverpassword",
        method: "POST",
        body: {
          email,
          newPassword,
        },
        headers: {
          "Content-type": "application/json;charset=UTF-8",
        },
      }),
      invalidatesTags: ["user"],
    }),
    createCustomer: builder.mutation({
      query: ({ newData, token }) => ({
        url: "createcustomer",
        method: "POST",
        body: newData,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json;charset=UTF-8",
        },
      }),
      invalidatesTags: ["customer"],
    }),
    getCustomerList: builder.query({
      query: (token ) => ({
        url: "listingcustomer/1/5/0",
        method: "GET",
        // body: newData,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json;charset=UTF-8",
        },
      }),
      providesTags:["customer"]
    }),
    updateCustomer: builder.mutation({
      query: ({token,newData,_id} ) => ({
        url: `updatecustomer/${_id}`,
        method: "PUT",
        body: newData,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json;charset=UTF-8",
        },
      }),
      invalidatesTags: ["customer"],
    }),
  }),
});

export const {
  useCreateUserMutation,
  useLoginUserMutation,
  useCreateCustomerMutation,
  useGetCustomerListQuery,
  useUpdateCustomerMutation,
} = apiRequest;
