import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AlbumData } from "../types/AlbumData";

interface FavoriteAlbumList {
  values: AlbumData[];
}

const initialState: FavoriteAlbumList = {
  values: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    selectFavorite(state, action: PayloadAction<AlbumData>) {
      const index = state.values.findIndex(
        (album) => album.id === action.payload.id
      );
      if (index >= 0) {
        state.values.splice(index, 1);
      } else {
        state.values.push(action.payload);
      }
    },
  },
});

export const favoritesActions = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
