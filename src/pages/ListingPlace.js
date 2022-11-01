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
		"Terms & Conditions",
	];

	return (
		<>
			<div>
				
				<Navbar extraNavId={"id-2"} />
				<div className="host">

					{!x.matches || !section.length ? <nav className="lnav-menu">
						{items.map((item, ind) => (
							<div key={ind}>
								<button
									onClick={() => handlesection(item)}
									className={section === item ? "lnav-text sel" : "lnav-text"}>
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
							<Details showSection={handlesection} />
						) : (
							""
						)}
						{section === "Location" ? (
							<Location showSection={handlesection} />
						) : (
							""
						)}
						{section === "Amenities" ? (
							<Amenities showSection={handlesection} />
						) : (
							""
						)}
						{section === "Photos" ? <Photo showSection={handlesection} /> : ""}
						{section === "Features" ? (
							<Features showSection={handlesection} />
						) : (
							""
						)}
						{section === "Do's & Don'ts" ? (
							<Dondont showSection={handlesection} />
						) : (
							""
						)}
						{section === "Pricing" ? (
							<Pricing showSection={handlesection} />
						) : (
							""
						)}
						{section === "Rules of the Host" ? (
							<Rules showSection={handlesection} />
						) : (
							""
						)}
						{section === "Timings" ? (
							<Timings showSection={handlesection} />
						) : (
							""
						)}
						{section === "Contact Details" ? (
							<Contact showSection={handlesection} />
						) : (
							""
						)}
						{section === "GST Details" ? (
							<Gst showSection={handlesection} />
						) : (
							""
						)}
						{section === "Bank Details" ? (
							<BankDetails showSection={handlesection} />
						) : (
							""
						)}
						{section === "Terms & Conditions" ? (
							<TermCondition showSection={handlesection} />
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
