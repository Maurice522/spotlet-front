import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Button, Avatar } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import {
	createConversation,
	getUserData,
	locationRequest,
	updateBookingStatus,
	getLocation,
	bookedDatesApi,
} from "../services/api";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { selectUserData } from "../redux/slices/userSlice";
import axios from "axios";

const ListDetailsComponent = () => {
	const [bookingDetail, setBookingDetail] = useState({});
	const bookingId = window.location.pathname.substr(34);
	const locationId = window.location.pathname.substr(10, 9);
	const [userData, setUserData] = useState({});
	const [locationDetails, setLocationDetails] = useState({});
	const [bookedDates, setBookedDates] = useState([]);
	const ownerData = useSelector(selectUserData);

	useEffect(() => {
		locationRequest(locationId)
			.then((res) =>
				res.data.map((req) => {
					// console.log(req);
					if (req._id === bookingId) setBookingDetail(req);
				})
			)
			.catch((err) => console.log(err));
	}, []);
	useEffect(() => {
		getUserData(bookingDetail?.user_id)
			.then((res) => setUserData(res.data))
			.catch((err) => console.log(err));
	}, [bookingDetail]);
	useEffect(() => {
		getLocation(locationId)
			.then((res) => {
				setLocationDetails(res.data);
				setBookedDates(res.data.bookedDates);
			})
			.catch((err) => console.log(err));
	}, [locationId]);
	// console.log(bookingDetail);
	// console.log(form);
	// console.log(userData);
	// console.log(bookingDetail)

	let endTime =
		(Number(bookingDetail?.bookedTimeDates?.at(0)?.bookedTime?.substr(0, 2)) +
			Number(bookingDetail.bookedTimeDates?.at(0)?.bookedHours)) %
		24;
	let ampm = bookingDetail.bookedTimeDates?.at(0)?.bookedTime?.substr(6, 7);
	if (endTime > 12) {
		endTime = endTime % 12;
		if (endTime < 10) {
			endTime = "0" + endTime;
		}
		ampm = ampm == "pm" ? "am" : "pm";
	}

	const date_of_booking =
		bookingDetail?.bookedTimeDates
			?.at(0)
			?.bookedDate?.split("-")[2]
			.split("T")[0] +
		" " +
		toMonthName(
			bookingDetail?.bookedTimeDates?.at(0)?.bookedDate?.split("-")[1]
		) +
		" " +
		bookingDetail?.bookedTimeDates?.at(0)?.bookedDate?.split("-")[0];

	function toMonthName(monthNumber) {
		const date = new Date();
		date.setMonth(monthNumber - 1);

		return date.toLocaleString("en-US", {
			month: "long",
		});
	}

	//Approved
	const updateStatus = async (status) => {
		const data = {
			bookingId,
			locationId,
			status,
			user_id: bookingDetail?.user_id,
		};

		const googleSheetData = {
			host_name: ownerData?.personalInfo?.fullName,
			host_email: ownerData?.personalInfo.email,
			host_phone: ownerData?.personalInfo?.mobile,
			location_address: locationDetails?.property_address?.address,
			location_code: locationDetails?.property_address?.pincode,
			user_name: bookingDetail?.user_data?.fullName,
			user_email: userData?.personalInfo?.email,
			user_phone: userData?.personalInfo?.mobile,
			bill_amount: bookingDetail?.total_amt,
			no_of_hrs: bookingDetail?.duration_in_hours,
			date_of_booking: date_of_booking,
			status: status,
		};
		// console.log(bookingDetail);
		// console.log(locationDetails);
		if (status == "Approved") {
			try {
				const data = {
					bookedDates: [
						...locationDetails.bookedDates,
						...bookingDetail.reqDates,
					],
					location_id: locationId,
				};
				console.log(data);
				await bookedDatesApi(data);
			} catch (error) {
				console.log(error);
			}
		}

		const response = await updateBookingStatus(data);
		try {
			axios
				.post(
					"https://sheet.best/api/sheets/f4acaa59-35f2-4300-8617-a573b0ce7bf8",
					googleSheetData
				)
				.then((response) => {
					console.log(response);
				});
		} catch (error) {
			console.log(error);
		}

		toast.success(response.data);
		// window.history.back();
		window.location.reload();
	};
	//message
	const handleChat = async () => {
		const data = {
			senderId: bookingDetail.owner_id,
			receiverId: bookingDetail.user_id,
			locationId,
		};
		await createConversation(bookingId, data);
		window.location = `/messages/${bookingId}`;
	};
	return (
		<div>
			<Navbar extraNavId="id-2" />
			<div className="below-nav">
				{/* <div className="booking-list-header">
					<div className="option">Booking</div>
					<div className="chosen option">Listing</div>
				</div> */}

				<div className="container">
					<div className="booking-details-body-2">
						<div className="booking-details-body-left">
							<div className="booking-details-header">
								Booking ID - {bookingId}
							</div>
							<div className="grid-container">
								<div>
									<div className="item-heading">Reserved Date</div>
									<div className="item-body">{date_of_booking}</div>
								</div>
								<div>
									<div className="item-heading">Attendies</div>
									<div className="item-body">
										{bookingDetail?.attendies} People
									</div>
								</div>
								<div>
									<div className="item-heading">Reserved Time</div>
									<div className="item-body">
										{bookingDetail?.bookedTimeDates?.at(0)?.bookedTime +
											" to " +
											endTime +
											bookingDetail?.bookedTimeDates
												?.at(0)
												?.bookedTime?.substr(2, 4) +
											ampm}
									</div>
								</div>
								<div>
									<div className="item-heading">Duration</div>
									<div className="item-body">
										{bookingDetail?.bookedTimeDates?.at(0)?.bookedHours} Hrs
									</div>
								</div>
							</div>
							<div className="booking-details-header">User Details</div>
							<div className="grid-container-2">
								<div>
									<div className="item-heading">Name</div>
									<div className="item-body">
										{bookingDetail?.user_data?.fullName}
									</div>
								</div>
								<div>
									<div className="item-heading">Number</div>
									<div className="item-body">
										{userData?.personalInfo?.mobile}
									</div>
								</div>
								<div>
									<div className="item-heading">Email ID</div>
									<div className="item-body">
										{userData?.personalInfo?.email}
									</div>
								</div>
								<div>
									<div className="item-heading">Who Reserves</div>
									<div className="item-body">
										{bookingDetail?.user_data?.who_reserves}
									</div>
								</div>
								<div>
									<div className="item-heading">Company Name</div>
									<div className="item-body">
										{bookingDetail?.user_data?.who_reserves === "Individual"
											? bookingDetail?.user_data?.profession
											: bookingDetail?.user_data?.company}
									</div>
								</div>
								<div>
									<div className="item-heading">Activity</div>
									<div className="item-body">{bookingDetail?.activity}</div>
								</div>
							</div>
						</div>
						<div className="booking-details-body-right">
							<div data-attribute-3>
								<div data-attribute-1>Total</div>
								<div data-attribute-1>₹ {bookingDetail?.total_amt}</div>
							</div>
							<div>
								<Button
									variant={
										bookingDetail?.status === "Rejected"
											? "outlined"
											: "contained"
									}
									sx={{
										width: "20vw",
										backgroundColor: "#EA4235",
										color: "white",
										borderRadius: "4px",
										marginTop: "10px",
									}}
									disabled={bookingDetail?.status !== "Under Review"}
									onClick={() => updateStatus("Approved")}
								>
									Approve
								</Button>
								<br />
								<Button
									variant={
										bookingDetail?.status === "Rejected"
											? "contained"
											: "outlined"
									}
									sx={{
										width: "20vw",
										color: "black",
										borderRadius: "4px",
										border: "2px solid #EA4235",
										marginTop: "10px",
									}}
									disabled={bookingDetail?.status !== "Under Review"}
									onClick={() => updateStatus("Rejected")}
								>
									Reject
								</Button>
							</div>
						</div>
					</div>
				</div>

				<div className="container">
					<div className="booking-details-header">Message</div>
					<div className="user-info">
						{userData?.personalInfo?.profile_pic ? (
							<img src={userData?.personalInfo?.profile_pic} alt="profile" />
						) : (
							<Avatar className="user-dp" />
						)}
						<span className="item-heading">
							{userData?.personalInfo?.fullName}
						</span>
					</div>
					<div className="booking-details-body">
						<div className="item-heading">Message to the host: </div>
						<div className="item-info">{bookingDetail?.user_data?.message}</div>
						<div style={{ marginLeft: "auto" }}>
							<Button
								variant="contained"
								sx={{
									width: "20vw",
									backgroundColor: "#EA4235",
									color: "white",
									borderRadius: "4px",
									marginTop: "10px",
									flexGrow: "1",
								}}
								onClick={handleChat}
							>
								Message
							</Button>
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default ListDetailsComponent;
