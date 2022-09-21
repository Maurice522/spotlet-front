import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Button, Avatar } from "@mui/material";
import "../Assets/Styles/bookingDetails.css";
import { useSelector } from "react-redux";
import { selectUserData } from "../redux/slices/userSlice";
import { useEffect } from "react";
import { getUserData } from "../services/api";

const BookingDetails = () => {
	const userData = useSelector(selectUserData);
	const [booking, setBooking] = useState({});
	const [ownerData, setOwnerData] = useState({});
	const bookingId = window.location.pathname.substr(16);
	const endTime =( Number(booking?.time?.substr(0,2))+Number(booking?.duration_in_hours))%24;
		const date = new Date(booking?.timestamp?._seconds*1000)
		const yyyy = date.getFullYear();
		let mm = date.getMonth() + 1; // Months start at 0!
		let dd = date.getDate();

		if (dd && dd < 10) dd = '0' + dd;
		if (mm && mm < 10) mm = '0' + mm;
		const discount =  booking?.duration_in_hours === "24" ? 0.8 : ( booking?.duration_in_hours === "12" ? 0.9 : 1);
		const perHourCost = (((booking?.total_amt-40) / booking?.duration_in_hours)/discount)?.toFixed(2)
	useEffect(() => {
		userData?.portfolio.map(booking => {
			if(booking.bookingId === bookingId)
			   setBooking(booking);
		})
	}, [userData])
	useEffect(() => {
		getUserData(booking?.owner_id)
		.then(res => setOwnerData(res.data))
		.catch(err => console.log(err))
	},[booking])
	function toMonthName(monthNumber) {
		const date = new Date();
		date.setMonth(monthNumber - 1);
	  
		return date.toLocaleString('en-US', {
		  month: 'long',
		});
	  }
	return (
		<div>
			<Navbar extraNavId="id-2" />
			<div className="below-nav">
				<div className="container">
					<div className="booking-details-header">Booking Details</div>
					<div className="booking-details-body">
						<div className="booking-details-body-left">
							<div className="item-heading">{booking?.property_id}</div>
							<div className="grid-container">
								<div>
									<div className="item-heading">Reserved Date</div>
									<div className="item-body">{dd}th {toMonthName(mm)} {yyyy}</div>
								</div>
								<div>
									<div className="item-heading">Attendies</div>
									<div className="item-body">{booking?.attendies} People</div>
								</div>
								<div>
									<div className="item-heading">Reserved Time</div>
									<div className="item-body">{booking?.time + " to " + endTime + booking?.time?.substr(2)}</div>
								</div>
								<div>
									<div className="item-heading">Duration</div>
									<div className="item-body">{booking?.duration_in_hours} Hrs</div>
								</div>
							</div>
						</div>
						<div className="booking-details-body-right">
							<div data-attribute-3>
								<div data-attribute-4>Rs {perHourCost} * {booking?.duration_in_hours}  hrs</div>
								<div data-attribute-4>Rs {(perHourCost * booking?.duration_in_hours)?.toFixed(2)}</div>
							</div>
							<div data-attribute-3>
								<div data-attribute-4>Processing Fee</div>
								<div data-attribute-4>Rs 40</div>
							</div>

							<div data-attribute-3>
								<div data-attribute-1>Total</div>
								<div data-attribute-1>Rs {(booking?.total_amt)?.toFixed(2)}</div>
							</div>

							<Button
								variant="contained"
								sx={{
									width: "20vw",
									backgroundColor: "#EA4235",
									color: "white",
									borderRadius: "4px",
									marginTop: "10px",
								}}
								disabled = {booking?.payment_status !== "Under Review"}
								>
								Reject
							</Button>
						</div>
					</div>
					<div style={{marginLeft : "auto", width: "20vw", display : `${booking?.payment_status === "approved" ?"none" : "block" }`}}>
							<Button
								variant="contained"
								sx={{
									width: "20vw",
									backgroundColor: "#EA4235",
									color: "white",
									borderRadius: "4px",
									marginTop: "10px",
								}}
								>
								Payment
							</Button>
					</div>
					
				</div>
				<div className="container">
					<div className="booking-details-header">Message</div>
					<div className="user-info">
					{ownerData?.personalInfo?.profile_pic ? (
						<img src={ownerData?.personalInfo?.profile_pic} alt="profile" />
						) : (
						<Avatar className="user-dp" />
						)}
						<span className="item-heading">{ownerData?.personalInfo?.fullName}</span>
					</div>
					<div className="booking-details-body">
						<div className="item-heading" style={{width:"30%"}}>Message to the host: </div>
						<div className="item-info">
						{booking?.user_data?.message}
						</div>
						<div>
							<Button
								variant="contained"
								sx={{
									width: "20vw",
									backgroundColor: "#EA4235",
									color: "white",
									borderRadius: "4px",
									marginTop: "10px",
									flexGrow: "1",
								}}>
								Message
							</Button>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="booking-details-header">
						Terms and Conditions Agreed
					</div>
					<div className="terms-conditions item-info">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
						hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus
						rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat.
						Nulla aliquet porttitor venenatis. Donec a dui et dui fringilla
						consectetur id nec massa. Aliquam erat volutpat. Lorem ipsum dolor
						sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed
						sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar
						aliquam. Ut aliquet tristique nisl vitae volutpat. Nulla aliquet
						porttitor venenatis. Donec a dui et dui fringilla consectetur id nec
						massa. Aliquam erat volutpat. Lorem ipsum dolor sit amet,
						consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin
						pellentesque. Nunc posuere purus rhoncus pulvinar aliquam. Ut
						aliquet tristique nisl vitae volutpat. Nulla aliquet porttitor
						venenatis. Donec a dui et dui fringilla consectetur id nec massa.
						Aliquam erat volutpat.
					</div>

					<div className="terms-conditions item-info">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
						hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus
						rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat.
						Nulla aliquet porttitor venenatis. Donec a dui et dui fringilla
						consectetur id nec massa. Aliquam erat volutpat. Lorem ipsum dolor
						sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed
						sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar
						aliquam. Ut aliquet tristique nisl vitae volutpat. Nulla aliquet
						porttitor venenatis. Donec a dui et dui fringilla consectetur id nec
						massa. Aliquam erat volutpat. Lorem ipsum dolor sit amet,
						consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin
						pellentesque. Nunc posuere purus rhoncus pulvinar aliquam. Ut
						aliquet tristique nisl vitae volutpat. Nulla aliquet porttitor
						venenatis. Donec a dui et dui fringilla consectetur id nec massa.
						Aliquam erat volutpat.
					</div>
					<div className="terms-conditions item-info">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
						hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus
						rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat.
						Nulla aliquet porttitor venenatis. Donec a dui et dui fringilla
						consectetur id nec massa. Aliquam erat volutpat. Lorem ipsum dolor
						sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed
						sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar
						aliquam. Ut aliquet tristique nisl vitae volutpat. Nulla aliquet
						porttitor venenatis. Donec a dui et dui fringilla consectetur id nec
						massa. Aliquam erat volutpat. Lorem ipsum dolor sit amet,
						consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin
						pellentesque. Nunc posuere purus rhoncus pulvinar aliquam. Ut
						aliquet tristique nisl vitae volutpat. Nulla aliquet porttitor
						venenatis. Donec a dui et dui fringilla consectetur id nec massa.
						Aliquam erat volutpat.
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default BookingDetails;
