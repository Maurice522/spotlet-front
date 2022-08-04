import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: null,
  otp: 0,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.userData = action.payload;
    },
    saveOTP: (state, action) => {
      state.otp = action.payload;
    },
    logout: (state, action) => {
      state.userData = null;
    },
  },
});

export const { addUser, saveOTP, logout } = userSlice.actions;
export const selectUserData = (state) => state.user.userData;
export const selectOTP = (state) => state.user.otp;
export default userSlice.reducer;
