import React, { useState } from "react";
import "../../Assets/Styles/Home/sectionMenu.css";
import img1 from "../../Assets/Images/menu-1.jpeg";
import img2 from "../../Assets/Images/menu-2.jpeg";
import img3 from "../../Assets/Images/menu-3.jpeg";
import img4 from "../../Assets/Images/menu-4.jpeg";
import img5 from "../../Assets/Images/menu-5.jpeg";
import img6 from "../../Assets/Images/menu-6.jpeg";

const SectionMenu = () => {
	const filmShooting = [
		{ image: img1, text: "Film Shoot" },
		{ image: img2, text: "Web Series Shoot" },
		{ image: img3, text: "Ad Film Shoot" },
		{ image: img4, text: "Music Album Shoot" },
		{ image: img5, text: "Green Screen" },
		{ image: img6, text: "Photoshoot" },
	];
	const corporateShooting = [
		{ image: img2, text: "Web Series Shoot" },
		{ image: img3, text: "Ad Film Shoot" },
		{ image: img4, text: "Music Album Shoot" },
		{ image: img5, text: "Green Screen" },
		{ image: img6, text: "Photoshoot" },
		{ image: img1, text: "Film Shoot" },
	];
	const individualShooting = [
		{ image: img3, text: "Ad Film Shoot" },
		{ image: img4, text: "Music Album Shoot" },
		{ image: img5, text: "Green Screen" },
		{ image: img6, text: "Photoshoot" },
		{ image: img1, text: "Film Shoot" },
		{ image: img2, text: "Web Series Shoot" },
	];

	const [shoot, setShoot] = useState(1);

	const shootMap = {
		1: filmShooting,
		2: corporateShooting,
		3: individualShooting,
	};

	const classes = [
		"grid-menu-item-1",
		"grid-menu-item-2",
		"grid-menu-item-1",
		"grid-menu-item-3",
		"grid-menu-item-3",
		"grid-menu-item-3",
	];

	let gridItems = shootMap[shoot].map((img, index) => (
		<div className={classes[index]} key={index}>
			<img src={img.image} alt={`menu-${index + 1}`} className="menu-image" />
			<div className="menu-item-text">{img.text}</div>
		</div>
	));
	return (
		<div className="menu-section">
			<div className="menu-headings">
				<div
					className={`menu-heading-item ${shoot === 1 ? "selected" : ""}`}
					onClick={() => setShoot(1)}>
					Film Shooting
				</div>
				<div
					className={`menu-heading-item ${shoot === 2 ? "selected" : ""}`}
					onClick={() => setShoot(2)}>
					Corporate Shooting
				</div>
				<div
					className={`menu-heading-item ${shoot === 3 ? "selected" : ""}`}
					onClick={() => setShoot(3)}>
					Individual Shooting
				</div>
			</div>
			<div className="grid-menu">{gridItems}</div>
		</div>
	);
};

export default SectionMenu;
