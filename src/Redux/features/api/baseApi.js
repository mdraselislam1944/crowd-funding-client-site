import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const baseApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://crowdfunding-gamma.vercel.app',
        prepareHeaders: (headers, { getState }) => {
            headers.set('Content-Type', 'application/json');
            headers.set('Accept', 'application/json');
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: () => ({
                url: "/blogs",
            }),
        }),
        setPosts: builder.mutation({
            query: () => ({
                url: "/addComment",
                method: "POST",
                body: post,
            }),
        })
    }),
});
export const { useGetPostsQuery, useSetPostsMutation } = baseApi;
export default baseApi;