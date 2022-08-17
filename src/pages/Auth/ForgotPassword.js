import { MailOutline } from "@mui/icons-material";
import { Button, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { forgotPassword } from "../../services/api";

export default function ForgotPassword({ handleClose }) {
  const [email, setEmail] = useState("");
  const handlSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await forgotPassword({ email });
      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.response.data.error);
    }
    setEmail("");
    handleClose();
  };
  return (
    <div className="reset-password modal-reset">
      <form onSubmit={handlSubmit}>
        <h1 style={{ fontSize: "26px" }}>Forgot Password</h1>
        <label>Email</label>
        <br />
        <TextField
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
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
        <Button
          type="submit"
          fullWidth
          className="auth-btn"
          variant="contained"
          disableElevation
          sx={{ marginTop: "30px !important" }}
        >
          Reset
        </Button>
      </form>
    </div>
  );
}
