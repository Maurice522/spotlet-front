import React, { useEffect, useState } from "react";
import "../Assets/Styles/ListingPlace.css";
import Details from "../Components/Listing/Details";
import Location from "../Components/Listing/Location";
import Amenities from "../Components/Listing/Amenities";
import Navbar from "../Components/Navbar";
import Photo from "../Components/Listing/Photo";
import Features from "../Components/Listing/Features";
import Dondont from "../Components/Listing/Dondont";
import Pricing from "../Components/Listing/Pricing";
import Rules from "../Components/Listing/Rules";
import Timings from "../Components/Listing/Timing";
import Contact from "../Components/Listing/Contact";
import BankDetails from "../Components/Listing/BankDetails";
import Gst from "../Components/Listing/Gst";
import TermCondition from "../Components/Listing/Term&Condition";
import ReviewApplication from "../Components/Listing/ReviewApplication";
import { useSelector } from "react-redux";
import { selectLocationData } from "../redux/slices/locationSlice";
import { AiOutlineArrowLeft } from 'react-icons/ai'

const ListingPlace = () => {

	const [sec, setSec] = useState("Details & Description");

	let x = window.matchMedia("(max-width: 576px)")
	useEffect(() => {
		if (x.matches)
			setSec("");
		  else
			setSec("Details & Description");
	}, [])

	const [section, showSection] = useState(sec);
	const data = useSelector(selectLocationData);
	const handlesection = (e) => {
		showSection(e);
	};

	const items = [
		"Details & Description",
		"Location",
		"Amenities",
		"Photos",
		"Features",
		"Do's & Don'ts",
		"Pricing",
		"Rules of the Host",
		"Timings",
		"Contact Details",
		"GST Details",
		"Bank Details",
		"Review Application",
		"Terms & Conditions",
	];

	const itemsObj = {
		"Details & Description": 0,
		"Location": 1,
		"Amenities": 2,
		"Photos": 3,
		"Features": 4,
		"Do's & Don'ts": 5,
		"Pricing": 6,
		"Rules of the Host": 7,
		"Timings": 8,
		"Contact Details": 9,
		"GST Details": 10,
		"Bank Details": 11,
		"Review Application": 12,
		"Terms & Conditions": 13,
	};

	const changeSection = (sect) => {
		setSec(sect);
		showSection(sect);
	}
	console.log(sec)
	console.log(section)

	return (
		<>
			<div>
				
				<Navbar extraNavId={"id-2"} />
				<div className="host">

					{!x.matches || !section.length ? <nav className="lnav-menu">
						{items.map((item, ind) => (
							<div key={ind}>
								<button
									// onClick={() => itemsObj[item] <= itemsObj[section] ? handlesection(item) : ''}
									onClick={() => handlesection(item)}
									className={section === item ? "lnav-text sel" : "lnav-text"}
									style={{color: itemsObj[item] > itemsObj[section] ? "grey" : ""}}>
									{item}
								</button>
							</div>
							
						))}
						</nav> : 
						<div className="menu">
							<AiOutlineArrowLeft size="30px" onClick={() => showSection("")} />
							<h3>{section}</h3>
						</div>
						}
					

					<div
						style={{
							flexGrow: "1",
						}}>
						{section === "Details & Description" ? (
							<Details showSection={handlesection} changeSection={changeSection} />
						) : (
							""
						)}
						{section === "Location" ? (
							<Location showSection={handlesection} changeSection={changeSection} />
						) : (
							""
						)}
						{section === "Amenities" ? (
							<Amenities showSection={handlesection} changeSection={changeSection} />
						) : (
							""
						)}
						{section === "Photos" ? <Photo showSection={handlesection} /> : ""}
						{section === "Features" ? (
							<Features showSection={handlesection} changeSection={changeSection} />
						) : (
							""
						)}
						{section === "Do's & Don'ts" ? (
							<Dondont showSection={handlesection} changeSection={changeSection} />
						) : (
							""
						)}
						{section === "Pricing" ? (
							<Pricing showSection={handlesection} changeSection={changeSection} />
						) : (
							""
						)}
						{section === "Rules of the Host" ? (
							<Rules showSection={handlesection} changeSection={changeSection} />
						) : (
							""
						)}
						{section === "Timings" ? (
							<Timings showSection={handlesection} changeSection={changeSection} />
						) : (
							""
						)}
						{section === "Contact Details" ? (
							<Contact showSection={handlesection} changeSection={changeSection} />
						) : (
							""
						)}
						{section === "GST Details" ? (
							<Gst showSection={handlesection} changeSection={changeSection} />
						) : (
							""
						)}
						{section === "Bank Details" ? (
							<BankDetails showSection={handlesection} changeSection={changeSection} />
						) : (
							""
						)}
						{section === "Review Application" ? (
							<ReviewApplication showSection={handlesection} changeSection={changeSection} />
						) : (
							""
						)}
						{section === "Terms & Conditions" ? (
							<TermCondition showSection={handlesection} changeSection={changeSection} />
						) : (
							""
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default ListingPlace;
