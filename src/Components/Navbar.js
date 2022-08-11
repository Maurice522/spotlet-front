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
			<Link to="/">
				<div className="nav-logo">
					<img src={require(`../Assets/Images/logo.png`)} alt="logo" />
				</div>
			</Link>
			<div className={`nav-search ${extraNavId !== "" ? "blacken" : ""}`}>
				<AiOutlineSearch size="28px" />
				<input
					type="text"
					placeholder="Search"
					className={`nav-search-input ${
						extraNavId !== "" ? "blacken" : "whiten"
					}`}
				/>
			</div>
			<Link to="/message">Messages</Link>
			<Link to="/property">Bookings</Link>
			<Link to="/favourite">Favorites</Link>
			{user ? (
				<>
					<label>{user.personalInfo.fullName}</label> <Avatar />{" "}
				</>
			) : (
				<Link to={"/signin"}>Sign In</Link>
			)}
		</div>
	);
};

export default Navbar;
