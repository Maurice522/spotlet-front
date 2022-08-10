import React from "react";
import SectionMenu from "./SectionMenu";
import SectionReason from "./SectionReason";
import SectionProperty from "./SectionProperty";
import SectionServices from "./SectionServices";
import { FaDharmachakra, FaPlay } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { BsCalendarWeek } from "react-icons/bs";
import "../../Assets/Styles/Home/content.css";
import Testimonials from "./Testimonials";
import Host from "./Host";

const Content = () => {
	return (
		<>
			<SectionMenu />
			<div className="content-wrapper">
				<div className="left">
					<div className="left-heading">
						3<br /> STEPS
						<br /> BOOKING
						<br /> PROCESS
					</div>
					<div className="left-subsection-right">
						<div className="content-container">
							<FaDharmachakra color="#ff6767" size="24px" />
							<div>Choose the activity</div>
						</div>
						<div className="content-container">
							<MdLocationOn color="#ff6767" size="24px" />
							<div>Find a perfect place</div>
						</div>
						<div className="content-container">
							<BsCalendarWeek color="#ff6767" size="24px" />
							<div>Book a date</div>
						</div>
					</div>
				</div>
				<div className="right">
					<img
						src={require(`../../Assets/Images/side-image.jpeg`)}
						alt="side"
						className="right-image"
					/>
				</div>
			</div>
			<SectionReason />
			<SectionProperty />
			<SectionServices />
			<div className="text-on-image-container service-image-wrapper">
				<img
					src={require("../../Assets/Images/video-image.jpeg")}
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
			<Testimonials />
			<Host />
		</>
	);
};

export default Content;
