import {
  AccountBox,
  Apple,
  Call,
  Facebook,
  Google,
  LockOutlined,
  MailOutline,
  PermIdentity,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";
import { otpVerify, signIn } from "../../services/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import "./Auth.css";
import { useDispatch } from "react-redux";
import { addUser, saveOTP } from "../../redux/slices/userSlice";
export default function Auth() {
  const [showPassword, setShowPassword] = useState(false);
  const [isSignIn, setIsSignIn] = useState(true);
  const [userData, setUserData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //Handling All Input data function
  const handleInput = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  //SignIn and SignUp function -
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSignIn) {
      try {
        const { data: jwt } = await signIn(userData);
        localStorage.setItem("token", jwt);
        toast("Successful login");
        window.location = "/";
      } catch (error) {
        toast.error(error.response.data.error);
      }
    } else {
      try {
        const response = await otpVerify(userData);
        toast("OTP sent");
        dispatch(saveOTP(response.data.otp));
        dispatch(addUser(userData));
        navigate("/verification");
        setIsSignIn(true);
      } catch (error) {
        toast.error(error.response.data.error);
      }
    }
    setUserData({
      ...userData,
      fullName: "",
      mobile: "",
    });
  };
  return (
    <div className="auth" style={{ flexDirection: isSignIn && "row-reverse" }}>
      <div
        className="auth-detail"
        style={isSignIn ? { paddingRight: "8%" } : { paddingLeft: "15%" }}
      >
        <div>
          {isSignIn ? (
            <p style={{ marginTop: "30px", marginBottom: "40px" }}>
              Don’t have an account?{" "}
              <b onClick={() => setIsSignIn(false)}>Sign Up</b>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <b onClick={() => setIsSignIn(true)}>Sign In</b>
            </p>
          )}
          <h1>{isSignIn ? "Sign in " : "Sign up "}to Goreco</h1>
          <form onSubmit={handleSubmit}>
            {!isSignIn && (
              <>
                <label>Name</label>
                <br />
                <TextField
                  placeholder="Enter your full name"
                  name="fullName"
                  onChange={handleInput}
                  value={userData.fullName}
                  size="small"
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PermIdentity />
                      </InputAdornment>
                    ),
                  }}
                  required
                />
                <br />

                <label>Mobile Number</label>
                <br />
                <TextField
                  type="text"
                  name="mobile"
                  onChange={handleInput}
                  value={userData.mobile}
                  fullWidth
                  placeholder="Enter your mobile number"
                  size="small"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Call />
                      </InputAdornment>
                    ),
                  }}
                  required
                />

                <br />
              </>
            )}
            <label>Email</label>
            <br />
            <TextField
              type="email"
              name="email"
              onChange={handleInput}
              value={userData.email}
              fullWidth
              placeholder="Enter your email address"
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MailOutline />
                  </InputAdornment>
                ),
              }}
              required
            />
            <br />
            <label>Password</label>
            <br />
            <TextField
              type={!showPassword ? "password" : "text"}
              name="password"
              onChange={handleInput}
              value={userData.password}
              fullWidth
              placeholder="Enter password"
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockOutlined />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword((prev) => !prev)}
                      edge="end"
                    >
                      {!showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              required
            />
            <br />
            <Button
              type="submit"
              fullWidth
              className="auth-btn"
              variant="contain"
              disableElevation
            >
              {isSignIn ? "Sign In" : "SignUp"}
            </Button>
          </form>
          <p id="swch">Or sign up with</p>
          <div className="diff-auth-type">
            <IconButton className="auth-icon">
              <Google />
            </IconButton>
            <IconButton className="auth-icon" id="facebook">
              <Facebook />
            </IconButton>
            <IconButton className="auth-icon">
              <Apple />
            </IconButton>
          </div>
        </div>
      </div>
      <div className="auth-img">
        <img
          src={isSignIn ? "./auth-signin.png" : "./auth-signup.png"}
          alt="image"
        />
      </div>
    </div>
  );
}
