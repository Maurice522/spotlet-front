import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../Assets/Styles/listDetails.css";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import { Button, Box } from "@mui/material";
import { GoPrimitiveDot } from "react-icons/go";
import SyncfusionTable from "../Components/BookingListing/SyncFusionTable";
import { useSelector } from "react-redux";
import { selectUserData } from "../redux/slices/userSlice";
import { locationRequest } from "../services/api";

const ListDetails = ({ setFinal }) => {
	const userData = useSelector(selectUserData);
	const [locationData, setLocationData] = useState({});
	const locationId = window.location.pathname.substr(13);
	const [requests, setRequests] = useState([]);
	useEffect(() => {
		userData?.listedLocations.map(loc => {
			if(loc.location_id === locationId)
			   setLocationData(loc);
		})
	}, [userData])
	console.log(locationData);
	useEffect(() => {
		 locationRequest(locationId).then(res => {
			setRequests(res.data.requests);
		 }).catch(err => {
			console.log(err);
		 })
	},[])
	//console.log(locationData);
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
		//console.log(props);
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
	const listDetailsData = requests?.map( (request, index) => {
		const endTime =( Number(request?.time.substr(0,2))+Number(request?.duration_in_hours))%24;
		const date = new Date(request?.timestamp?._seconds*1000)
		const yyyy = date.getFullYear();
		let mm = date.getMonth() + 1; // Months start at 0!
		let dd = date.getDate();

		if (dd && dd < 10) dd = '0' + dd;
		if (mm && mm < 10) mm = '0' + mm;

		const formattedToday = dd + '/' + mm + '/' + yyyy;
		return {
			id: index,
			action: gridActionButton,
			to: `/location/${locationId}/bookingdetail/${request?.req_id}`,
			Name: request?.user_data?.fullName,
			Status: request?.payment_status,
			DateOfRequest: formattedToday,
			DateOfEvent: request?.date,
			TimeDuration: request?.time + " - " + endTime + request?.time.substr(2) + ", " + request?.duration_in_hours,
			TotalAmount: request?.total_amt,
		}
	})

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
						src={locationData?.images?.at(0)}
						alt="property"
						className="listing-property-image"
						style={{borderRadius : "8px"}}
					/>
					<div className="listing-property-details">
						<div className="listing-property-id">{locationId}</div>
						<div className="listing-property-address">
							{locationData?.property_address?.address}
						</div>
						<div className="listing-property-address">{locationData?.property_address?.city} {locationData?.property_address?.state}</div>
						<div className="listing-property-address">{locationData?.property_address?.country} , {locationData?.property_address?.pincode}</div>
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
