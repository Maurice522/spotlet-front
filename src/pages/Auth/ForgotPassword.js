import { MailOutline } from "@mui/icons-material";
import { Button, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { forgotPassword } from "../../services/api";

export default function ForgotPassword({ handleClose }) {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const handlSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await forgotPassword({ email });
      setSent(true);
    } catch (error) {
      toast.error(error.response.data.error);
    }
    setEmail("");
  };
  return (
    <div className="reset-password modal-reset">
      { !sent ? <form onSubmit={handlSubmit}>
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
      </form> : 
      <div className="conf-modal">
        <h3>An email has been sent to you. Please check your Inbox!</h3>
        <Button className="auth-btn" onClick={() => {
          handleClose();
          setSent(false);
        }}>OK</Button>
      </div>}
    </div>
  );
}
