import React from "react";
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";

const SectionProperty = () => {
	return (
		<div className="property-section">
			<div className="property-heading">Featured Properties in Hyderabad</div>
			<div className="property-list">
				<div className="item">
					<div className="text-on-image-container">
						<img
							src={require("../images/property-1.jpeg")}
							alt="property-1"
							className="property-image"
						/>
						<div
							style={{
								position: "absolute",
								top: "10px",
								right: "10px",
								fontSize: "32px",
							}}>
							<MdOutlineFavoriteBorder />
						</div>
					</div>
					<div className="property-info">
						<div className="property-info-heading">Name of Property</div>
						<div className="property-info-location">Location of Property</div>
						<div className="property-info-price">Price</div>
					</div>
				</div>
				<div className="item">
					<div className="text-on-image-container">
						<img
							src={require("../images/property-2.jpeg")}
							alt="property-2"
							className="property-image"
						/>
						<div
							style={{
								position: "absolute",
								top: "10px",
								right: "10px",
								fontSize: "32px",
							}}>
							<MdOutlineFavoriteBorder />
						</div>
					</div>
					<div className="property-info">
						<div className="property-info-heading">Name of Property</div>
						<div className="property-info-location">Location of Property</div>
						<div className="property-info-price">Price</div>
					</div>
				</div>
				<div className="item">
					<div className="text-on-image-container">
						<img
							src={require("../images/property-3.jpeg")}
							alt="property-3"
							className="property-image"
						/>
						<div
							style={{
								position: "absolute",
								top: "10px",
								right: "10px",
								fontSize: "32px",
								color: "#FF6767",
							}}>
							<MdOutlineFavorite />
						</div>
					</div>
					<div className="property-info">
						<div className="property-info-heading">Name of Property</div>
						<div className="property-info-location">Location of Property</div>
						<div className="property-info-price">Price</div>
					</div>
				</div>
				<div className="item">
					<div className="text-on-image-container">
						<img
							src={require("../images/property-4.jpeg")}
							alt="property-4"
							className="property-image"
						/>
						<div
							style={{
								position: "absolute",
								top: "10px",
								right: "10px",
								fontSize: "32px",
							}}>
							<MdOutlineFavoriteBorder />
						</div>
					</div>

					<div className="property-info">
						<div className="property-info-heading">Name of Property</div>
						<div className="property-info-location">Location of Property</div>
						<div className="property-info-price">Price</div>
					</div>
				</div>
				<div className="item">
					<div className="text-on-image-container">
						<img
							src={require("../images/property-5.jpeg")}
							alt="property-5"
							className="property-image"
						/>
						<div
							style={{
								position: "absolute",
								top: "10px",
								right: "10px",
								fontSize: "32px",
							}}>
							<MdOutlineFavoriteBorder />
						</div>
					</div>
					<div className="property-info">
						<div className="property-info-heading">Name of Property</div>
						<div className="property-info-location">Location of Property</div>
						<div className="property-info-price">Price</div>
					</div>
				</div>
				<div className="item">
					<div className="text-on-image-container">
						<img
							src={require("../images/property-6.jpeg")}
							alt="property-6"
							className="property-image"
						/>
						<div
							style={{
								position: "absolute",
								top: "10px",
								right: "10px",
								fontSize: "32px",
							}}>
							<MdOutlineFavoriteBorder />
						</div>
					</div>
					<div className="property-info">
						<div className="property-info-heading">Name of Property</div>
						<div className="property-info-location">Location of Property</div>
						<div className="property-info-price">Price</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SectionProperty;
