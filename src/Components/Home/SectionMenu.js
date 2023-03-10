import React, { useEffect, useState } from "react";
import { GiFilmProjector } from "react-icons/gi";
import { BsPersonFill } from "react-icons/bs";
import { MdOutlineCorporateFare } from "react-icons/md";
import { AiOutlineDown } from "react-icons/ai";
import { Link } from "react-router-dom";
import "../../Assets/Styles/Home/sectionMenu.css";
import corp_img1 from "../../Assets/Images/corp_img1.jpeg";
import corp_img2 from "../../Assets/Images/corp_img2.jpeg";
import corp_img3 from "../../Assets/Images/corp_img3.jpeg";
import corp_img4 from "../../Assets/Images/corp_img4.jpeg";
import corp_img5 from "../../Assets/Images/corp_img5.jpeg";
import corp_img6 from "../../Assets/Images/corp_img6.jpeg";

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

import arrow from "../../Assets/Images/border-arrow.jpeg";

const SectionMenu = () => {

	const [imgSize, setImgSize] = useState("40px");

	let x = window.matchMedia("(max-width: 576px)")
	useEffect(() => {
		if (x.matches)
			setImgSize("25px");
		  else
			setImgSize("40px");
	}, [])


	const FilmShooting = [
		{ image: film_img1, text: "Ad Film Shoot" },
		{ image: film_img3, text: "Film Shoot" },
		{ image: film_img2, text: "Web Series Shoot" },
		{ image: film_img4, text: "Music Album Shoot" },
		{ image: film_img5, text: "TV Serial" },
		{ image: film_img6, text: "Photoshoot" },
	];
	const CorporateBooking = [
		{ image: corp_img1, text: "Company Meetings" },
		{ image: corp_img3, text: "Product Launch" },
		{ image: corp_img2, text: "Company Party" },
		{ image: corp_img4, text: "Comapny Anniversary" },
		{ image: corp_img5, text: "Conference" },
		{ image: corp_img6, text: "Award Ceremony" },
	];
	const IndividualBooking = [
		{ image: indi_img1, text: "Birthday Party" },
		{ image: indi_img3, text: "Engagement Party" },
		{ image: indi_img2, text: "Family/Friends Gathering" },
		{ image: indi_img4, text: "Baby Shower" },
		{ image: indi_img5, text: "Bachelor Party" },
		{ image: indi_img6, text: "Festive Event" },
	];

	const [shoot, setShoot] = useState(1);
	const [shootvalue, setShootvalue] = useState('FilmShooting')

	const shootMap = {
		1: FilmShooting,
		2: CorporateBooking,
		3: IndividualBooking,
	};

	const classes = [
		"grid-menu-item-1",
		"grid-menu-item-2",
		"grid-menu-item-1",
		"grid-menu-item-3",
		"grid-menu-item-3",
		"grid-menu-item-3",
	];
	const classesResp = [
		"resp-grid-menu-item-1",
		"resp-grid-menu-item-2",
		"resp-grid-menu-item-2",
		"resp-grid-menu-item-1",
		"resp-grid-menu-item-2",
		"resp-grid-menu-item-2",
	];

	const [arrowState, setArrowState] = useState({
		film: true,
		corporate: false,
		individual: false,
	});

	let gridItems = shootMap[shoot].map((img, index) => (
		<div className={`${classes[index]} ${classesResp[index]}`} key={index}>
			<Link
				to={`/search/${shootvalue}/all/all`}
				onClick={() => window.scrollTo(0, 0)}
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
						borderBottom: "2px solid #ff6767",
						paddingBottom: "5px",
						color: shoot === 1 ? "#ff6767" : "black",
						position: "relative",
					}}
					onClick={() => {
						setShoot(1);
						setShootvalue('FilmShooting')
						setArrowState({
							film: true,
							corporate: false,
							individual: false,
						});
					}}>
					<GiFilmProjector size={imgSize} />
					<div className={`menu-heading-item`}>Film Shooting</div>
					<img
						src={arrow}
						alt="Arrow"
						className={`border-arrow ${
							arrowState.film === false ? "hide" : ""
						}`}
					/>
				</div>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
						borderBottom: "2px solid #ff6767",
						paddingBottom: "5px",
						color: shoot === 2 ? "#ff6767" : "black",
						position: "relative",
					}}
					onClick={() => {
						setShoot(2);
						setShootvalue('CorporateBooking');
						setArrowState({
							film: false,
							corporate: true,
							individual: false,
						});
					}}>
					<MdOutlineCorporateFare size={imgSize} />
					<div className={`menu-heading-item`}>Corporate Events</div>
					<img
						src={arrow}
						alt="Arrow"
						className={`border-arrow ${
							arrowState.corporate === false ? "hide" : ""
						}`}
					/>
				</div>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
						borderBottom: "2px solid #ff6767",
						paddingBottom: "5px",
						color: shoot === 3 ? "#ff6767" : "black",
						position: "relative",
					}}
					onClick={() => {
						setShoot(3);
						setShootvalue('IndividualBooking');
						setArrowState({
							film: false,
							corporate: false,
							individual: true,
						});
					}}>
					<BsPersonFill size={imgSize} />
					<div className={`menu-heading-item`}>Individual Events</div>
					<img
						src={arrow}
						alt="Arrow"
						className={`border-arrow ${
							arrowState.individual === false ? "hide" : ""
						}`}
					/>
				</div>
			</div>
			<div className="grid-menu">{gridItems}</div>
		</div>
	);
};

export default SectionMenu;
