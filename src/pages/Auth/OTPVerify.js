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
  selectUser_id,
  updateUser,
} from "../../redux/slices/userSlice";
import { signUp, updateUserInfo } from "../../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { VpnKeyOutlined } from "@mui/icons-material";
export default function OTPVerify({ sendOTP, isSignUp, updateUserData }) {
  const [otp, setOTP] = useState("");
  const [auto, setAuto] = useState(true);
  const [timer, setTimer] = useState(120);
  const userData = useSelector(selectUserData);
  const verifyOtp = useSelector(selectOTP);
  const dispatch = useDispatch();
  const user_id = useSelector(selectUser_id);

  useEffect(() => {
    // const counter = timer > 0 && setInterval(() => setTimer(timer - 1), 1000);
    // Never use state variables in useState
    const counter = timer > 0 && setInterval(() => setTimer((prevState) => {return prevState - 1}), 1000);
    return () => clearInterval(counter);
  }, [timer]);

  useEffect(() => {
    if(otp.length === 4){
      setAuto(true);
      handlSubmit();
    }
  }, [otp]);

  // console.log(auto);
  // console.log(otp.length === 4);

  const handlSubmit = async (e) => {
    !auto && e.preventDefault()
    try {
      if (verifyOtp != otp) {
        toast.error("Invalid OTP please try again!!!");
      } else {
        if (isSignUp) {
          const res = await signUp(userData);
          const jwt = res.data;
          localStorage.setItem("token", jwt);
          toast("User Created");
          dispatch(saveOTP(-1));
          window.location = "/";
        } else {
          let updateData = {
            fullName: updateUserData.firstName + " " + updateUserData.lastName,
            email: updateUserData.email,
            mobile: updateUserData.mobile,
            booking_type: updateUserData.booking_type,
            [updateUserData.booking_type === "corporate" ? "company" : "profession"]:
              updateUserData.booking_type === "corporate"
                ? updateUserData.company
                : updateUserData.profession,
            profile_pic: updateUserData.profile_pic,
          };
          dispatch(updateUser(updateData));
          try {
            const response = await updateUserInfo(user_id, updateData);
            toast.success("Information Updated");
            window.location("/account")
          } catch (error) {
            console.log(error);
            toast.error(error.response.data);
          }
        }       
      }
    } catch (error) {
      toast.error(error.response.data.error);
    }
    setAuto(false);
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
            setTimer(120);
          }}
        >
          Resend Code
        </Button>
      </p>
    </div>
  );
}

