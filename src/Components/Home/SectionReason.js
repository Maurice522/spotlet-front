import React from "react";
import "../../Assets/Styles/Home/sectionReason.css";
import { BsBookmark } from "react-icons/bs";
import image from "../../Assets/Images/reason-image.jpeg";

const SectionReason = ({ heading }) => {
	const objArray = [
		{
			title: "Exciting Spaces",
			info: "Whether you’re hosting a family get-together, planning a corporate event or starting an OTT series, we have the perfect spaces for you to uncover!",
		},
		{
			title: "Transparent Prices",
			info: "We assure you of no hidden fees in all our properties. Pay for what you need and find the most cost-effective spaces for your requirements.",
		},
		{
			title: "Simplified Bookings",
			info: "Bid goodbye to long messy contracts and legal hassles. Our smooth and simplified booking can be made on the go, within a few minutes!",
		},
	];

	const items = objArray.map((item, index) => (
		<div className="reason-content-section" key={index}>
			<div className="icon-wrapper">
				<BsBookmark />
			</div>
			<div className="reason-content-item">
				<div className="reason-content-title">{item.title}</div>
				<div className="reason-content-info">{item.info}</div>
			</div>
		</div>
	));

	return (
		<div className="reason-container">
			<div className="reason-heading">{heading}</div>
			<div className="reason-section">
				{/* <div className="image-wrapper"> */}
				<img src={image} alt="reason-1" className="reason-image" />
				{/* </div> */}
				<div className="reason-content-wrapper">{items}</div>
			</div>
		</div>
	);
};

export default SectionReason;
