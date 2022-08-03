import React from "react";
import { FiChrome } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";

const SectionServices = () => {
	return (
		<div className="services-section">
			<div className="services-heading">Gorecce Provides</div>
			<div className="services-list">
				<div className="services-content-item">
					<div className="icon-wrapper">
						<FiChrome />
					</div>
					<div className="services-content-text">lorem ipsum dolor sit</div>
				</div>
				<div className="services-content-item">
					<div className="icon-wrapper">
						<FiChrome />
					</div>
					<div className="services-content-text">lorem ipsum dolor sit</div>
				</div>
				<div className="services-content-item">
					<div className="icon-wrapper">
						<FiChrome />
					</div>
					<div className="services-content-text">lorem ipsum dolor sit</div>
				</div>
				<div className="services-content-item">
					<div className="icon-wrapper">
						<FiChrome />
					</div>
					<div className="services-content-text">lorem ipsum dolor sit</div>
				</div>
				<div className="services-content-item">
					<div className="icon-wrapper">
						<FiChrome />
					</div>
					<div className="services-content-text">lorem ipsum dolor sit</div>
				</div>
				<div className="services-content-item">
					<div className="icon-wrapper">
						<FiChrome />
					</div>
					<div className="services-content-text">lorem ipsum dolor sit</div>
				</div>
			</div>
			<div className="text-on-image-container service-image-wrapper">
				<img
					src={require("../images/video-image.jpeg")}
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
