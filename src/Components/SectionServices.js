import React from "react";
import "../Assets/Styles/sectionServices.css";
import { FiChrome } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";

const SectionServices = () => {
	const items = [
		{
			info: "lorem ipsum dolor sit",
		},
		{
			info: "lorem ipsum dolor sit",
		},
		{
			info: "lorem ipsum dolor sit",
		},
		{
			info: "lorem ipsum dolor sit",
		},
		{
			info: "lorem ipsum dolor sit",
		},
		{
			info: "lorem ipsum dolor sit",
		},
	];

	const element = items.map((item, index) => (
		<div className="services-content-item" key={index}>
			<div className="icon-wrapper">
				<FiChrome />
			</div>
			<div className="services-content-text">{item.info}</div>
		</div>
	));

	return (
		<div className="services-section">
			<div className="services-heading">Gorecce Provides</div>
			<div className="services-list">{element}</div>
			<div className="text-on-image-container service-image-wrapper">
				<img
					src={require("../Assets/Images/video-image.jpeg")}
					alt="video"
					className="service-image"></img>
				<div
					style={{
						position: "absolute",
						top: "40%",
						left: "47%",
						color: "rgba(255, 255, 255, 0.7)",
						cursor: "pointer",
					}}>
					<FaPlay size={75} />
				</div>
			</div>
			<div className="service-section-text">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit
				nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar
				aliquam{" "}
			</div>
		</div>
	);
};

export default SectionServices;
