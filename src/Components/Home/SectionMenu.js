import React, { useState } from "react";
import { GiFilmProjector } from "react-icons/gi";
import { BsPersonFill } from "react-icons/bs";
import { MdOutlineCorporateFare } from "react-icons/md";
import { AiOutlineDown } from "react-icons/ai";
import { Link } from "react-router-dom";
import "../../Assets/Styles/Home/sectionMenu.css";
import img1 from "../../Assets/Images/menu-1.jpeg";
import img2 from "../../Assets/Images/menu-2.jpeg";
import img3 from "../../Assets/Images/menu-3.jpeg";
import img4 from "../../Assets/Images/menu-4.jpeg";
import img5 from "../../Assets/Images/menu-5.jpeg";
import img6 from "../../Assets/Images/menu-6.jpeg";

import film_img1 from "../../Assets/Images/film-menu-1.jpeg";
import film_img2 from "../../Assets/Images/film-menu-2.jpeg";
import film_img3 from "../../Assets/Images/film-menu-3.jpeg";
import film_img4 from "../../Assets/Images/film-menu-4.jpeg";
import film_img5 from "../../Assets/Images/film-menu-5.jpeg";
import film_img6 from "../../Assets/Images/film-menu-6.jpeg";

import indi_img1 from "../../Assets/Images/indi-menu-1.jpeg";
import indi_img2 from "../../Assets/Images/indi-menu-2.jpeg";
import indi_img3 from "../../Assets/Images/indi-menu-3.jpeg";
import indi_img4 from "../../Assets/Images/indi-menu-4.jpeg";
import indi_img5 from "../../Assets/Images/indi-menu-5.jpeg";
import indi_img6 from "../../Assets/Images/indi-menu-6.jpeg";

const SectionMenu = () => {
	const filmShooting = [
		{ image: film_img1, text: "Ad Film Shoot" },
		{ image: film_img2, text: "Web Series Shoot" },
		{ image: film_img3, text: "Film Shoot" },
		{ image: film_img4, text: "Music Album Shoot" },
		{ image: film_img5, text: "TV Serial" },
		{ image: film_img6, text: "Photoshoot" },
	];
	const corporateShooting = [
		{ image: img1, text: "Company Meetings" },
		{ image: img2, text: "Company Party" },
		{ image: img3, text: "Product Launch" },
		{ image: img4, text: "Comapny Anniversary" },
		{ image: img5, text: "Conference" },
		{ image: img6, text: "Award Ceremony" },
	];
	const individualShooting = [
		{ image: indi_img1, text: "Birthday Party" },
		{ image: indi_img2, text: "Family/Friends Gathering" },
		{ image: indi_img3, text: "Engagement Party" },
		{ image: indi_img4, text: "Baby Shower" },
		{ image: indi_img5, text: "Bachelor Party" },
		{ image: indi_img6, text: "Festive Event" },
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
			<Link
				to="/search"
				style={{
					textDecoration: "none",
				}}>
				<img src={img.image} alt={`menu-${index + 1}`} className="menu-image" />
				<div className="menu-item-text">{img.text}</div>
			</Link>
		</div>
	));
	return (
		<div className="menu-section">
			<div className="menu-headings">
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
						borderBottom: `2px solid ${shoot === 1 ? "#ff6767" : "black"}`,
						paddingBottom: "5px",
						color: shoot === 1 ? "#ff6767" : "black",
					}}
					onClick={() => setShoot(1)}>
					<GiFilmProjector size="40px" />
					<div className={`menu-heading-item`}>Film Shooting</div>
					<AiOutlineDown size="15px" />
				</div>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
						borderBottom: `2px solid ${shoot === 2 ? "#ff6767" : "black"}`,
						paddingBottom: "5px",
						color: shoot === 2 ? "#ff6767" : "black",
					}}
					onClick={() => setShoot(2)}>
					<MdOutlineCorporateFare size="40px" />
					<div className={`menu-heading-item`}>Corporate Shooting</div>
					<AiOutlineDown size="15px" />
				</div>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
						borderBottom: `2px solid ${shoot === 3 ? "#ff6767" : "black"}`,
						paddingBottom: "5px",
						color: shoot === 3 ? "#ff6767" : "black",
					}}
					onClick={() => setShoot(3)}>
					<BsPersonFill size="40px" />
					<div className={`menu-heading-item`}>Individual Shooting</div>
					<AiOutlineDown size="15px" />
				</div>
			</div>
			<div className="grid-menu">{gridItems}</div>
		</div>
	);
};

export default SectionMenu;
