import { Button } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectUserData, logout } from "../redux/slices/userSlice";

function Home() {
  // const [loading, setLoading] = useState(true);
  const user = useSelector(selectUserData);
  const dispatch = useDispatch();
  const logout = () => {
    localStorage.clear();
    window.location = "/signin";
  };
  return (
    <div style={{ textAlign: "center", marginTop: "2%" }}>
      {user ? <h1>Hi {user.personalInfo.fullName}</h1> : <h1>Loading...</h1>}
      <Button
        size="large"
        variant="contained"
        sx={{ marginTop: "5%" }}
        onClick={() => logout()}
      >
        Logout
      </Button>
    </div>
  );
}

export default Home;
