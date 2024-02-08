import { configureStore } from '@reduxjs/toolkit';
import playerReducer from './reducers/skymusic';
import { getAccessTokenApi, tracksApi } from '../services/skymusic';
import { authReducer } from './slices/authSlice';

export const store = configureStore({
  reducer: {
    AudioPlayer: playerReducer,
    auth: authReducer,
    [tracksApi.reducerPath]: tracksApi.reducer,
    [getAccessTokenApi.reducerPath]: getAccessTokenApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      tracksApi.middleware,
      getAccessTokenApi.middleware
    ),
});
