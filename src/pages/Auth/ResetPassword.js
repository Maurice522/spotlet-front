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

  //handle update passowrd
  const handleUpdatePassword = async (e) => {
    e.preventDefault();
    if (userCredential.newPassword !== userCredential.confirmNewPassword)
      toast.error("new password and confirm password are not same");
    try {
      const response = await resetPassword(user_id, userCredential);
      toast.success("password updated..");
      window.location = "/signin";
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.error);
    }
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
        <p style={{ marginBottom: "20px" }}>
          Should contain minimum 8 characters
        </p>
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
