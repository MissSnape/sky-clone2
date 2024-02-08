import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setAuth } from '../store/slices/authSlice';
const DATA_TAG = { type: 'Tracks', id: 'LIST' };
//Добавили структуру для рефреша токена
const baseQueryWithReauth = async (args, api, extraOptions) => {
  const baseQuery = fetchBaseQuery({
    baseUrl: 'https://skypro-music-api.skyeng.tech',

    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.access;
      console.debug('Использую токен из стора', { token });
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  });

  const result = await baseQuery(args, api, extraOptions);
  console.debug('Результат первого запроса', { result });

  if (result?.error?.status !== 401) {
    return result;
  }

  const forceLogout = () => {
    console.debug('Принудительная авторизация!');
    api.dispatch(setAuth(null));
    window.location.navigate('/login');
  };

  const { auth } = api.getState();
  console.debug('Данные пользователя в сторе', { auth });
  if (!auth.refresh) {
    return forceLogout();
  }

  const refreshResult = await baseQuery(
    {
      url: '/user/token/refresh/',
      method: 'POST',
      body: {
        refresh: auth.refresh,
      },
    },
    api,
    extraOptions
  );

  console.debug('Результат запроса на обновление токена', { refreshResult });

  if (!refreshResult.data.access) {
    return forceLogout();
  }

  api.dispatch(setAuth({ ...auth, access: refreshResult.data.access }));

  const retryResult = await baseQuery(args, api, extraOptions);

  if (retryResult?.error?.status === 401) {
    return forceLogout();
  }

  console.debug('Повторный запрос завершился успешно');

  return retryResult;
};
//добавили api для реализации запроса получения токена
export const getAccessTokenApi = createApi({
  reducerPath: 'tokenApi',
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    getAccessToken: builder.mutation({
      query: ({ email, password }) => ({
        url: `/user/token/`,
        method: 'POST',
        body: JSON.stringify({
          email: email,
          password: password,
        }),
        headers: {
          'content-type': 'application/json',
        },
      }),
      invalidatesTags: [DATA_TAG],
    }),
  }),
});

export const tracksApi = createApi({
  reducerPath: 'tracksApi',
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    getTracks: builder.query({
      query: () => ({
        url: '/catalog/track/all/',
      }),
      providesTags: () => [DATA_TAG],
    }),
    getFavoritesTracks: builder.query({
      query: () => ({
        url: '/catalog/track/favorite/all/',
      }),
      providesTags: () => [DATA_TAG],
    }),
    getTrackById: builder.query({
      query: ({ id }) => ({ url: `/catalog/track/${id}` }),
      providesTags: () => [DATA_TAG],
    }),
    addLike: builder.mutation({
      query: (id) => ({
        url: `/catalog/track/${id}/favorite/`,
        method: 'POST',
      }),
      invalidatesTags: [DATA_TAG],
    }),
    removeLike: builder.mutation({
      query: (id) => ({
        url: `/catalog/track/${id}/favorite/`,
        method: 'DELETE',
      }),
      invalidatesTags: [DATA_TAG],
    }),
    getSelectionCategory: builder.query({
      query: ({ id }) => ({
        url: `/catalog/selection/${id}`,
      }),
      providesTags: [DATA_TAG],
    }),
  }),
});

export const {
  useGetFavoritesTracksQuery,
  useGetTracksQuery,
  useAddLikeMutation,
  useRemoveLikeMutation,
  useGetTrackByIdQuery,
  useGetSelectionCategoryQuery,
} = tracksApi;
