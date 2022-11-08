import React, { useState } from "react";
import { AiOutlineSearch, AiOutlineHome, AiOutlineHeart } from "react-icons/ai";
import { BiBookmark } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
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
			<Link to="/" onClick={() => window.scrollTo(0, 0)}>
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
					className={`nav-search-input ${extraNavId !== "" ? "blacken" : "whiten"
						}`}
				/>
			</div>
			<div className="nav-items">
				{user ? (
					<div
						style={{
							display: "flex",
							jusitfyContent: "space-around",
							alignItems: "center",
							gap: "20px",
						}}>
						<Link to="/messages" onClick={() => window.scrollTo(0, 0)}>
							<div>Messages</div>
						</Link>
						<Link to="/bookinglist/:booking" onClick={() => window.scrollTo(0, 0)}>
							<div>Bookings</div>
						</Link>
						<Link to="/bookinglist/:listing" onClick={() => window.scrollTo(0, 0)}>
							<div>Listings</div>
						</Link>
						<Link to="/favorite" onClick={() => window.scrollTo(0, 0)}>
							<div>Favorites</div>
						</Link>
						<Link to="/listing" onClick={() => window.scrollTo(0, 0)}>
							<div>List Your Space</div>
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
						<div onClick={() => {
							toast.error("Please sign in first")
							navigate("/signin");
						}
						}>
							List your Space
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
			<div className="nav-items-resp">
				{user ? (
					<div>
						<Link to="/listing">
							<AiOutlineSearch size="15px" color="#ff6767" />
							<div>List Space</div>
						</Link>
						<Link to="/bookinglist/:booking">
							<BiBookmark size="15px" color="#ff6767" />
							<div>Bookings</div>
						</Link>
						<Link to="/">
							<AiOutlineHome size="15px" color="#ff6767" />
							<div>Home</div>
						</Link>
						<Link to="/favorite">
							<AiOutlineHeart size="15px" color="#ff6767" />
							<div>Favorites</div>
						</Link>
						<button onClick={Boolean(anchorEl) === false ? handleClick : handleClose}>
							<CgProfile size="15px" color="#ff6767" />
							<div>Account</div>
						</button>
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
					<div>
						<div onClick={() => toast.error("Please sign in first")}>
							List Space
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
