import React from "react";
import Navbar from "./Navbar";
import "../Assets/Styles/header.css";

import Typewriter from "typewriter-effect";

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
					<div className="colored">
					<Typewriter 
						options={{
							strings: ['Photoshoot', 'Corporate Events','Private Gathering','Filmshoot','Workshops'],
							autoStart: true,
							loop: true,
						  }}
					/>
					</div>
					with us
				</div>
			</div>
		</>
	);
};

export default Header;
