import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import Navbar from "../Components/Navbar";
import "../Assets/Styles/bookingList.css";
import SyncfusionTable from "../Components/BookingListing/SyncFusionTable";
import { GoPrimitiveDot } from "react-icons/go";

const bookingData = [
	{
		to: "/bookingdetails",
		BookingId: "#00000000",
		Status: "Under Review",
		Date: "12/12/22",
		TimeDuration: "12:00 - 23:55, 20hrs",
		Attendies: 1000,
		TotalAmount: 50000,
	},
	{
		to: "/bookingdetails",
		BookingId: "#00000000",
		Status: "Approved",
		Date: "12/12/22",
		TimeDuration: "12:00 - 23:55, 20hrs",
		Attendies: 1000,
		TotalAmount: 50000,
	},
	{
		to: "/bookingdetails",
		BookingId: "#00000000",
		Status: "Booked",
		Date: "12/12/22",
		TimeDuration: "12:00 - 23:55, 20hrs",
		Attendies: 1000,
		TotalAmount: 50000,
	},
	{
		to: "/bookingdetails",
		BookingId: "#00000000",
		Status: "Cancelled",
		Date: "12/12/22",
		TimeDuration: "12:00 - 23:55, 20hrs",
		Attendies: 1000,
		TotalAmount: 50000,
	},
	{
		to: "/bookingdetails",
		BookingId: "#00000000",
		Status: "Under Review",
		Date: "12/12/22",
		TimeDuration: "12:00 - 23:55, 20hrs",
		Attendies: 1000,
		TotalAmount: 50000,
	},
	{
		to: "/bookingdetails",
		BookingId: "#00000000",
		Status: "Under Review",
		Date: "12/12/22",
		TimeDuration: "12:00 - 23:55, 20hrs",
		Attendies: 1000,
		TotalAmount: 50000,
	},
	{
		to: "/bookingdetails",
		BookingId: "#00000000",
		Status: "Under Review",
		Date: "12/12/22",
		TimeDuration: "12:00 - 23:55, 20hrs",
		Attendies: 1000,
		TotalAmount: 50000,
	},
	{
		to: "/bookingdetails",
		BookingId: "#00000000",
		Status: "Under Review",
		Date: "12/12/22",
		TimeDuration: "12:00 - 23:55, 20hrs",
		Attendies: 1000,
		TotalAmount: 50000,
	},
	{
		to: "/bookingdetails",
		BookingId: "#00000000",
		Status: "Under Review",
		Date: "12/12/22",
		TimeDuration: "12:00 - 23:55, 20hrs",
		Attendies: 1000,
		TotalAmount: 50000,
	},
	{
		to: "/bookingdetails",
		BookingId: "#00000000",
		Status: "Under Review",
		Date: "12/12/22",
		TimeDuration: "12:00 - 23:55, 20hrs",
		Attendies: 1000,
		TotalAmount: 50000,
	},
	{
		to: "/bookingdetails",
		BookingId: "#00000000",
		Status: "Under Review",
		Date: "12/12/22",
		TimeDuration: "12:00 - 23:55, 20hrs",
		Attendies: 1000,
		TotalAmount: 50000,
	},
	{
		to: "/bookingdetails",
		BookingId: "#00000000",
		Status: "Under Review",
		Date: "12/12/22",
		TimeDuration: "12:00 - 23:55, 20hrs",
		Attendies: 1000,
		TotalAmount: 50000,
	},
];

const gridActionButton = (props) => (
	<Link
		to={props.to}
		style={{
			textDecoration: "none",
		}}>
		<Button
			variant="outlined"
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

const gridBookingID = (props) => (
	<div
		style={{
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			gap: "5px",
		}}>
		<GoPrimitiveDot color="#EA4235" />
		{props.BookingId}
	</div>
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

const bookingGrid = [
	{
		headerText: "Booking ID",
		template: gridBookingID,
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
		headerText: "Date",
		field: "Date",
		width: "100",
		textAlign: "Center",
	},
	{
		headerText: "Time, Duration",
		field: "TimeDuration",
		width: "200",
		textAlign: "Center",
	},
	{
		headerText: "Attendies",
		field: "Attendies",
		width: "100",
		textAlign: "Center",
	},
	{
		headerText: "Total Amount",
		field: "TotalAmount",
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

const listingData = [
	{
		BookingId: "#00000000",
		Status: "Under Review",
		to: "/listdetails",
		BookingRequest: "12 Requests",
	},
	{
		BookingId: "#00000000",
		Status: "Approved",
		to: "/listdetails",
		BookingRequest: "12 Requests",
	},
	{
		BookingId: "#00000000",
		Status: "Cancelled",
		to: "/listdetails",
		BookingRequest: "12 Requests",
	},
	{
		BookingId: "#00000000",
		Status: "Booked",
		to: "/listdetails",
		BookingRequest: "12 Requests",
	},
	{
		BookingId: "#00000000",
		Status: "Under Review",
		to: "/listdetails",
		BookingRequest: "12 Requests",
	},
	{
		BookingId: "#00000000",
		Status: "Under Review",
		to: "/listdetails",
		BookingRequest: "12 Requests",
	},
	{
		BookingId: "#00000000",
		Status: "Under Review",
		to: "/listdetails",
		BookingRequest: "12 Requests",
	},
];

const listingGrid = [
	{
		headerText: "Booking ID",
		template: gridBookingID,
		width: "200",
		textAlign: "Center",
	},
	{
		headerText: "Status",
		template: gridBookingStatus,
		width: "200",
		textAlign: "Center",
	},
	{
		headerText: "Booking Request",
		field: "BookingRequest",
		width: "200",
		textAlign: "Center",
	},
	{
		headerText: "Action",
		template: gridActionButton,
		width: "250",
		textAlign: "Center",
	},
];

const BookingList = () => {
	const [active, setActive] = useState(0);
	return (
		<div>
			<Navbar extraNavId="id-2" />
			<div className="below-nav">
				<div className="booking-list-header">
					<div
						className={active === 0 ? "chosen option" : "option"}
						onClick={() => {
							setActive(0);
						}}>
						Booking
					</div>
					<div
						className={active === 1 ? "chosen option" : "option"}
						onClick={() => {
							setActive(1);
						}}>
						Listing
					</div>
				</div>
				{active === 0 ? (
					<div
						style={{
							width: "80vw",
							margin: "40px auto",
						}}>
						<SyncfusionTable UsersData={bookingData} UsersGrid={bookingGrid} />
					</div>
				) : (
					<div
						style={{
							width: "55vw",
							margin: "40px auto",
						}}>
						<SyncfusionTable UsersData={listingData} UsersGrid={listingGrid} />
					</div>
				)}
			</div>
		</div>
	);
};

export default BookingList;
