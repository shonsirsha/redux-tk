import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserDetailObj } from "../types";
const initialState: UserDetailObj = {
  userDetail: {
    name: "",
    email: "",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    saveUserDetail: (state, action: PayloadAction<UserDetailObj>) => {
      state.userDetail = action.payload.userDetail;
    },
  },
});

export const { saveUserDetail } = userSlice.actions;

export default userSlice.reducer;
