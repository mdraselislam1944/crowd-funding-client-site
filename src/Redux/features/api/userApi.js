// BaseApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const userApi = createApi({
  baseQuery: fetchBaseQuery({
    reducerPath: "api",
    baseUrl: 'http://localhost:4000/api',
    prepareHeaders: (headers, { getState }) => {
      headers.set('Content-Type', 'application/json');
      headers.set('Accept', 'application/json');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => ({
        url: "/users"
      }),
    }),
    setUsers: builder.mutation({
      query: (post) => ({ // Ensure 'post' is a parameter here
        url: "/users",
        method: "POST",
        body: post,
      })
    }),
  }),
});

export const { useGetUsersQuery,useSetUsersMutation} = userApi;
export default userApi;
