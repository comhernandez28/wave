import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
	reducerPath: 'userApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
	endpoints: (builder) => ({
		getCurrentUser: builder.query({
			query: () => `api/users/self`,
		}),
	}),
});

export const { useGetCurrentUserQuery } = userApi;

//check this: https://redux-toolkit.js.org/tutorials/rtk-query
