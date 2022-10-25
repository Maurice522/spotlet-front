import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import TAS_Cards from "../Components/TAS_Cards";
import "../Assets/Styles/cancellation.css";

import { MdExpandMore } from "react-icons/md";

import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";

const Cancellation = () => {
	const elements = [
		{
			title: "7+ days before shoot",
			info: "Lorem ipsum dolor sit amet, consecte tur ad ipiscing elit. Nam hendrerit nisi sed sollicitud in pellentesque. aliqua mut aliquet tristique nisl vitae.",
		},
		{
			title: "72+ hours before shoot",
			info: "Lorem ipsum dolor sit amet, consecte tur ad ipiscing elit. Nam hendrerit nisi sed sollicitud in pellentesque. aliqua mut aliquet tristique nisl vitae.",
		},
		{
			title: "24+ hours before shoot",
			info: "Lorem ipsum dolor sit amet, consecte tur ad ipiscing elit. Nam hendrerit nisi sed sollicitud in pellentesque. aliqua mut aliquet tristique nisl vitae.",
		},
		{
			title: "Less than 24 hours before shoot",
			info: "Lorem ipsum dolor sit amet, consecte tur ad ipiscing elit. Nam hendrerit nisi sed sollicitud in pellentesque. aliqua mut aliquet tristique nisl vitae.",
		},
	];

	const accordion = [
		{
			title: "Pardonable Cancellation",
			info: "Lorem ipsum",
		},
		{
			title: "Reschedule",
			info: "Lorem ipsum",
		},
		{
			title: "Rain Dates",
			info: "Lorem ipsum",
		},
		{
			title: "How to get more clients",
			info: "Lorem ipsum",
		},
	];

	return (
		<div>
			<Navbar extraNavId={"id-2"} />
			<div className="below-nav">
				<div className="cancellation-container">
					<h1>Cancellation Policy</h1>
					<div>
						Community of hosts and renters is built on a foundation of trust and
						mutual respect. Our top priority is ensuring a safe and authentic
						experience for our users, and this means enforcing a set of basic
						rules and standards. Below is the list of our seven community
						guidelines.
					</div>

					<div className="tas-card-container">
						{elements.map((item, ind) => (
							<TAS_Cards data={item} key={ind} />
						))}
					</div>
					<br/><br/>

					<div className="accordion-container">
						<h1>Frequently Asked Questions</h1>
						{accordion.map((item, index) => (
							<Accordion key={index}>
								<AccordionSummary
									sx={{
										fontFamily: "Rubik",
										fontStyle: "normal",
										fontWeight: "500",
										fontSize: "20px",
										padding: "10px",
										marginLeft: "8px",
									}}
									expandIcon={<MdExpandMore size="31px" color="black" />}
									aria-controls="panel1a-content"
									id="panel1a-header">
									{item.title}
								</AccordionSummary>

								<AccordionDetails
									sx={{
										fontFamily: "Rubik",
										fontStyle: "normal",
										fontWeight: "400",
										fontSize: "16px",
										paddingBottom: "30px",
									}}>
									{item.info}
								</AccordionDetails>
							</Accordion>
						))}
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default Cancellation;
