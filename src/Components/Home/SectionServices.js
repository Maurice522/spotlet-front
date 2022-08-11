import React from "react";
import "../../Assets/Styles/Home/sectionServices.css";
import { FiChrome } from "react-icons/fi";

const SectionServices = () => {
	const items = [
		{
			title: "Lorem ipsum dolor sit",
			info: "Lorem ipsum Sed ut perspiciatis unde omnis iste natus error sit voluptate maccusan doloremque",
		},
		{
			title: "Lorem ipsum dolor sit",
			info: "Lorem ipsum Sed ut perspiciatis unde omnis iste natus error sit voluptate maccusan doloremque",
		},
		{
			title: "Lorem ipsum dolor sit",
			info: "Lorem ipsum Sed ut perspiciatis unde omnis iste natus error sit voluptate maccusan doloremque",
		},
		{
			title: "Lorem ipsum dolor sit",
			info: "Lorem ipsum Sed ut perspiciatis unde omnis iste natus error sit voluptate maccusan doloremque",
		},
	];

	const element = items.map((item, index) => (
		<div className="services-content-item" key={index}>
			<div className="icon-wrapper">
				<FiChrome size="32px" />
			</div>
			<div>
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
