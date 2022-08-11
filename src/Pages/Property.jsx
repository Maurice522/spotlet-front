import React from "react";
import BookingForm from "../Components/Details/BookingForm";
import Carousel from "../Components/Details/Carousel";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import {
	Accordion,
	AccordionSummary,
	AccordionDetails,
	Avatar,
} from "@mui/material";
import { MdExpandMore } from "react-icons/md";
import { GoPrimitiveDot } from "react-icons/go";

const Property = () => {
	const locationItem = (
		<div
			style={{
				width: "80vw",
				height: "fit-content",
			}}>
			<div
				style={{
					width: "100%",
					display: "flex",
					justifyContent: "flex-start",
					alignItems: "flex-start",
				}}>
				<div>Address:</div>
				<div>
					House no., building, street, area
					<br />
					Locality/ town
					<br />
					City, State
					<br />
					Pincode
				</div>
			</div>
			<img
				src={require("../Assets/Images/location-image.png")}
				alt="location"
				style={{
					margin: "10px auto",
					width: "100%",
					height: "270px",
				}}
			/>
		</div>
	);

	const hostInfo = (
		<div
			style={{
				width: "80vw",
			}}>
			<div
				style={{
					width: "100%",
					display: "flex",
					justifyContent: "space-between",
					padding: "10px",
				}}>
				<div
					style={{
						display: "flex",
						justifyContent: "flex-start",
						alignItems: "center",
						gap: "20px",
					}}>
					<Avatar
						src={require("../Assets/Images/host-image.jpeg")}
						sx={{
							width: 48,
							height: 48,
						}}
					/>
					<div>
						<div>John Doe</div>
						<div>+91 0000000000</div>
					</div>
				</div>
				<div
					style={{
						height: "fit-content",
						border: "2px solid #ff5f5f",
						borderRadius: "5px",
						marginRight: "20px",
						padding: "0 5px",
					}}>
					Message the host
				</div>
			</div>
			<div
				style={{
					width: "100%",
					padding: "10px",
				}}>
				Description of the host ipsum dolor sit amet, consectetur adipiscing
				elit. Nam hendrerit nisi sed sollicitu din pellentesque. Nunc posuere
				purus rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae
				volutpat. Nulla aliquet porttitor venenatis. Donec a dui et dui
				fringilla consectetur id nec massa. Aliquam erat volutpat.
			</div>
		</div>
	);

	const accordion = [
		{
			title: "Description of the property",
			info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat. Nulla aliquet porttitor venenatis. Donec a dui et dui fringilla consectetur id nec massa. Aliquam erat volutpat.",
			type: "text",
		},
		{
			title: "Amenities",
			info: [
				"Air Conditioning",
				"Wi-Fi",
				"Fridge",
				"Freezer",
				"Projector",
				"Cutlery",
				"Chairs",
				"Sink",
				"Sofas",
				"Free Parking",
				"TV",
			],
			type: "list",
		},
		{
			title: "Rules of the host",
			info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam.Ut aliquet tristique nisl vitae volutpat.Nulla aliquet porttitor venenatis.Donec a dui et dui fringilla consectetur id nec massa.Aliquam erat volutpat.",
			type: "text",
		},
		{
			title: "Timings",
			info: [
				"Monday:           7:00am - 11:00pm",
				"Tuesday:          7:00am - 11:00pm",
				"Wednesday:        7:00am - 11:00pm",
				"Thursday:         7:00am - 11:00pm",
				"Friday:           7:00am - 11:00pm",
				"Saturday:         7:00am - 11:00pm",
				"Sunday:           7:00am - 11:00pm",
			],
			type: "list",
		},
		{
			title: "Location",
			info: locationItem,
			type: "html",
		},
		{
			title: "About the host",
			info: hostInfo,
			type: "html",
		},
		{
			title: "Cancellation Policy",
			info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat. Nulla aliquet porttitor venenatis. Donec a dui et dui fringilla consectetur id nec massa. Aliquam erat volutpat.",
			type: "text",
		},
	];

	return (
		<>
			<Navbar extraNavId="id-2" />
			<Carousel />
			<BookingForm />

			<div
				style={{
					width: "80vw",
					margin: "30px auto 50px",
				}}>
				{accordion.map((item, index) => (
					<Accordion key={index}>
						<AccordionSummary
							sx={{
								fontFamily: "Inter",
								fontStyle: "normal",
								fontWeight: "500",
								fontSize: "31px",
								lineHeight: "44px",
								paddingBottom: "10px",
								borderBottom: "1px solid #e0e0e0",
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
								fontSize: "20px",
								lineHeight: "32px",
								paddingTop: "20px",
							}}>
							{item.type === "list" ? (
								<div>
									{item.info.map((val, i) => (
										<div
											key={i}
											style={{
												display: "flex",
												justifyContent: "flex-start",
												alignItems: "center",
												gap: "10px",
											}}>
											<GoPrimitiveDot color="#ff4d4d" />
											<div>{val}</div>
										</div>
									))}
								</div>
							) : (
								item.info
							)}
						</AccordionDetails>
					</Accordion>
				))}
			</div>
			<Footer />
		</>
	);
};

export default Property;
