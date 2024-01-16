import { configureStore } from "@reduxjs/toolkit";
import playerReducer from "./reducers/skymusic";
import { tracksApi } from "../services/skymusic";

export const store = configureStore({
  reducer: {
    AudioPlayer: playerReducer,
    [tracksApi.reducerPath]:tracksApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(tracksApi.middleware),
});