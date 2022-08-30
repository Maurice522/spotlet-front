import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../Assets/Styles/listDetails.css";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { GoPrimitiveDot } from "react-icons/go";
import SyncfusionTable from "../Components/BookingListing/SyncFusionTable";

const ListDetails = ({ setFinal }) => {
	const gridBookingName = (props) => (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				gap: "5px",
			}}>
			<GoPrimitiveDot color="#EA4235" />
			{props.Name}
		</div>
	);

	const gridActionButton = (props) => (
		<Link to={props.to} style={{ textDecoration: "none" }}>
			<Button
				variant="outlined"
				onClick={() => setFinal(true)}
				sx={{
					width: "50%",
					border: "1px solid #EA4235",
					color: "black",
					fontWeight: "600",
					borderRadius: "4px",
					marginTop: "10px",
				}}>
				Details
			</Button>
		</Link>
	);

	const gridBookingStatus = (props) => {
		let color;
		if (props.Status === "Under Review") color = "#E8B500";
		else if (props.Status === "Approved") color = "#0079D7";
		else if (props.Status === "Cancelled") color = "#E20000";
		else if (props.Status === "Booked") color = "#19AF00";

		return (
			<div
				style={{
					textAlign: "center",
					color: color,
				}}>
				{props.Status}
			</div>
		);
	};

	const listDetailsData = [
		{
			to: "/listdetailsapproval",
			Name: "John Doe",
			Status: "Under Review",
			DateOfRequest: "12/12/22",
			DateOfEvent: "25/12/22",
			TimeDuration: "12:00 - 23:55, 20hrs",
			TotalAmount: 50000,
		},
		{
			to: "/listdetailsapproval",
			Name: "John Doe",
			Status: "Approved",
			DateOfRequest: "12/12/22",
			DateOfEvent: "25/12/22",
			TimeDuration: "12:00 - 23:55, 20hrs",
			TotalAmount: 50000,
		},
		{
			to: "/listdetailsapproval",
			Name: "John Doe",
			Status: "Approved",
			DateOfRequest: "12/12/22",
			DateOfEvent: "25/12/22",
			TimeDuration: "12:00 - 23:55, 20hrs",
			TotalAmount: 50000,
		},
		{
			to: "/listdetailsapproval",
			Name: "John Doe",
			Status: "Cancelled",
			DateOfRequest: "12/12/22",
			DateOfEvent: "25/12/22",
			TimeDuration: "12:00 - 23:55, 20hrs",
			TotalAmount: 50000,
		},
		{
			to: "/listdetailsapproval",
			Name: "John Doe",
			Status: "Under Review",
			DateOfRequest: "12/12/22",
			DateOfEvent: "25/12/22",
			TimeDuration: "12:00 - 23:55, 20hrs",
			TotalAmount: 50000,
		},
		{
			to: "/listdetailsapproval",
			Name: "John Doe",
			Status: "Under Review",
			DateOfRequest: "12/12/22",
			DateOfEvent: "25/12/22",
			TimeDuration: "12:00 - 23:55, 20hrs",
			TotalAmount: 50000,
		},
		{
			to: "/listdetailsapproval",
			Name: "John Doe",
			Status: "Under Review",
			DateOfRequest: "12/12/22",
			DateOfEvent: "25/12/22",
			TimeDuration: "12:00 - 23:55, 20hrs",
			TotalAmount: 50000,
		},
	];

	const listDetailsGrid = [
		{
			headerText: "Name",
			template: gridBookingName,
			width: "150",
			textAlign: "Center",
		},

		{
			headerText: "Date Of Request",
			field: "DateOfRequest",
			width: "200",
			textAlign: "Center",
		},
		{
			headerText: "Date Of Event",
			field: "DateOfEvent",
			width: "200",
			textAlign: "Center",
		},
		{
			headerText: "Time, Duration",
			field: "TimeDuration",
			width: "200",
			textAlign: "Center",
		},
		{
			headerText: "Total Amount",
			field: "TotalAmount",
			width: "150",
			textAlign: "Center",
		},
		{
			headerText: "Status",
			template: gridBookingStatus,
			width: "150",
			textAlign: "Center",
		},
		{
			headerText: "Action",
			template: gridActionButton,
			width: "250",
			textAlign: "Center",
		},
	];

	return (
		<div>
			<Navbar extraNavId="id-2" />
			<div className="below-nav">
				<div className="flex-container">
					<BiArrowBack size="24px" />
					<img
						src={require("../Assets/Images/menu-1.jpeg")}
						alt="property"
						className="listing-property-image"
					/>
					<div className="listing-property-details">
						<div className="listing-property-id">#00000000</div>
						<div className="listing-property-address">
							Address of the property
						</div>
						<div className="listing-property-address">City, State</div>
						<div className="listing-property-address">Country, Pincode</div>
					</div>
				</div>

				<div
					style={{
						width: "90vw",
						margin: "40px auto",
					}}>
					<SyncfusionTable
						UsersData={listDetailsData}
						UsersGrid={listDetailsGrid}
					/>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default ListDetails;
