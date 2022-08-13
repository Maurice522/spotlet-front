import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Avatar, Button } from "@mui/material";
import "../Assets/Styles/navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { selectUserData } from "../redux/slices/userSlice";
import { Link, useNavigate } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const Navbar = ({ extraNavId }) => {
  const user = useSelector(selectUserData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = () => {
    handleClose();
    localStorage.clear();
    window.location = "/signin";
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const acntset = () => {
    handleClose();
    console.log("clicked");
    navigate("/account");
  };
  let firstName = user?.personalInfo.fullName.split(" ").slice(0, -1).join(" ");

  return (
    <div className="nav" id={extraNavId}>
      <h3 className="nav-heading">Gorecco</h3>
      <div className={`nav-search ${extraNavId !== "" ? "blacken" : ""}`}>
        <AiOutlineSearch />
        <input
          type="text"
          placeholder="Search"
          className={`nav-search-input ${
            extraNavId !== "" ? "blacken" : "whiten"
          }`}
        />
      </div>
      {user ? (
        <>
          <div>Messages</div>
          <div>Bookings</div>
          <div>Favourites</div>
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={Boolean(anchorEl) === false ? handleClick : handleClose}
          >
            <Avatar />
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            getContentAnchorEl={null}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            transformOrigin={{ horizontal: "center" }}
          >
            <MenuItem>Hi, {firstName}</MenuItem>
            <MenuItem onClick={acntset}>Account Settings</MenuItem>
            <MenuItem onClick={logout}>Logout</MenuItem>
          </Menu>
        </>
      ) : (
        <>
          <div>List your places</div>
          <Link
            to={"/signin"}
            style={{
              color: "black",
              fontSize: "19px",
            }}
          >
            Sign In
          </Link>
          <Link
            to={"/signin"}
            style={{
              color: "black",
              fontSize: "19px",
            }}
          >
            Sign Up
          </Link>
        </>
      )}
    </div>
  );
};

export default Navbar;
