import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import "../../Assets/Styles/Home/header.css";

const Header = ({ extraNavId }) => {
	const images = [
		require("../../Assets/Images/header-bg.jpeg"),
		require("../../Assets/Images/menu-2.jpeg"),
		require("../../Assets/Images/menu-3.jpeg"),
		require("../../Assets/Images/menu-5.jpeg"),
		require("../../Assets/Images/menu-6.jpeg"),
	];
	const messages = [
		"Photo Shoots",
		"Corporate Events",
		"Private Gathering",
		"Film Shoots",
		"Workshops",
	];

	const [index, setIndex] = useState(0);
	const image = images[index];
	const message = messages[index];

	console.log(index);

	useEffect(() => {
		setTimeout(() => {
			setIndex((prev) => (prev < 4 ? prev + 1 : 0));
		}, 3000);
	}, [index]);

	return (
		<>
			<Navbar extraNavId={extraNavId} />
			<div className="text-on-image-container">
				<img src={image} alt="background" className="bg-image darken" />

				<div className="message">
					Plan your next
					<div className="colored">{message}</div>
					with us
				</div>
			</div>
		</>
	);
};

export default Header;
