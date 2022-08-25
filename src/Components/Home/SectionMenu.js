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
						borderBottom: `2px solid ${shoot === 1 ? "#ff6767" : "gray"}`,
						color: shoot === 1 ? "#ff6767" : "black",
					}}>
					<GiFilmProjector size="40px" />
					<div className={`menu-heading-item`} onClick={() => setShoot(1)}>
						Film Shooting
						<AiOutlineDown size="20px" />
					</div>
				</div>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
						borderBottom: `2px solid ${shoot === 2 ? "#ff6767" : "black"}`,
						color: shoot === 2 ? "#ff6767" : "black",
					}}>
					<MdOutlineCorporateFare size="40px" />
					<div className={`menu-heading-item`} onClick={() => setShoot(2)}>
						Corporate Shooting
						<AiOutlineDown size="20px" />
					</div>
				</div>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
						borderBottom: `2px solid ${shoot === 3 ? "#ff6767" : "black"}`,
						color: shoot === 3 ? "#ff6767" : "black",
					}}>
					<BsPersonFill size="40px" />
					<div className={`menu-heading-item`} onClick={() => setShoot(3)}>
						Individual Shooting
						<AiOutlineDown size="20px" />
					</div>
				</div>
			</div>
			<div className="grid-menu">{gridItems}</div>
		</div>
	);
};

export default SectionMenu;
