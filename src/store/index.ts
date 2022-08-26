import { configureStore } from "@reduxjs/toolkit";
import { searchReducer } from "./search";
import { sortReducer } from "./sort";

export const store = configureStore({
  reducer: {
    search: searchReducer,
    sort: sortReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
