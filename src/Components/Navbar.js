import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Avatar, Button } from "@mui/material";
import "../Assets/Styles/navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { selectUserData } from "../redux/slices/userSlice";
import { Link } from "react-router-dom";

const Navbar = ({ extraNavId }) => {
  const user = useSelector(selectUserData);
  const dispatch = useDispatch();
  const logout = () => {
    localStorage.clear();
    window.location = "/signin";
  };
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
      <div>Messages</div>
      <div>Bookings</div>
      <div>Favourites</div>
      {user ? (
        <>
          <label>{user.personalInfo.fullName}</label> <Avatar />{" "}
        </>
      ) : (
        <Link
          to={"/signin"}
          style={{
            color: "black",
            fontSize: "16px",
            textTransform: "capitalize",
          }}
        >
          Sign In
        </Link>
      )}
    </div>
  );
};

export default Navbar;
