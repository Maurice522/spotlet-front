import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import "../../Assets/Styles/Home/header.css";
import Typewriter from "typewriter-effect";

const Header = ({ extraNavId }) => {
	const images = [
		require("../../Assets/Images/header-bg.jpeg"),
		require("../../Assets/Images/menu-2.jpeg"),
		require("../../Assets/Images/menu-3.jpeg"),
		require("../../Assets/Images/menu-5.jpeg"),
		require("../../Assets/Images/menu-6.jpeg"),
	];
	const messages = [
		"Corporate Retreat",
		"Film & TV Shoot",
		"Personal Celebration",
	];

	const messages2 = [
		"Upstart your Next",
		"Kickstart your Next",
		"Jumpstart your Next",
	];

	const [index, setIndex] = useState(0);
	const image = images[index];
	const message = messages[index];

	useEffect(() => {
		setTimeout(() => {
			setIndex((prev) => (prev < 2 ? prev + 1 : 0));
		}, 5000);
	}, [index]);

	return (
		<>
			<Navbar extraNavId={extraNavId} />
			<div className="text-on-image-container animated fadeOut">
				<img src={image} alt="background" className="bg-image darken" />

				<div className="message">
					{messages2[index]}
					<div className="colored">
						<Typewriter
							options={{
								strings: message,
								autoStart: true,
								delay: 100,
							}}
						/>
					</div>
					with Spotlet
				</div>
			</div>
		</>
	);
};

export default Header;
