import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Avatar, Button, TextField } from "@mui/material";
import "../Assets/Styles/navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
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
		window.location = "/";
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
	let profilePic = user?.personalInfo.profile_pic;
	return (
		<div className="nav" id={extraNavId}>
			<Link to="/">
				<div className="nav-logo">
					<img src={require(`../Assets/Images/logo.png`)} alt="logo" />
				</div>
			</Link>
			<div className={`nav-search ${extraNavId !== "" ? "blacken" : ""}`}>
				<AiOutlineSearch size="20px" />
				{/* <TextField
					label="Search"
					variant="standard"
					size="small"
					// className="nav-search-input"
				/> */}
				<input
					type="text"
					placeholder="Search"
					className={`nav-search-input ${
						extraNavId !== "" ? "blacken" : "whiten"
					}`}
				/>
			</div>
			<div>
				{user ? (
					<div
						style={{
							display: "flex",
							jusitfyContent: "space-around",
							alignItems: "center",
							gap: "20px",
						}}>
						<Link to="/messages">
							<div>Messages</div>
						</Link>
						<Link to="/bookinglist">
							<div>Bookings</div>
						</Link>
						<Link to="/bookinglist">
							<div>Listings</div>
						</Link>
						<Link to="/favorite">
							<div>Favorites</div>
						</Link>
						<Link to="/listing">
							<div>List Your Site</div>
						</Link>
						<Button
							aria-controls="simple-menu"
							aria-haspopup="true"
							onClick={Boolean(anchorEl) === false ? handleClick : handleClose}>
							{profilePic ? (
								<img className="user-dp" src={profilePic} alt="profile" />
							) : (
								<Avatar />
							)}
						</Button>
						<Menu
							id="simple-menu"
							anchorEl={anchorEl}
							keepMounted
							open={Boolean(anchorEl)}
							onClose={handleClose}
							getContentAnchorEl={null}
							anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
							transformOrigin={{ horizontal: "center" }}>
							<MenuItem>Hi, {firstName}</MenuItem>
							<MenuItem onClick={acntset}>Account Settings</MenuItem>
							<MenuItem onClick={logout}>Logout</MenuItem>
						</Menu>
					</div>
				) : (
					<div
						style={{
							display: "flex",
							jusitfyContent: "space-around",
							alignItems: "center",
							gap: "20px",
						}}>
						<div onClick={() => toast.error("Please sign in first")}>
							List your places
						</div>
						<Link to={"/signin"} state={{ isSignIn: true }}>
							Sign In
						</Link>
						<Link to={"/signin"} state={{ isSignIn: false }}>
							Sign Up
						</Link>
					</div>
				)}
			</div>
		</div>
	);
};

export default Navbar;
