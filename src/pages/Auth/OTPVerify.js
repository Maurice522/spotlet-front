import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  addUser,
  saveOTP,
  selectOTP,
  selectUserData,
} from "../../redux/slices/userSlice";
import { signUp } from "../../services/api";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
export default function OTPVerify() {
  const [otp, setOTP] = useState("");
  const userData = useSelector(selectUserData);
  const verifyOtp = useSelector(selectOTP);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handlSubmit = async (e) => {
    e.preventDefault();
    try {
      if (verifyOtp != otp) {
        toast("Invalid OTP please try again!!!");
      } else {
        const response = await signUp(userData);
        toast(response.data.message);
        dispatch(addUser(null));
        dispatch(saveOTP(-1));
        return navigate("/signin");
      }
    } catch (error) {
      toast.error(error.response.data.error);
    }
  };
  return (
    <div>
      <form onSubmit={handlSubmit}>
        <label>OTP Verification</label>
        <TextField
          placeholder="Enter six digit otp number"
          onChange={(e) => setOTP(e.target.value)}
          value={otp}
          type="number"
        />
        <Button type="submit">Verify</Button>
      </form>
    </div>
  );
}
