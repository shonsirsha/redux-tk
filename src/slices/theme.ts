import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Theme } from "../types";
const initialState: Theme = {
  darkTheme: false,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.darkTheme = action.payload.darkTheme; // if false, then theme isn't dark.
    },
  },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
