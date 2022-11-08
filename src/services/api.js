import axios from "axios";

// const server_domain = "https://gorecceback.herokuapp.com";
// const server_domain = "https://nipunbacky.herokuapp.com"; //TEMP HOSTED SERVER
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

//update personal_info data
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
//create a converstion
export const createConversation = (bookingId, form) => {
  return axios.post(server_domain + `/createconversation/${bookingId}`, form);
}

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

//temp location
export const createTempLocation = (form) => {
  return axios.post(server_domain + "/templocation", form);
};

//create location
export const createLocation = (form) => {
  return axios.post(server_domain + "/createlocation", form);
};

//upload location pics
export const uploadLocationPics = (formData) => {
  return axios.post(server_domain + "/uploadlocpic", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

//upload gst docs
export const uploadGstDocs = (formData) => {
  return axios.post(server_domain + "/uploadgst", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

//delete files from storage
export const deleteFiles = (form) => {
  return axios.delete(server_domain + `/deletefile`, {data : form});
}

//get all locations
export const getAllLocations = () => {
  return axios.get(server_domain + "/getlocations");
};

//get location
export const getLocation = (locId) => {
  return axios.get(server_domain + "/getlocation/" + locId);
}

//bookings
export const bookingRequest = (form) => {
  return axios.post(server_domain + "/bookingreq", form);
}

//get booking detail
export const getBookingDetail = (bookingId, form) => {
  return axios.put(server_domain + `/getbookingdetail/${bookingId}`, form)
}

//get total requests
export const locationRequest = (locId) => {
  return axios.get(server_domain + "/totrequest/"+locId);
}

//update booking sttaus
export const updateBookingStatus = (form) => {
  return axios.put(server_domain + "/updatepaymentstatus", form);
}

//delete booking request
export const deleteBookingReq = (form) => {
  return axios.delete(server_domain + "/deletebookingrequest", {data : form});
}

//help center
export const contactUs = (form) => {
  return axios.post(server_domain + "/contactus", form);
};

export const getBlog = (blogid) => {
  return axios.get(server_domain + "/getblog/"+blogid);
}

//update location info
export const locationUpdate = (data) => {
  return axios.post(server_domain + "/updatelocation/", data);
}

//update user data
export const userUpdate = (data) => {
  return axios.post(server_domain + "/updateuser/", data);
}

//get temp location
export const getTempLocation = (location_id) => {
  return axios.get(server_domain + "/templocation/" + location_id);
}