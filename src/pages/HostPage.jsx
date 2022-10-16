import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import SectionReason from "../Components/Home/SectionReason";
import image from "../Assets/Images/become-a-host-header-image.jpeg";
import image1 from "../Assets/Images/becomeAHost_img3.jpeg";
import { Button } from "@mui/material";
import { IoLocationOutline } from "react-icons/io5";
import { FiDollarSign } from "react-icons/fi";
import { AiFillContainer } from "react-icons/ai";
import { MdExpandMore } from "react-icons/md";
import "../Assets/Styles/host.css";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import Host from "../Components/Home/Host";
import { Link } from "react-router-dom";


const HostPage = () => {
	const accordion = [
		{
			title: "Who can be a Gorecce Host?",
			info: "lorem ipsum text lorem ipsum text lorem ipsum text lorem ipsum text lorem ipsum text lorem ipsum text",
		},
		{
			title: "How do I get paid?",
			info: "lorem ipsum text lorem ipsum text lorem ipsum text lorem ipsum text lorem ipsum text lorem ipsum text lorem ipsum text lorem ipsum text lorem ipsum text lorem ipsum text lorem ipsum text",
		},
		{
			title: "How does Gorecce makes money?",
			info: "lorem ipsum text lorem ipsum text lorem ipsum text lorem ipsum text lorem ipsum text lorem ipsum text",
		},
		{
			title: "How to get more clients?",
			info: " lorem ipsum text lorem ipsum text lorem ipsum text lorem ipsum text lorem ipsum text",
		},
		{
			title: "What is in it for you?",
			info: " lorem ipsum text lorem ipsum text lorem ipsum text lorem ipsum text lorem ipsum text",
		},
	];

	return (
		<div>
			<Navbar extraNavId="id-2" />
			<div className="text-on-image-container">
				<img src={image} alt="background" className="bg-image darken" />
				<div className="message host-message ">
					Earn money by becoming a host
				</div>
				<div className="message-btn">
				<Link to="/lisitng" >
				<Button
						variant="contained"
						sx={{
							backgroundColor: "#EA4235",
						}}>
						Get Started
					</Button>
				</Link>
					
				</div>
			</div>

			<SectionReason heading="Becoming A Host"  imageReason={image1}/>

			<div>
				<div className="become-host-heading">Become a host in 3 easy steps</div>
				<div className="become-host-steps">
					<div>
						<div>
							<IoLocationOutline color="#EA4235" size="60px" />
						</div>
						<div>Location Details</div>
					</div>
					<div>
						<div>
							<AiFillContainer color="#EA4235" size="60px" />
						</div>
						<div>Add the features</div>
					</div>
					<div>
						<div>
							<FiDollarSign color="#EA4235" size="60px" />
						</div>
						<div>Set your price</div>
					</div>
				</div>
			</div>

			<div
				style={{
					marginTop: "50px",
				}}>
				<div className="become-host-heading">Frequently Asked Questions</div>
				<div
					style={{
						width: "80%",
						margin: "30px auto",
					}}>
					{accordion.map((item, index) => (
						<Accordion key={index}>
							<AccordionSummary
								sx={{
									fontFamily: "Inter",
									fontStyle: "normal",
									fontWeight: "600",
									fontSize: "20px",
									padding: "10px",
								}}
								expandIcon={<MdExpandMore size="31px" color="black" />}
								aria-controls="panel1a-content"
								id="panel1a-header">
								{item.title}
							</AccordionSummary>
							<AccordionDetails
								sx={{
									fontFamily: "Inter",
									fontStyle: "normal",
									fontWeight: "400",
									lineHeight:"24px",
									fontSize: "16px",
									paddingTop: "20px",
								}}>
								{item.info}
							</AccordionDetails>
						</Accordion>
					))}
				</div>
			</div>

			<Host title="Create your listing today" buttonContent="List your space" link="/listing" />
			<Footer />
		</div>
	);
};

export default HostPage;
