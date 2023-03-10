import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button } from "@mui/material";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../Assets/Styles/bookingList.css";
import SyncfusionTable from "../Components/BookingListing/SyncFusionTable";
import { GoPrimitiveDot } from "react-icons/go";
import { useSelector } from "react-redux";
import { selectUserData } from "../redux/slices/userSlice";
import { locationRequest } from "../services/api";
import { useEffect } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const gridActionButton = (props) => (
	<Link
		to={props.row.to}
		style={{
			textDecoration: "none",
		}}
	>
		<Button
			variant="outlined"
			sx={{
				padding: "6px 10px",
				border: "1px solid #EA4235",
				color: "black",
				fontWeight: "600",
				borderRadius: "4px",
				marginTop: "10px",
			}}
		>
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
		}}
	>
		<GoPrimitiveDot color="#EA4235" />
		{props.row.BookingId}
	</div>
);

const gridBookingStatus = (props) => {
	let color;
	// console.log(props);
	if (props.row.Status === "Under Review") color = "#E8B500";
	else if (props.row.Status === "Approved") color = "#0079D7";
	else if (props.row.Status === "Rejected") color = "#E20000";
	else if (props.row.Status === "Booked") color = "#19AF00";
	else if (props.row.Status === "Cancelled") color = "#808080";

	return (
		<div
			style={{
				textAlign: "center",
				color: color,
			}}
		>
			{props.row.Status}
		</div>
	);
};

const gridLocationId = (props) => (
	<div
		style={{
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			gap: "5px",
		}}
	>
		{props.row.LocationId}
	</div>
);

