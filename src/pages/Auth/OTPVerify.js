import { Button, InputAdornment, TextField } from "@mui/material";
import OTPInput, { ResendOTP } from "otp-input-react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "../../Assets/Styles/OTP-verify.css";
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
export default function OTPVerify({ sendOTP }) {
  const [otp, setOTP] = useState("");
  const [timer, setTimer] = useState(30);
  const userData = useSelector(selectUserData);
  const verifyOtp = useSelector(selectOTP);
  const dispatch = useDispatch();

  useEffect(() => {
    const counter = timer > 0 && setInterval(() => setTimer(timer - 1), 1000);
    return () => clearInterval(counter);
  }, [timer]);

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
        <h1>Verify your Email Address</h1>
        <p>Enter the 4 digit code sent to your email</p>
        <OTPInput
          value={otp}
          onChange={setOTP}
          autoFocus
          OTPLength={4}
          otpType="number"
          disabled={false}
          secure
          className="otp-input"
        />
        <p className="timer">{timer} sec</p>
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

      <p>
        Didn't get a message?{" "}
        <Button
          disableElevation
          disableTouchRipple
          disabled={timer > 0}
          sx={{ color: `${timer > 0 && "grey !important"}` }}
          className="btn-resend"
          onClick={() => {
            sendOTP(userData);
            setTimer(30);
          }}
        >
          Resend Code
        </Button>
      </p>
    </div>
  );
}
