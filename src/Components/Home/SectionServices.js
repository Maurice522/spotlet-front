import React from "react";
import "../../Assets/Styles/Home/sectionServices.css";
import { FiChrome } from "react-icons/fi";

const SectionServices = () => {
	const items = [
		{
			title: "A Safe Space",
			info: "We do our background research and ensure that all the properties on our portal are safe for usage amongst crew members, teams, families and friends.",
		},
		{
			title: "A Chance to Save",
			info: "You can save up to 20% when you book with SpotLet, compared to when you work with a location agency. In addition, our prices are affordable and budget-friendly.",
		},
		{
			title: "A Wide Range of Options",
			info: "We invite you to explore our diverse locations for all kinds of shooting, events and celebrations. You’ll always be spoilt for choice!",
		},
		{
			title: "A Memorable Experience",
			info: "We promise our customers a smooth, satisfactory and memorable experience during the booking, and our hosts ensure you love your location every time!",
		},
	];

	const element = items.map((item, index) => (
		<div className="services-content-item" key={index}>
			<div className="icon-wrapper">
				<FiChrome size="32px" />
			</div>
			<div
				style={{
					padding: "3px",
				}}>
				<div className="services-content-title">{item.title}</div>
				<div className="services-content-text">{item.info}</div>
			</div>
		</div>
	));

	return (
		<div className="services-section">
			<div className="services-heading">Gorecce Provides</div>
			<div className="services-list">{element}</div>
		</div>
	);
};

export default SectionServices;
