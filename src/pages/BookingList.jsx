import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../Assets/Styles/bookingList.css";
import SyncfusionTable from "../Components/BookingListing/SyncFusionTable";
import { GoPrimitiveDot } from "react-icons/go";

const gridActionButton = (props) => (
	<Link
		to={props.row.to}
		style={{
			textDecoration: "none",
		}}>
		<Button
			variant="outlined"
			sx={{
				padding: "6px 10px",
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
		{props.row.BookingId}
	</div>
);

const gridBookingStatus = (props) => {
	let color;
	console.log(props);
	if (props.row.Status === "Under Review") color = "#E8B500";
	else if (props.row.Status === "Approved") color = "#0079D7";
	else if (props.row.Status === "Cancelled") color = "#E20000";
	else if (props.row.Status === "Booked") color = "#19AF00";

	return (
		<div
			style={{
				textAlign: "center",
				color: color,
			}}>
			{props.row.Status}
		</div>
	);
};

const bookingData = [
	{
		id: 1,
		action: gridActionButton,
		to: "/bookingdetails",
		BookingId: "#00000000",
		Status: "Under Review",
		Date: "12/12/22",
		TimeDuration: "12:00 - 23:55, 20hrs",
		Attendies: 1000,
		TotalAmount: 50000,
	},
	{
		id: 2,

		action: gridActionButton,
		to: "/bookingdetails",
		BookingId: "#00000000",
		Status: "Approved",
		Date: "12/12/22",
		TimeDuration: "12:00 - 23:55, 20hrs",
		Attendies: 1000,
		TotalAmount: 50000,
	},
	{
		id: 3,

		action: gridActionButton,
		to: "/bookingdetails",
		BookingId: "#00000000",
		Status: "Booked",
		Date: "12/12/22",
		TimeDuration: "12:00 - 23:55, 20hrs",
		Attendies: 1000,
		TotalAmount: 50000,
	},
	{
		id: 4,

		action: gridActionButton,
		to: "/bookingdetails",
		BookingId: "#00000000",
		Status: "Cancelled",
		Date: "12/12/22",
		TimeDuration: "12:00 - 23:55, 20hrs",
		Attendies: 1000,
		TotalAmount: 50000,
	},
	{
		id: 5,

		action: gridActionButton,
		to: "/bookingdetails",
		BookingId: "#00000000",
		Status: "Under Review",
		Date: "12/12/22",
		TimeDuration: "12:00 - 23:55, 20hrs",
		Attendies: 1000,
		TotalAmount: 50000,
	},
	{
		id: 6,

		action: gridActionButton,
		to: "/bookingdetails",
		BookingId: "#00000000",
		Status: "Under Review",
		Date: "12/12/22",
		TimeDuration: "12:00 - 23:55, 20hrs",
		Attendies: 1000,
		TotalAmount: 50000,
	},
	{
		id: 7,

		action: gridActionButton,
		to: "/bookingdetails",
		BookingId: "#00000000",
		Status: "Under Review",
		Date: "12/12/22",
		TimeDuration: "12:00 - 23:55, 20hrs",
		Attendies: 1000,
		TotalAmount: 50000,
	},
	{
		id: 8,

		action: gridActionButton,
		to: "/bookingdetails",
		BookingId: "#00000000",
		Status: "Under Review",
		Date: "12/12/22",
		TimeDuration: "12:00 - 23:55, 20hrs",
		Attendies: 1000,
		TotalAmount: 50000,
	},
	{
		id: 9,

		action: gridActionButton,
		to: "/bookingdetails",
		BookingId: "#00000000",
		Status: "Under Review",
		Date: "12/12/22",
		TimeDuration: "12:00 - 23:55, 20hrs",
		Attendies: 1000,
		TotalAmount: 50000,
	},
	{
		id: 10,

		action: gridActionButton,
		to: "/bookingdetails",
		BookingId: "#00000000",
		Status: "Under Review",
		Date: "12/12/22",
		TimeDuration: "12:00 - 23:55, 20hrs",
		Attendies: 1000,
		TotalAmount: 50000,
	},
	{
		id: 11,

		action: gridActionButton,
		to: "/bookingdetails",
		BookingId: "#00000000",
		Status: "Under Review",
		Date: "12/12/22",
		TimeDuration: "12:00 - 23:55, 20hrs",
		Attendies: 1000,
		TotalAmount: 50000,
	},
	{
		id: 12,

		action: gridActionButton,
		to: "/bookingdetails",
		BookingId: "#00000000",
		Status: "Under Review",
		Date: "12/12/22",
		TimeDuration: "12:00 - 23:55, 20hrs",
		Attendies: 1000,
		TotalAmount: 50000,
	},
];

const bookingGrid = [
	{
		headerName: "Booking ID",
		field: "BookingId",
		renderCell: gridBookingID,
		width: "180",
		headerAlign: "Center",
	},
	{
		headerName: "Status",
		field: "Status",
		renderCell: gridBookingStatus,
		width: "180",
		headerAlign: "Center",
	},
	{
		headerName: "Date",
		field: "Date",
		width: "160",
		headerAlign: "Center",
	},
	{
		headerName: "Time, Duration",
		field: "TimeDuration",
		width: "225",
		headerAlign: "Center",
	},
	{
		headerName: "Attendies",
		field: "Attendies",
		width: "150",
		headerAlign: "Center",
	},
	{
		headerName: "Total Amount",
		field: "TotalAmount",
		width: "140",
		headerAlign: "Center",
	},
	{
		headerName: "Action",
		renderCell: gridActionButton,
		field: "action",
		width: "120",
		headerAlign: "Center",
	},
];

const listingData = [
	{
		action: gridActionButton,
		BookingId: "#00000000",
		Status: "Under Review",
		id: 1,
		to: "/listdetails",
		BookingRequest: "12 Requests",
	},
	{
		action: gridActionButton,
		BookingId: "#00000000",
		Status: "Approved",
		id: 2,
		to: "/listdetails",
		BookingRequest: "12 Requests",
	},
	{
		action: gridActionButton,
		BookingId: "#00000000",
		Status: "Cancelled",
		id: 3,
		to: "/listdetails",
		BookingRequest: "12 Requests",
	},
	{
		action: gridActionButton,
		BookingId: "#00000000",
		Status: "Booked",
		id: 4,
		to: "/listdetails",
		BookingRequest: "12 Requests",
	},
	{
		action: gridActionButton,
		BookingId: "#00000000",
		Status: "Under Review",
		id: 5,
		to: "/listdetails",
		BookingRequest: "12 Requests",
	},
	{
		action: gridActionButton,
		BookingId: "#00000000",
		Status: "Under Review",
		id: 6,
		to: "/listdetails",
		BookingRequest: "12 Requests",
	},
	{
		action: gridActionButton,
		BookingId: "#00000000",
		Status: "Under Review",
		id: 7,
		to: "/listdetails",
		BookingRequest: "12 Requests",
	},
];

const listingGrid = [
	{
		headerName: "Booking ID",
		field: "BookingId",
		renderCell: gridBookingID,
		width: "200",
		headerAlign: "Center",
	},
	{
		headerName: "Status",
		field: "Status",
		renderCell: gridBookingStatus,
		width: "200",
		headerAlign: "Center",
	},
	{
		headerName: "Booking Request",
		field: "BookingRequest",
		width: "200",
		headerAlign: "Center",
	},
	{
		headerName: "Action",
		field: "action",
		width: "150",
		headerAlign: "Center",
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
							width: "85vw",
							margin: "40px auto",
							height: "80vh",
						}}>
						<SyncfusionTable UsersData={bookingData} UsersGrid={bookingGrid} />
					</div>
				) : (
					<div
						style={{
							width: "57vw",
							margin: "40px auto",
							height: "80vh",
						}}>
						<SyncfusionTable UsersData={listingData} UsersGrid={listingGrid} />
					</div>
				)}
			</div>

			<Footer />
		</div>
	);
};

export default BookingList;
