import { useNavigate } from "react-router-dom";
import { LockOutlined, Visibility, VisibilityOff } from "@mui/icons-material";
import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";
import { toast } from "react-toastify";
import "../../Assets/Styles/ResetPassword.css";
import { resetPassword } from "../../services/api";

export default function ResetPassword() {
  const [show, setShow] = useState({
    showNewPassword: false,
    showConfirmNewPassword: false,
  });
  const user_id = window.location.pathname.substring(7);
  //User Password update
  const [userCredential, setUserCredential] = useState({
    newPassword: "",
    confirmNewPassword: "",
  });


  const handleChange = (e) => {
    setUserCredential({ ...userCredential, [e.target.name]: e.target.value });
  };
  
  const [validLength, setValidLength] = useState(null);
  const [upperCase, setUpperCase] = useState(null);
  const [lowerCase, setLowerCase] = useState(null);
  const [specialChar, setSpecialChar] = useState(null);
  const [number, setNumber] = useState(false);
  const [valid, setValid] = useState(true);

  const checkPassword = () => {
    setValidLength(userCredential.newPassword.length >= 8 ? true : false);
    setUpperCase(userCredential.newPassword.toLowerCase() !== userCredential.newPassword);
    setLowerCase(userCredential.newPassword.toUpperCase() !== userCredential.newPassword);
    setSpecialChar(/[ `!@#$%^&*()_+\-=\]{};':"\\|,.<>?~]/.test(userCredential.newPassword));
    setNumber(/\d/.test(userCredential.newPassword));
  };


  const navigate = useNavigate();

  //handle update passowrd
  const handleUpdatePassword = async (e) => {
    e.preventDefault();
    checkPassword();
    console.log(!(validLength && upperCase && lowerCase && specialChar && number))
    if (!(validLength && upperCase && lowerCase && specialChar && number)) {
      setValid(false);
      return;
    }
    setValid(true);
    if (userCredential.newPassword !== userCredential.confirmNewPassword)
      toast.error("new password and confirm password are not same");
    try {
      const response = await resetPassword(user_id, userCredential);
      toast.success("password updated..");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.error);
    }
    navigate("/signin");
  };

  return (
    <div className="reset-password">
      <form onSubmit={handleUpdatePassword}>
        <h1>Reset Password</h1>
        <label style={{ marginTop: "30px" }}>New Password</label>
        <TextField
          type={!show.showNewPassword ? "password" : "text"}
          name="newPassword"
          onChange={handleChange}
          value={userCredential.newPassword}
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
                  onClick={() =>
                    setShow({
                      ...show,
                      showNewPassword: !show.showNewPassword,
                    })
                  }
                  edge="end"
                >
                  {!show.showNewPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          required
        />
        <br />
        {valid ? <p style={{ marginBottom: "20px" }}>Should contain minimum 8 characters</p> : <p style={{ color: "red", marginBottom: "20px" }}>The length of password should be greater than 8 and it should contain an uppercase, a lowercase and a special character</p>}
        <label>Confirm New Password</label>
        <TextField
          type={!show.showConfirmNewPassword ? "password" : "text"}
          name="confirmNewPassword"
          onChange={handleChange}
          value={userCredential.confirmNewPassword}
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
                  onClick={() =>
                    setShow({
                      ...show,
                      showConfirmNewPassword: !show.showConfirmNewPassword,
                    })
                  }
                  edge="end"
                >
                  {!show.showConfirmNewPassword ? (
                    <VisibilityOff />
                  ) : (
                    <Visibility />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}
          required
        />
        <Button
          type="submit"
          fullWidth
          className="auth-btn"
          variant="contained"
          disableElevation
          sx={{ marginTop: "30px !important" }}
        >
          Update Password
        </Button>
      </form>
    </div>
  );
}
