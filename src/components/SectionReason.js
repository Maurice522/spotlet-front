import React from "react";
import { BsBookmark } from "react-icons/bs";

const SectionReason = () => {
	return (
		<div>
			<div className="reason-heading">Why Choose Us</div>
			<div className="reason-section">
				<div className="image-wrapper">
					<img
						src={require("../images/reason-image.jpeg")}
						alt="reason-1"
						className="reason-image"
					/>
				</div>
				<div className="reason-content-wrapper">
					<div className="reason-content-section">
						<div className="icon-wrapper">
							<BsBookmark />
						</div>
						<div className="reason-content-item">
							<div className="reason-content-title">We are professionals</div>
							<div className="reason-content-info">
								lorem ipsum dolor sit amet consectetur adipisicing elit.
							</div>
						</div>
					</div>
					<div className="reason-content-section">
						<div className="icon-wrapper">
							<BsBookmark />
						</div>
						<div className="reason-content-item">
							<div className="reason-content-title">Best Service Guarantee</div>
							<div className="reason-content-info">
								lorem ipsum dolor sit amet consectetur adipisicing elit.
							</div>
						</div>
					</div>
					<div className="reason-content-section">
						<div className="icon-wrapper">
							<BsBookmark />
						</div>
						<div className="reason-content-item">
							<div className="reason-content-title">We are professionals</div>
							<div className="reason-content-info">
								lorem ipsum dolor sit amet consectetur adipisicing elit.
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SectionReason;
