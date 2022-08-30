import React from "react";
import "../../Assets/Styles/Home/sectionReason.css";
import { BsBookmark } from "react-icons/bs";
import image from "../../Assets/Images/reason-image.jpeg";

const SectionReason = ({ heading }) => {
	const objArray = [
		{
			title: "We are professionals",
			info: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
		},
		{
			title: "Best Service Guarantee",
			info: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
		},
		{
			title: "We are professionals",
			info: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
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
