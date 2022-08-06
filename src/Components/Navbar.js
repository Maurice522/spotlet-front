import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Avatar } from "@mui/material";
import "../Assets/Styles/navbar.css";

const Navbar = ({ extraNavId }) => {
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
			<Avatar />
		</div>
	);
};

export default Navbar;
