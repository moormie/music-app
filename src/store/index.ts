import { configureStore } from "@reduxjs/toolkit";
import { favoritesReducer } from "./favorites";
import { searchReducer } from "./search";
import { sortReducer } from "./sort";

export const store = configureStore({
  reducer: {
    search: searchReducer,
    sort: sortReducer,
    favorites: favoritesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
