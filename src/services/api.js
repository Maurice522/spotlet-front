import axios from "axios";

const server_domain = "https://gorecce-backend.herokuapp.com";

// function to send signin request to backend
export const signIn = (form) => {
  return API.post(server_domain + "/signin", form);
};

// function to send signUp request to backend  and return details
export const signUp = (form) => {
  return API.post(server_domain + "/signup", form);
};

//otp
export const otpVerify = (form) => {
  return API.post(server_domain + "/activation", form);
};

//get user data by id
export const getUserData = (jwt_id) => {
  return API.get(server_domain + "/user/" + jwt_id);
};

//update data
export const updateUserInfo = (jwt_id, form) => {
  return API.put(server_domain + "/user/update/" + jwt_id, form);
};

//update password
export const updatePassword = (jwt_id, form) => {
  return API.put(server_domain + "/user/updatepassword/" + jwt_id, form);
};

//forgot password
export const forgotPassword = (email) => {
  return API.post(server_domain + "/forgot-password", email);
};

//reset password
export const resetPassword = (jwt_id, form) => {
  return API.put(server_domain + "/user/reset-password/" + jwt_id, form);
};

//upload pics
export const uploadPics = (formData) => {
  return API.post(server_domain + "/user/upload-pic", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
