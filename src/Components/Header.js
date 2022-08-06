import React from "react";
import Navbar from "./Navbar";
import "../Assets/Styles/header.css";

const Header = ({ extraNavId }) => {
	return (
		<>
			<Navbar extraNavId={extraNavId} />
			<div className="text-on-image-container">
				<img
					src={require("../Assets/Images/header-bg.jpeg")}
					alt="background"
					className="bg-image darken"
				/>

				<div className="message">
					Plan your next
					<div className="colored">Activity</div>
					with us
				</div>
			</div>
		</>
	);
};

export default Header;
