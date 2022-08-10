import { Button, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  addUser,
  saveOTP,
  selectOTP,
  selectUserData,
} from "../../redux/slices/userSlice";
import { signUp } from "../../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { VpnKeyOutlined } from "@mui/icons-material";
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
        const { data: jwt } = await signUp(userData);
        localStorage.setItem("token", jwt);
        toast("User Created");
        dispatch(saveOTP(-1));
        window.location = "/";
      }
    } catch (error) {
      toast.error(error.response.data.error);
    }
  };
  return (
    <div className="otp-verify">
      <form onSubmit={handlSubmit} className="otp-form">
        <h1>Email Verification</h1>
        <label>OTP</label>
        <TextField
          placeholder="Enter six digit otp number"
          onChange={(e) => setOTP(e.target.value)}
          value={otp}
          type="number"
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <VpnKeyOutlined />
              </InputAdornment>
            ),
          }}
        />
        <Button
          fullWidth
          className="auth-btn"
          disableElevation
          variant="contained"
          type="submit"
        >
          Verify
        </Button>
      </form>
      <div className="auth-img">
        <img src="./auth-signup.png" alt="image" />
      </div>
    </div>
  );
}
