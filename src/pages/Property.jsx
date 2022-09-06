import React, { useState } from "react";
import BookingForm from "../Components/Details/BookingForm";
import Carousel from "../Components/Details/Carousel";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import img1 from "../Assets/Images/property-1.jpeg";
import img2 from "../Assets/Images/property-2.jpeg";
import img3 from "../Assets/Images/property-3.jpeg";
import {
	Accordion,
	AccordionSummary,
	AccordionDetails,
	Avatar,
} from "@mui/material";
import { MdExpandMore, MdDone } from "react-icons/md";
import { GoPrimitiveDot } from "react-icons/go";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import PropertyInfo from "../Components/PropertyInfo";
import { ImCross } from "react-icons/im";

const Property = ({
	v1,
	v2,
	v3,
	v4,
	v5,
	setV1,
	setV2,
	setV3,
	setV4,
	setV5,
}) => {
	const locationItem = (
		<div
			style={{
				width: "100%",
				height: "fit-content",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "flex-start",
			}}>
			<div
				style={{
					width: "100%",
					display: "flex",
					justifyContent: "flex-start",
					alignItems: "flex-start",
					marginBottom: "20px",
					gap: "5px",
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
					height: "450px",
				}}
			/>
		</div>
	);

	const hostInfo = (
		<div
			style={{
				width: "100%",
			}}>
			<div
				style={{
					width: "100%",
					display: "flex",
					justifyContent: "space-between",
					alignItems: "flex-start",
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
						padding: "4px 8px",
						cursor: "pointer",
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

	const propertyItems = [
		[
			{
				image: img1,
				name: "Name of Property",
				location: "Location of Property",
				price: "Price",
				rating: "1",
			},
			{
				image: img2,
				name: "Name of Property",
				location: "Location of Property",
				price: "Price",
				rating: "2",
			},
			{
				image: img3,
				name: "Name of Property",
				location: "Location of Property",
				price: "Price",
				rating: "3",
			},
			{
				image: img1,
				name: "Name of Property",
				location: "Location of Property",
				price: "Price",
				rating: "1",
			},
		],
		[
			{
				image: img3,
				name: "Name of Property",
				location: "Location of Property",
				price: "Price",
				rating: "3",
			},
			{
				image: img1,
				name: "Name of Property",
				location: "Location of Property",
				price: "Price",
				rating: "1",
			},
			{
				image: img1,
				name: "Name of Property",
				location: "Location of Property",
				price: "Price",
				rating: "1",
			},
			{
				image: img2,
				name: "Name of Property",
				location: "Location of Property",
				price: "Price",
				rating: "2",
			},
		],
		[
			{
				image: img2,
				name: "Name of Property",
				location: "Location of Property",
				price: "Price",
				rating: "2",
			},
			{
				image: img3,
				name: "Name of Property",
				location: "Location of Property",
				price: "Price",
				rating: "3",
			},
			{
				image: img1,
				name: "Name of Property",
				location: "Location of Property",
				price: "Price",
				rating: "1",
			},
			{
				image: img1,
				name: "Name of Property",
				location: "Location of Property",
				price: "Price",
				rating: "1",
			},
		],
	];

	const [index, setIndex] = useState(0);
	const [fav, setFav] = useState([]);

	const similarProperties = (
		<div
			style={{
				width: "100%",
				margin: "0 auto",
				display: "grid",
				gridTemplateColumns: "auto repeat(4, 1fr) auto",
				gap: "25px",
			}}>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					cursor: "pointer",
				}}>
				<AiOutlineLeft
					size="32px"
					onClick={() => {
						setIndex((prev) => (prev === 0 ? 2 : prev - 1));
						setFav((prev) => prev.map((item) => (item === 0 ? 2 : item - 1)));
					}}
				/>
			</div>
			{propertyItems[index].map((item, index) => (
				<PropertyInfo
					item={item}
					index={index}
					favorites={fav}
					setFavorites={setFav}
					key={index}
					rating={true}
				/>
			))}
			<div
				style={{
					display: "flex",
					alignItems: "center",
					cursor: "pointer",
				}}>
				<AiOutlineRight
					size="32px"
					onClick={() => {
						setIndex((prev) => (prev + 1) % 3);
						setFav((prev) => prev.map((item) => (item + 1) % 3));
					}}
				/>
			</div>
		</div>
	);

	const hostRules = [
		"lorem ipsum donor lorem ipsum donor",
		"lorem ipsum donor lorem ipsum donor",
		"lorem ipsum donor lorem ipsum donor",
		"lorem ipsum donor lorem ipsum donor",
		"lorem ipsum donor lorem ipsum donor",
		"lorem ipsum donor lorem ipsum donor",
	];

	const uniqueFeatures = [
		"Location Manager",
		"Fireplace",
		"Terrace Garden",
		"Stained Glass Window",
	];

	const dos = [
		"lorem ipsum",
		"lorem ipsum",
		"lorem ipsum",
		"lorem ipsum",
		"lorem ipsum",
		"lorem ipsum",
	];

	const donts = [
		"lorem ipsum",
		"lorem ipsum",
		"lorem ipsum",
		"lorem ipsum",
		"lorem ipsum",
		"lorem ipsum",
	];

	const dosDonts = (
		<div
			style={{
				width: "100%",
				display: "flex",
				// justifyContent: "space-around",
				gap: "50px",
				alignItems: "center",
				fontFamily: "Rubik",
				fontStyle: "normal",
				fontWeight: "400",
				fontSize: "20px",
				lineHeight: "32px",
			}}>
			<div>
				{dos.map((val, i) => (
					<div
						key={i}
						style={{
							display: "flex",
							justifyContent: "flex-start",
							alignItems: "center",
							gap: "10px",
						}}>
						<MdDone color="#ff4d4d" size={32} />
						<div>{val}</div>
					</div>
				))}
			</div>
			<div>
				{donts.map((val, i) => (
					<div
						key={i}
						style={{
							display: "flex",
							justifyContent: "flex-start",
							alignItems: "center",
							gap: "10px",
						}}>
						<ImCross color="#ff4d4d" />
						<div>{val}</div>
					</div>
				))}
			</div>
		</div>
	);

	const mostlyBookedFor = [
		"Ad Film Shooting",
		"Birthday Parties",
		"Friends Outings",
		"Web Series Shoot",
		"Music Album Shoot",
	];

	const cancellationPolicies = [
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	];

	const [expanded, setExpanded] = useState([
		true,
		true,
		true,
		true,
		true,
		true,
		true,
		true,
		true,
		true,
		true,
	]);

	const accordion = [
		{
			expanded: expanded[0],
			title: "Description of the property",
			info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat. Nulla aliquet porttitor venenatis. Donec a dui et dui fringilla consectetur id nec massa. Aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat. Nulla aliquet porttitor venenatis. Donec a dui et dui fringilla consectetur id nec massa. Aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat. Nulla aliquet porttitor venenatis. Donec a dui et dui fringilla consectetur id nec massa. Aliquam erat volutpat.",
			type: "text",
		},
		{
			expanded: expanded[1],
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
			expanded: expanded[2],
			title: "Rules of the host",
			info: hostRules,
			type: "list",
		},
		{
			expanded: expanded[3],
			title: "Unique Features",
			info: uniqueFeatures,
			type: "list",
		},
		{
			expanded: expanded[4],
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
			expanded: expanded[5],
			title: "Location",
			info: locationItem,
			type: "html",
		},
		{
			expanded: expanded[6],
			title: "Do's & Don'ts",
			info: dosDonts,
			type: "html",
		},
		{
			expanded: expanded[7],
			title: "Mostly Booked For",
			info: mostlyBookedFor,
			type: "list",
		},
		{
			expanded: expanded[8],
			title: "About the host",
			info: hostInfo,
			type: "html",
		},
		{
			expanded: expanded[9],
			title: "Cancellation Policy",
			info: cancellationPolicies,
			type: "list",
		},
	];

	return (
		<>
			<Navbar extraNavId="id-2" />
			<Carousel />
			<BookingForm
				v1={v1}
				v2={v2}
				v3={v3}
				v4={v4}
				v5={v5}
				setV1={setV1}
				setV2={setV2}
				setV3={setV3}
				setV4={setV4}
				setV5={setV5}
			/>

			<div
				style={{
					width: "80vw",
					margin: "30px auto 50px",
				}}>
				{accordion.map((item, index) => (
					<Accordion
						key={index}
						expanded={item.expanded}
						onChange={() =>
							setExpanded((prev) =>
								prev.map((exp, i) => (i === index ? !exp : exp))
							)
						}>
						<AccordionSummary
							sx={{
								fontFamily: "Inter",
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
								fontFamily: "Inter",
								fontStyle: "normal",
								fontWeight: "400",
								fontSize: "16px",
								paddingBottom: "30px",
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
												lineHeight: "32px",
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

				<div
					style={{
						marginTop: "50px",
						width: "100%",
					}}>
					<div
						style={{
							width: "100%",
							fontFamily: "Inter",
							fontStyle: "normal",
							fontWeight: "500",
							fontSize: "20px",
							marginBottom: "20px",
						}}>
						Similar Properties
					</div>
					{similarProperties}
				</div>
			</div>

			<Footer />
		</>
	);
};

export default Property;
