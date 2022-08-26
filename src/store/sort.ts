import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { OrderKey } from "../types/OrderTypes";

interface Sort {
  value: OrderKey | null;
}

const initialState: Sort = {
  value: "artist",
};

const sortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    sort(state, action: PayloadAction<OrderKey | null>) {
      state.value = action.payload;
    },
  },
});

export const sortActions = sortSlice.actions;
export const sortReducer = sortSlice.reducer;
