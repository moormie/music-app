import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Search {
  value: string;
}

const initialState: Search = {
  value: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    search(state, action: PayloadAction<string>) {
      state.value = action.payload;
    },
  },
});

export const searchActions = searchSlice.actions;
export const searchReducer = searchSlice.reducer;
