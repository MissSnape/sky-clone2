import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const DATA_TAG = { type: 'Tracks', id: 'LIST' };
export const tracksApi = createApi({
  reducerPath: 'tracksApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://skypro-music-api.skyeng.tech/catalog',
  }),
  endpoints: (builder) => ({
    getTracks: builder.query({
      query: () => ({
        url: '/track/all/',
      }),
      providesTags: () => [DATA_TAG],
    }),
    getFavoritesTracks: builder.query({
      query: () => ({
        url: '/track/favorite/all/',
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem('accessToken'),
          )}`,
        },
      }),
      providesTags: () => [DATA_TAG],
    }),
    addLike: builder.mutation({
      query: (id) => ({
        url: `/track/${id}/favorite/`,
        method: 'POST',
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem('accessToken'),
          )}`,
        },
      }),
      invalidatesTags: [DATA_TAG],
    }),
    removeLike: builder.mutation({
      query: (id) => ({
        url: `/track/${id}/favorite/`,
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem('accessToken'),
          )}`,
        },
      }),
      invalidatesTags: [DATA_TAG],
    }),
  }),
});

export const {
  useGetFavoritesTracksQuery,
  useGetTracksQuery,
  useAddLikeMutation,
  useRemoveLikeMutation,
} = tracksApi;