const bookingGrid = [
	{
		headerName: "Booking ID",
		field: "BookingId",
		renderCell: gridBookingID,
		width: "300",
		headerAlign: "Center",
	},
	{
		headerName: "Location ID",
		field: "LocationId",
		renderCell: gridLocationId,
		width: "180",
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
		headerName: "Date",
		field: "Date",
		width: "170",
		headerAlign: "Center",
	},
	{
		headerName: "Time, Duration",
		field: "TimeDuration",
		width: "230",
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

const mobileBookingGrid = [
	{
		headerName: "Booking ID",
		field: "BookingId",
		renderCell: gridBookingID,
		width: "150",
		headerAlign: "Center",
	},
	{
		headerName: "Status",
		field: "Status",
		renderCell: gridBookingStatus,
		width: "70",
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

const listingGrid = [
	{
		headerName: "LocationId",
		field: "LocationId",
		renderCell: gridLocationId,
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
		width: "170",
		headerAlign: "Center",
	},
	{
		headerName: "Booking Request",
		field: "BookingRequest",
		width: "190",
		headerAlign: "Center",
	},
	{
		headerName: "Action",
		field: "action",
		renderCell: gridActionButton,
		width: "150",
		headerAlign: "Center",
	},
];

const mobileListingGrid = [
	{
		headerName: "LocationId",
		field: "LocationId",
		renderCell: gridLocationId,
		width: "150",
		headerAlign: "Center",
	},
	{
		headerName: "Status",
		field: "Status",
		renderCell: gridBookingStatus,
		width: "70",
		headerAlign: "Center",
	},
	{
		headerName: "Action",
		field: "action",
		width: "120",
		renderCell: gridActionButton,
		headerAlign: "Center",
	},
];

const BookingList = () => {
	const [active, setActive] = useState(0);
	const userData = useSelector(selectUserData);
	// console.log(userData)
	const [locrequests, setLocRequests] = useState([]);
	let x = window.matchMedia("(max-width: 576px)");
	useEffect(() => {
		console.log(userData?.portfolio);
		userData &&
			userData?.listedLocations?.map(async (loc) => {
				try {
					const response = await locationRequest(loc?.location_id);
					console.log(response.data.length);
					setLocRequests((prev) => [...prev, response.data.length]);
				} catch (error) {
					console.log(error);
				}
			});
		// console.log(locrequests);
	}, [userData]);

	console.log(userData);

	let bookingData = userData?.portfolio?.map((booking, index) => {
		let endTime =
			(Number(booking?.bookedTimeDates?.at(0)?.bookedTime?.substr(0, 2)) +
				Number(booking.bookedTimeDates?.at(0)?.bookedHours)) %
			24;
		let ampm = booking.bookedTimeDates?.at(0)?.bookedTime?.substr(6, 7);
		if (endTime > 12) {
			endTime = endTime % 12;
			if (endTime < 10) {
				endTime = "0" + endTime;
			}
			ampm = ampm == "pm" ? "am" : "pm";
		}
		return {
			id: index,
			action: gridActionButton,
			to: `/bookingdetails/${booking?._id}`,
			BookingId: booking?._id,
			LocationId: booking?.property_id,
			Status: booking?.status,
			Date:
				booking?.bookedTimeDates
					?.at(0)
					?.bookedDate?.split("-")[2]
					.split("T")[0] +
				"-" +
				booking?.bookedTimeDates?.at(0)?.bookedDate?.split("-")[1] +
				"-" +
				booking?.bookedTimeDates?.at(0)?.bookedDate?.split("-")[0],
			TimeDuration:
				booking?.bookedTimeDates?.at(0)?.bookedTime +
				"-" +
				endTime +
				booking?.bookedTimeDates?.at(0)?.bookedTime?.substr(2, 4) +
				ampm +
				", " +
				booking?.bookedTimeDates?.at(0)?.bookedHours +
				"hrs",
			TotalAmount: "???" + parseInt(booking?.final_amount),
		};
	});
	bookingData?.reverse();

	// const bookingData = [
	// 	{
	// 		id: 1,
	// 		action: gridActionButton,
	// 		to: `/bookingdetails/1}`,
	// 		BookingId: "booking?.bookingId",
	// 		Status: "booking?.status",
	// 		Date: "formattedDate",
	// 		TimeDuration: "4 hours",
	// 		TotalAmount: "booking?.total_amt",
	// 	},
	// ];

	let listingData = userData?.listedLocations?.map((loc, index) => {
		const date = new Date(loc?.createdAt);
		const yyyy = date.getFullYear();
		let mm = date.getMonth() + 1; // Months start at 0!
		let dd = date.getDate();

		if (dd && dd < 10) dd = "0" + dd;
		if (mm && mm < 10) mm = "0" + mm;

		const formattedToday = dd + "/" + mm + "/" + yyyy;
		return {
			action: gridActionButton,
			LocationId: loc?.location_id,
			Status: loc?.verified,
			Date: formattedToday,
			id: index,
			to: "/listdetails/" + loc.location_id,
			BookingRequest: locrequests?.[index]
				? `${locrequests?.[index]} Requests`
				: "0 Requests",
		};
	});
	listingData?.reverse();

	// const listingData = [
	// 	{
	// 		action: "gridActionButton",
	// 		LocationId: "loc?.location_id",
	// 		Status: "loc.verified",
	// 		id: "index",
	// 		to: "/listdetails/2",
	// 		BookingRequest: "`${locrequests?.at(index)} Requests`",
	// 	},
	// ];
	// console.log("Booking Data", bookingData);
	// console.log("Listing Data", listingData);

	const { bookingItem } = useParams();

	useEffect(() => {
		if (bookingItem === ":booking") setActive(0);
		else setActive(1);
	}, [bookingItem]);

	const navigate = useNavigate();

	// const sortedData = (obj) => {
	// 	let newArray = [];
	// 	console.log(obj);
	// 	Object.keys(obj)
	// 		.sort()
	// 		.reverse()

	// 	console.log(obj);
	// 	return newArray;
	// };

	// useEffect(() => {
	// 	listingData = sortedData(listingData);
	// 	bookingData = sortedData(bookingData);
	// }, []);

	return (
		<div>
			<Navbar extraNavId="id-2" />
			<div className="below-nav">
				<div className="booking-list-header" style={{ position: "relative" }}>
					<Link to="/">
						<ArrowBackIcon
							style={{
								position: "absolute",
								left: "0%",
								bottom: "20%",
								fontSize: "32px",
								color: "f26767",
							}}
						/>
					</Link>
					<div
						className={active === 0 ? "chosen option" : "option"}
						onClick={() => {
							setActive(0);
							navigate("/bookinglist/:booking");
						}}
					>
						Booking
					</div>
					<div
						className={active === 1 ? "chosen option" : "option"}
						onClick={() => {
							setActive(1);
							navigate("/bookinglist/:listing");
						}}
					>
						Listing
					</div>
				</div>
				{active === 0 ? (
					<div
						style={{
							width: "90vw",
							margin: "40px auto",
							height: "80vh",
						}}
					>
						<SyncfusionTable
							UsersData={bookingData}
							UsersGrid={x.matches ? mobileBookingGrid : bookingGrid}
							content={"Booked"}
						/>
					</div>
				) : (
					<div
						style={{
							width: "57vw",
							margin: "40px auto",
							height: "85vh",
						}}
					>
						<SyncfusionTable
							UsersData={listingData}
							UsersGrid={x.matches ? mobileListingGrid : listingGrid}
							content={"Listed"}
						/>
					</div>
				)}
			</div>

			<Footer />
		</div>
	);
};

export default BookingList;
