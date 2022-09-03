import axios from "axios";

// const server_domain = "https://gorecce-backend.herokuapp.com";
const server_domain = "http://localhost:8000";

////////////////////////Auth////////////////////////
// function to send signin request to backend
export const signIn = (form) => {
  return axios.post(server_domain + "/signin", form);
};

// function to send signUp request to backend  and return details
export const signUp = (form) => {
  return axios.post(server_domain + "/signup", form);
};

//otp
export const otpVerify = (form) => {
  return axios.post(server_domain + "/activation", form);
};

//get user data by id
export const getUserData = (jwt_id) => {
  return axios.get(server_domain + "/user/" + jwt_id);
};

//update data
export const updateUserInfo = (jwt_id, form) => {
  return axios.put(server_domain + "/user/update/" + jwt_id, form);
};

//update password
export const updatePassword = (jwt_id, form) => {
  return axios.put(server_domain + "/user/updatepassword/" + jwt_id, form);
};

//forgot password
export const forgotPassword = (email) => {
  return axios.post(server_domain + "/forgot-password", email);
};

//reset password
export const resetPassword = (jwt_id, form) => {
  return axios.put(server_domain + "/user/reset-password/" + jwt_id, form);
};

//upload pics
export const uploadPics = (formData) => {
  return axios.post(server_domain + "/user/upload-pic", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

//delete request
export const deleteRequest = (user_id) => {
  return axios.post(server_domain + "/delreq/" + user_id);
};

//////////Messages ///////////////////////
//get contact list of a user
export const contactList = (user_id) => {
  return axios.get(server_domain + `/conversation/${user_id}`);
};

//send message
export const sendMessage = (form) => {
  return axios.post(server_domain + "/message", form);
};

//message room
export const messsageRoom = (conversation_id) => {
  return axios.get(server_domain + `/messages/${conversation_id}`);
};
