import axios from "axios";

const API = axios.create({ baseURL: "/" });

// function to send signin request to backend
export const signIn = (form) => {
  return API.post("/signin", form);
};

// function to send signUp request to backend  and return details
export const signUp = (form) => {
  return API.post("/signup", form);
};

//otp
export const otpVerify = (form) => {
  return API.post("/activation", form);
};

//get user data by id
export const getUserData = (jwt_id) => {
  return API.get("/user/" + jwt_id);
};

//update data
export const updateUserInfo = (jwt_id, form) => {
  return API.put("/user/update/" + jwt_id, form);
};

//update password
export const updatePassword = (jwt_id, form) => {
  return API.put("/user/updatepassword/" + jwt_id, form);
};

//forgot password
export const forgotPassword = (email) => {
  return API.post("/forgot-password", email);
};

//reset password
export const resetPassword = (jwt_id, form) => {
  return API.put("/user/reset-password/" + jwt_id, form);
};

//upload pics
export const uploadPics = (formData) => {
  return API.post("/user/upload-pic", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
