import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: null,
  user_id: null,
  otp: 0,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.userData = action.payload.data;
      state.user_id = action.payload.user_jwt._id;
    },
    updateUser: (state, action) => {
      state.userData = { ...state.userData, personalInfo: action.payload };
    },
    saveOTP: (state, action) => {
      state.otp = action.payload;
    },
    logout: (state, action) => {
      state.userData = null;
    },
  },
});

export const { addUser, updateUser, saveOTP, logout } = userSlice.actions;
export const selectUserData = (state) => state.user.userData;
export const selectUser_id = (state) => state.user.user_id;
export const selectOTP = (state) => state.user.otp;
export default userSlice.reducer;
