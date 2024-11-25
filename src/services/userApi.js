import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi", // Identifier for the API
  baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com" }),
  endpoints: (builder) => ({
    fetchUsers: builder.query({
      query: () => "/users",  //api endpoint
    }),
  }),
});

export const { useFetchUsersQuery } = userApi; // Hook for fetching users
