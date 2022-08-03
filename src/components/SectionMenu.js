import React from "react";
import Image from "./Image";

const SectionMenu = () => {
	return (
		<div className="menu-section">
			<div className="menu-headings">
				<div className="menu-heading-item selected">Film Shooting</div>
				<div className="menu-heading-item">Corporate Shooting</div>
				<div className="menu-heading-item">Individual Shooting</div>
			</div>
			<div className="grid-menu">
				<div className="grid-menu-item-1">
					<Image
						src={require("../images/menu-1.jpeg")}
						alt="menu-1"
						className="menu-image"
					/>
					<div className="menu-item-text">Film Shoot </div>
				</div>
				<div className="grid-menu-item-2">
					<Image
						src={require("../images/menu-2.jpeg")}
						alt="menu-2"
						className="menu-image"
					/>
					<div className="menu-item-text">Web Series Shoot </div>
				</div>
				<div className="grid-menu-item-1">
					<Image
						src={require("../images/menu-3.jpeg")}
						alt="menu-3"
						className="menu-image"
					/>
					<div className="menu-item-text">Ad Film Shoot </div>
				</div>
				<div className="grid-menu-item-3">
					<Image
						src={require("../images/menu-4.jpeg")}
						alt="menu-4"
						className="menu-image"
					/>
					<div className="menu-item-text">Music Album Shoot </div>
				</div>
				<div className="grid-menu-item-3">
					<Image
						src={require("../images/menu-5.jpeg")}
						alt="menu-5"
						className="menu-image"
					/>
					<div className="menu-item-text">Green Screen </div>
				</div>
				<div className="grid-menu-item-3">
					<Image
						src={require("../images/menu-6.jpeg")}
						alt="menu-6"
						className="menu-image"
					/>
					<div className="menu-item-text">PhotoShoot </div>
				</div>
			</div>
		</div>
	);
};

export default SectionMenu;
