import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/userSlice";
import locationReducer from "../slices/locationSlice";
export default configureStore({
  reducer: {
    user: userReducer,
    location : locationReducer
  },
});
