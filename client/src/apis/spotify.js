import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const spotifyApi = createApi({
	reducerPath: 'spotifyApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
	endpoints: (builder) => ({
		getSpotifyTest: builder.query({
			query: () => `api/spotify/test`,
		}),
	}),
});

export const { useGetSpotifyTestQuery } = spotifyApi;
