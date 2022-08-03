import React from "react";
import Image from "./Image";
import Navbar from "./Navbar";

const Header = ({ extraNavId }) => {
	return (
		<>
			<Navbar extraNavId={extraNavId} />
			<div className="text-on-image-container">
				<Image
					src={require("../images/header-bg.jpeg")}
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
