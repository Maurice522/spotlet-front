import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../Assets/Styles/listDetails.css";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import { Button, Box } from "@mui/material";
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
			{props.row.Name}
		</div>
	);

	const gridActionButton = (props) => (
		<Link to={props.row.to} style={{ textDecoration: "none" }}>
			<Button
				variant="outlined"
				onClick={() => setFinal(true)}
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

	const listDetailsData = [
		{
			id: 1,
			action: gridActionButton,
			to: "/listdetailsapproval",
			Name: "John Doe",
			Status: "Under Review",
			DateOfRequest: "12/12/22",
			DateOfEvent: "25/12/22",
			TimeDuration: "12:00 - 23:55, 20hrs",
			TotalAmount: 50000,
		},
		{
			id: 2,
			action: gridActionButton,
			to: "/listdetailsapproval",
			Name: "John Doe",
			Status: "Approved",
			DateOfRequest: "12/12/22",
			DateOfEvent: "25/12/22",
			TimeDuration: "12:00 - 23:55, 20hrs",
			TotalAmount: 50000,
		},
		{
			id: 3,
			action: gridActionButton,
			to: "/listdetailsapproval",
			Name: "John Doe",
			Status: "Approved",
			DateOfRequest: "12/12/22",
			DateOfEvent: "25/12/22",
			TimeDuration: "12:00 - 23:55, 20hrs",
			TotalAmount: 50000,
		},
		{
			id: 4,
			action: gridActionButton,
			to: "/listdetailsapproval",
			Name: "John Doe",
			Status: "Cancelled",
			DateOfRequest: "12/12/22",
			DateOfEvent: "25/12/22",
			TimeDuration: "12:00 - 23:55, 20hrs",
			TotalAmount: 50000,
		},
		{
			id: 5,
			action: gridActionButton,
			to: "/listdetailsapproval",
			Name: "John Doe",
			Status: "Under Review",
			DateOfRequest: "12/12/22",
			DateOfEvent: "25/12/22",
			TimeDuration: "12:00 - 23:55, 20hrs",
			TotalAmount: 50000,
		},
		{
			id: 6,
			action: gridActionButton,
			to: "/listdetailsapproval",
			Name: "John Doe",
			Status: "Under Review",
			DateOfRequest: "12/12/22",
			DateOfEvent: "25/12/22",
			TimeDuration: "12:00 - 23:55, 20hrs",
			TotalAmount: 50000,
		},
		{
			id: 7,
			action: gridActionButton,
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
			headerClassName: "super-app-theme--header",
			headerName: "Name",
			field: "Name",
			renderCell: gridBookingName,
			width: "170",
			textAlign: "Center",
		},

		{
			headerClassName: "super-app-theme--header",
			headerName: "Date Of Request",
			field: "DateOfRequest",
			width: "170",
			textAlign: "Center",
		},
		{
			headerClassName: "super-app-theme--header",
			headerName: "Date Of Event",
			field: "DateOfEvent",
			width: "180",
			textAlign: "Center",
		},
		{
			headerClassName: "super-app-theme--header",
			headerName: "Time, Duration",
			field: "TimeDuration",
			width: "230",
			textAlign: "Center",
		},
		{
			headerClassName: "super-app-theme--header",
			headerName: "Total Amount",
			field: "TotalAmount",
			width: "150",
			textAlign: "Center",
		},
		{
			headerClassName: "super-app-theme--header",
			headerName: "Status",
			field: "Status",
			renderCell: gridBookingStatus,
			width: "170",
			textAlign: "Center",
		},
		{
			headerClassName: "super-app-theme--header",
			headerName: "Action",
			field: "action",
			renderCell: gridActionButton,
			width: "150",
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

				<Box
					sx={{
						width: "90vw",
						height: "80vh",
						margin: "40px auto",
						// "& .super-app-theme--header": {
						// 	backgroundColor: "rgba(255, 7, 0, 0.55)",
						// },
					}}>
					<SyncfusionTable
						UsersData={listDetailsData}
						UsersGrid={listDetailsGrid}
					/>
				</Box>
			</div>
			<Footer />
		</div>
	);
};

export default ListDetails;
