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
			title: "Who can be a SpotLet Host?",
			info:"Anyone who owns a property in India can be a SpotLet host. Whether it’s a hotel, a resort, a production space, a banquet hall, a bungalow or anything else, if you own it and want to rent it, you can list it. All you need is pictures and details to start the process. People come to SpotLet to book film shooting locations, team meeting locations, outdoor wedding venues, and much more!",
		},
		{
			title: "How do I get paid?",
			info: "The final payout is deposited in your preferred bank account and processed once the booking is completed and closed. SpotLet ensures that all our property listers get their payments on time.",
		},
		{
			title: "How Does SpotLet Make Money?",
			info: "We charge a certain percentage of the service fee in the listing. We charge guests upfront on the website during the booking through our secure payment gateway. Remember, we only make money when you do! So, your success is integral to us!",
		},
		{
			title: "How Can I get more Customers?",
			info: " We encourage our hosts to share as much information about the property as possible since it helps close bookings faster. Also, you can try our premium packages to ensure that your space gets the spotlight on our platform. We also support you with marketing and advertising and are constantly increasing our website traffic to boost sales.",
		},
	];

	return (
		<div>
			<Navbar extraNavId="id-2" />
			<div className="text-on-image-container">
				<img src={image} alt="background" className="bg-image darken" />
				<div className="message host-message ">
				Enjoy a Second Source of Income. Host with SpotLet
				</div>
				<div className="message-btn">
				<Link to="/lisitng" >
				<Button
						variant="contained"
						sx={{
							backgroundColor: "#EA4235",
						}}>
						List your Property
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
						<div>Add Location Details</div>
					</div>
					<div>
						<div>
							<AiFillContainer color="#EA4235" size="60px" />
						</div>
						<div>Complete your features</div>
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

			<Host title="Create your listing today" buttonContent="Let's Begin" link="/listing" />
			<Footer />
		</div>
	);
};

export default HostPage;
