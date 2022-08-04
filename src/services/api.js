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
