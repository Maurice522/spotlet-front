import React from "react";
import SectionMenu from "./SectionMenu";
import SectionReason from "./SectionReason";
import SectionProperty from "./SectionProperty";
import SectionServices from "./SectionServices";
import { FaDharmachakra, FaPlay } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import imageHome from "../../Assets/Images/reason-image.jpeg";
import { BsCalendarWeek } from "react-icons/bs";
import "../../Assets/Styles/Home/content.css";
import Testimonials from "./Testimonials";
import Host from "./Host";


//for section reason
import VillaIcon from '@mui/icons-material/Villa';
import PaidIcon from '@mui/icons-material/Paid';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
	const objArray = [
		{
			icon:<VillaIcon/>,
			title: "Exciting Spaces",
			info: "Whether you’re hosting a family get-together, planning a corporate event or starting an OTT series, we have the perfect spaces for you to uncover!",
		},
		{
			icon:<PaidIcon/>,
			title: "Transparent Prices",
			info: "We assure you of no hidden fees in all our properties. Pay for what you need and find the most cost-effective spaces for your requirements.",
		},
		{
			icon:<CheckCircleIcon/>,
			title: "Simplified Bookings",
			info: "Bid goodbye to long messy contracts and legal hassles. Our smooth and simplified booking can be made on the go, within a few minutes!",
		},
	];

const Content = () => {
	return (
		<>
			<SectionMenu />
			<div className="content-wrapper">
				<div className="left">
					<div className="left-heading">
						SIMPLE
						<br /> 3-STEP BOOKING
						<br /> PROCESS
					</div>
					<div className="left-subsection-right">
						<div className="content-container">
							<FaDharmachakra color="#ff6767" size="28px" />
							<div>Choose your desired interst</div>
						</div>
						<div className="content-container">
							<MdLocationOn color="#ff6767" size="28px" />
							<div>Find the perfect spot</div>
						</div>
						<div className="content-container">
							<BsCalendarWeek color="#ff6767" size="28px" />
							<div>Book your date</div>
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
			<SectionReason  heading="Why Choose Us" imageReason={imageHome} objArray={objArray}/>
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
			
			<Host title="Host your Spot with Us" buttonContent="List your space"  link={"/"}/>
				
		</>
	);
};

export default Content;
