import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Button, Avatar, Rating, Modal, MenuItem, Select } from "@mui/material";
import "../Assets/Styles/bookingDetails.css";
import { useDispatch, useSelector } from "react-redux";
import { addUser, selectUserData } from "../redux/slices/userSlice";
import { useEffect } from "react";
import {
	createConversation,
	getLocation,
	addReviewRating,
	updateBookingStatus,
	addADayInBooking,
} from "../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import GoogleMap from "../Components/GoogleMap";
import axios from "axios";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import DatePicker from "react-datepicker";
import moment from "moment";
import { IoMdArrowDropdown } from "react-icons/io";

const BookingDetails = () => {
	let data;
	let disabledDates = [];
	let finalDates = [];
	let start24, end24, startampm, endampm;

	const userData = useSelector(selectUserData);
	const dispatch = useDispatch();
	const [booking, setBooking] = useState({});
	const[timeSlot,setTimeSlot]=useState("Select")
	// const [ownerData, setOwnerData] = useState({});
	const [locationData, setLocationData] = useState({});
	const [deleteBook, setDeteleBook] = useState(false);
	const [openModal, setopenModal] = useState(false);
	const handleopenModal = () => setopenModal(true);
	const handleCloseModal = () => setopenModal(false);
	const [cord, setCord] = useState({
		lat: 0,
		lng: 0,
	});
	const [rating, setRating] = useState(0);
	const [review, setReview] = useState("");
	const [active, setActive] = useState(false);
	const [timings, setTimings] = useState([]);
	const [bookedDates, setBookedDates] = useState([]);
	const [dateRange, setDateRange] = useState({
		startDate: new Date(moment().startOf("isoweek").utc()),
		endDate: new Date(moment().endOf("week").utc()),
	});
	const [allday, setAllday] = useState(false);
	const [timemenuitems, setTimemenuitems] = useState([]);

	const [bookedDay, setBookedDay] = useState();
	const [bookedTime, setBookedTime] = useState();
	const [bookedHours, setBookedHours] = useState();

	const bookingId = window.location.pathname.substr(16);
	// const endTime = (Number(booking?.time?.substr(0, 2)) + Number(booking?.duration_in_hours)) % 24;
	const ownerData = useSelector(selectUserData);
	console.log("bookingData",booking)
	useEffect(() => {
		// console.log(userData);
		userData?.portfolio.map((booking) => {
			if (booking?._id === bookingId) {
				setBooking(booking);
				getLocation(booking?.property_id)
					.then((res) => {
						setLocationData(res.data);
					})
					.catch((err) => console.log(err));
			}
		});
	}, [userData]);

useEffect(()=>{
if(JSON.stringify(booking)==="{}"){return}
console.log("bookinggg",booking)

},[booking])

	// console.log(bookingId)
	useEffect(() => {
		// console.log(v1, v2, v3, v4, v5, v6);
		setTimings(locationData?.timings);
		locationData?.bookedDates?.map((date) => {
			const newDate = new Date(date);
			setBookedDates((prev) => [...prev, newDate]);
		});
	}, [locationData]);

	const isDisabled = (date) => {
		if (!timings) return;
		Object.keys(timings).forEach(function (key, index) {
			if (!timings[key].open) {
				// console.log(key);
				disabledDates.push(key.substring(0, 3));
			}
		});
		// for (let index = 0; index < 7; index++) {
		// 	const weekDay = moment().day(disabledDates[index]).format("D");
		// 	finalDates.push(weekDay)
		// }

		for (let i = 0; i < 7; i++) {
			switch (disabledDates[i]) {
				case "mon":
					finalDates.push(1);
					break;
				case "tue":
					finalDates.push(2);
					break;
				case "wed":
					finalDates.push(3);
					break;
				case "thu":
					finalDates.push(4);
					break;
				case "fri":
					finalDates.push(5);
					break;
				case "sat":
					finalDates.push(6);
					break;
				case "sun":
					finalDates.push(0);
					break;
				default:
					break;
			}
		}
		// console.log(finalDates);
		const day = date.getDay();
		// console.log(day);
		return (
			day !== finalDates[0] &&
			day !== finalDates[1] &&
			day !== finalDates[2] &&
			day !== finalDates[3] &&
			day !== finalDates[4] &&
			day !== finalDates[5] &&
			day !== finalDates[6]
		);
	};

	const getdayName = (day) => {
		switch (day) {
			case 0:
				return "sunday";
			case 1:
				return "monday";
			case 2:
				return "tuesday";
			case 3:
				return "wednesday";
			case 4:
				return "thursday";
			case 5:
				return "friday";
			case 6:
				return "saturday";
			default:
				break;
		}
	};

	const setTimes = (v1) => {
		setTimemenuitems([]);
		const timeSlotDay = getdayName(v1?.getDay());
		// console.log(timeSlotDay);
		switch (timeSlotDay) {
			case "monday":
				start24 = Number(timings?.monday?.time?.start?.substring(0, 2));
				end24 = Number(timings?.monday?.time?.end?.substring(0, 2));
				startampm = timings?.monday?.time?.start?.substring(6, 8);
				endampm = timings?.monday?.time?.end?.substring(6, 8);
				setAllday(timings?.monday?.isSetHours);
				// console.log("monday", timings?.monday?.isSetHours);
				break;
			case "tuesday":
				start24 = Number(timings?.tuesday?.time?.start?.substring(0, 2));
				end24 = Number(timings?.tuesday?.time?.end?.substring(0, 2));
				startampm = timings?.tuesday?.time?.start?.substring(6, 8);
				endampm = timings?.tuesday?.time?.end?.substring(6, 8);
				setAllday(timings?.tuesday?.isSetHours);
				// console.log("tuesday", timings?.tuesday?.isSetHours);
				break;
			case "wednesday":
				start24 = Number(timings?.wednesday?.time?.start?.substring(0, 2));
				end24 = Number(timings?.wednesday?.time?.end?.substring(0, 2));
				startampm = timings?.wednesday?.time?.start?.substring(6, 8);
				endampm = timings?.wednesday?.time?.end?.substring(6, 8);
				setAllday(timings?.wednesday?.isSetHours);
				// console.log("wednesday", timings?.wednesday?.isSetHours);
				break;
			case "thursday":
				start24 = Number(timings?.thursday?.time?.start?.substring(0, 2));
				end24 = Number(timings?.thursday?.time?.end?.substring(0, 2));
				startampm = timings?.thursday?.time?.start?.substring(6, 8);
				endampm = timings?.thursday?.time?.end?.substring(6, 8);
				setAllday(timings?.thursday?.isSetHours);
				// console.log("thursday", timings?.thursday?.isSetHours);
				break;
			case "friday":
				start24 = Number(timings?.friday?.time?.start?.substring(0, 2));
				end24 = Number(timings?.friday?.time?.end?.substring(0, 2));
				startampm = timings?.friday?.time?.start?.substring(6, 8);
				endampm = timings?.friday?.time?.end?.substring(6, 8);
				setAllday(timings?.friday?.isSetHours);
				// console.log("friday", timings?.friday?.isSetHours);
				break;
			case "saturday":
				start24 = Number(timings?.saturday?.time?.start?.substring(0, 2));
				end24 = Number(timings?.saturday?.time?.end?.substring(0, 2));
				startampm = timings?.saturday?.time?.start?.substring(6, 8);
				endampm = timings?.saturday?.time?.end?.substring(6, 8);
				setAllday(timings?.saturday?.isSetHours);
				// console.log("saturday", timings?.saturday?.isSetHours);
				break;
			case "sunday":
				start24 = Number(timings?.sunday?.time?.start?.substring(0, 2));
				end24 = Number(timings?.sunday?.time?.end?.substring(0, 2));
				startampm = timings?.sunday?.time?.start?.substring(6, 8);
				endampm = timings?.sunday?.time?.end?.substring(6, 8);
				console.log("sunday", timings?.sunday?.isSetHours);
				// setAllday(timings?.sunday?.isSetHours)
				break;
			default:
				break;
		}
		if (startampm === endampm)
			for (let i = start24; i <= end24; i++) {
				let element;
				if (i < 10) element = "0" + i + ":" + "00 " + startampm;
				else element = i + ":" + "00 " + startampm;
				if (!timemenuitems.includes(element))
					setTimemenuitems((prev) => [...prev, element]);
			}
		else {
			for (let i = start24; i <= 12; i++) {
				let element;
				if (i < 10) element = "0" + i + ":" + "00 " + startampm;
				else element = i + ":" + "00 " + startampm;
				if (i == 12) {
					element = i + ":" + "00 " + endampm;
				}
				if (!timemenuitems.includes(element))
					setTimemenuitems((prev) => [...prev, element]);
			}
			for (let i = 1; i <= end24; i++) {
				let element;
				if (i < 10) element = "0" + i + ":" + "00 " + endampm;
				else element = i + ":" + "00 " + endampm;
				if (!timemenuitems.includes(element))
					setTimemenuitems((prev) => [...prev, element]);
			}
		}
		// console.log(startampm, endampm);
		// console.log(timemenuitems);
		// console.log(timemenuitems.length);
	};

	useEffect(() => {
		setTimes(bookedDay);
	}, [bookedDay]);

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
	const discount =
		booking?.booking?.bookedTimeDates?.bookedHours === "24"
			? 0.8
			: booking?.booking?.bookedTimeDates?.bookedHours === "12"
				? 0.9
				: 1;
	const perHourCost = (
		(booking?.total_amt - 40) /
		booking?.booking?.bookedTimeDates?.bookedHours /
		discount
	)?.toFixed(2);
	const GEO_API = "b531f1d229f547d09b4c7c3207885471";

	// useEffect(() => {
	// 	getLocation(booking?.property_id)
	// 		.then((res) => setLocationData(res.data))
	// 		.catch((err) => console.log(err));
	// }, [booking]);

	useEffect(() => {
		// Get latitude & longitude from address.
		axios
			.get(
				`https://api.geoapify.com/v1/geocode/search?city=${locationData?.property_address?.city}&state=${locationData?.property_address?.state}&country=India&lang=en&limit=1&type=city&format=json&apiKey=${GEO_API}`
			)
			.then((response) => {
				//const { lat, lng } = response.results[0].geometry.location;
				//  console.log(response.data.results[0]);
				setCord({
					lat: response?.data?.results[0]?.lat,
					lng: response?.data?.results[0]?.lon,
				});
			})
			.catch((err) => console.log(err));
	}, [locationData]);

	function toMonthName(monthNumber) {
		const date = new Date();
		date.setMonth(monthNumber - 1);

		return date.toLocaleString("en-US", {
			month: "long",
		});
	}

	// const confirmDeletion = () => {
	//   let text = "Do you really want to delete this booking?";
	//   return window.confirm(text);
	// };

	const deleteBooking = async () => {
		try {
			// if (confirmDeletion()) {
			const newPortfolio = userData?.portfolio.map((p) => {
				if (p._id.toString() === bookingId) {
					p.status = "Cancelled";
				}
			});
			const newUserData = { ...userData, portfolio: newPortfolio };
			const data = {
				bookingId,
				locationId: booking.property_id,
				status: "Cancelled",
				user_id: booking?.user_id,
			};
			console.log(data);
			const response = await updateBookingStatus(data);
			dispatch(addUser(newUserData));
			toast.success(response.data);
			// window.history.back();
			window.location.reload();
			// }
		} catch (error) {
			toast.error(error);
		}
	};

	//message
	const handleChat = async () => {
		const data = {
			senderId: booking.owner_id,
			receiverId: booking.user_id,
			locationId: booking.property_id,
		};
		try {
			await createConversation(bookingId, data);
		} catch (error) {
			console.log(error);
		}
		window.location = `/messages/${bookingId}`;
	};

	//review
	const handleReview = async () => {
		const review_and_rating = {
			review,
			rating,
		};

		const data = {
			review_and_rating: review_and_rating,
			location_id: booking.property_id,
		};
		try {
			const response = await addReviewRating(data);
			toast.success(response.data);
			window.location.reload(true);
		} catch (error) {
			console.log(error);
		}
	};

	Date.prototype.addDays = function(days) {
		let date = new Date(this.valueOf());
		date.setDate(date.getDate() + days);
		return date;
	}

	//add a day
	const handleAddADay = async () => {
		try {
			let date=new Date(bookedDay)

			const addedDayDetails = {
				bookedDate: date.addDays(1),
				bookedTime: bookedTime,
				bookedHours: bookedHours,
			};
			console.log("addedDayDetails",addedDayDetails);
			const response = await addADayInBooking({
				addedDayDetails,
				id: bookingId,
			});
			toast.success(response.data);
			window.location.reload(true);
		} catch (error) {
			console.log(error);
		}
	};

	console.log(booking);
	// console.log(locationData);
	return (
		<div>
			<Navbar extraNavId="id-2" />
			<div className="below-nav">
				<div className="container">
					<div className="booking-details-header">Booking Details</div>
					<div className="booking-details-body">
						<div className="booking-details-body-left">
							{/* <div className="item-heading">{booking?.property_id}</div> */}
							<div className="grid-container">
								<div>
									<div className="item-heading">Reserved Date</div>
									{booking?.bookedTimeDates?.map((item, index) => <div className="item-body" key={index}>{booking?.bookedTimeDates?.at(index)?.bookedDate?.split("-")[2].split("T")[0] + " " + toMonthName(booking?.bookedTimeDates?.at(index)?.bookedDate?.split("-")[1]) + " " + booking?.bookedTimeDates?.at(index)?.bookedDate?.split("-")[0]}</div>)}
								</div>
								<div>
									<div className="item-heading">Attendies</div>
									<div className="item-body">{booking?.attendies} People</div>
								</div>
								<div>
									<div className="item-heading">Reserved Time</div>
									{booking?.bookedTimeDates?.map((item, index) => <div className="item-body" key={index}>
										{booking?.bookedTimeDates?.at(index)?.bookedTime +
											" to " +
											((Number(booking?.bookedTimeDates?.at(index)?.bookedTime?.substr(0, 2)) +
												Number(booking.bookedTimeDates?.at(index)?.bookedHours)) %
												24 > 12 ? (Number(booking?.bookedTimeDates?.at(index)?.bookedTime?.substr(0, 2)) +
													Number(booking.bookedTimeDates?.at(index)?.bookedHours)) %
												24 % 12 : (Number(booking?.bookedTimeDates?.at(index)?.bookedTime?.substr(0, 2)) +
													Number(booking.bookedTimeDates?.at(index)?.bookedHours)) %
													24 % 12 < 10 ? "0" + (Number(booking?.bookedTimeDates?.at(index)?.bookedTime?.substr(0, 2)) +
														Number(booking.bookedTimeDates?.at(index)?.bookedHours)) %
													24 % 12 : (Number(booking?.bookedTimeDates?.at(index)?.bookedTime?.substr(0, 2)) +
														Number(booking?.bookedTimeDates?.at(index)?.bookedHours)) %
											24) +
											booking?.bookedTimeDates
												?.at(index)
												?.bookedTime?.substr(2, 4) + ((Number(booking?.bookedTimeDates?.at(index)?.bookedTime?.substr(0, 2)) +
													Number(booking?.bookedTimeDates?.at(index)?.bookedHours)) %
													24 > 12 ? booking?.bookedTimeDates?.at(index)?.bookedTime?.substr(6, 7) == "pm" ? "am" : "pm" : booking?.bookedTimeDates?.at(index)?.bookedTime?.substr(6, 7))}
									</div>)}
								</div>
								<div>
									<div className="item-heading">Duration</div>
									{booking?.bookedTimeDates?.map((item, index) => <div className="item-body" key={index}>{booking?.bookedTimeDates?.at(index)?.bookedHours} Hrs</div>)}
								</div>
								<div>
									<div className="item-heading">Location Id</div>
									<div className="item-body">{booking?.property_id}</div>
								</div>
							</div>
						</div>
						<div className="booking-details-body-right">
							<div data-attribute-3>
								<div data-attribute-4>Total price (incl. GST)</div>
								<div data-attribute-4 style={{ textAlign: "right" }}>
								{booking?.bookedTimeDates?.length>1?<>₹{booking?.total_amt}x{booking?.bookedTimeDates?.length} =  ₹{booking?.total_amt*booking?.bookedTimeDates?.length}</>:<>₹{booking?.total_amt}</>}	
									
								</div>
							</div>
							<div data-attribute-3>
								<div data-attribute-4>Discount</div>
								<div data-attribute-4>
									- ₹ {booking?.discount ? booking?.discount : 0}
								</div>
							</div>
							<div data-attribute-3>
								<div data-attribute-4>Cleaning Fee (incl. Gst)</div>
								<div data-attribute-4>
									₹ {locationData?.pricing?.cleaningFee}
								</div>
							</div>
							<div data-attribute-3>
								<div data-attribute-4>Processing Fee (incl. Gst)</div>
								<div data-attribute-4 style={{ textAlign: "right" }}>
									₹ {booking?.processfee ? booking?.processfee : 0}
								</div>
							</div>

							<div data-attribute-3>
								<div data-attribute-1>Total</div>
								<div data-attribute-1>
									₹
									{/* {(perHourCost * booking?.duration_in_hours + 40)?.toFixed(
										2
									) === "NaN"
										? 0
										: (perHourCost * booking?.duration_in_hours + 40)?.toFixed(
												2
										  )} */}
									{/* {booking?.final_amount} */}
									{booking?.total_amt*booking?.bookedTimeDates?.length+(Number(locationData?.pricing?.cleaningFee))+(booking?.processfee ? Number(booking?.processfee) : 0)-(booking?.discount ? Number(booking?.discount) : 0)}
								</div>
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
								disabled={booking?.status !== "Under Review"}
								onClick={() => setopenModal(true)}
							>
								Cancel Booking
							</Button>
						</div>
					</div>
					<Modal open={openModal} onClose={handleCloseModal}>
						<div className="listing-modal">
							<h3>Do you really want to Delete this booking?</h3>
							<div
								style={{
									display: "flex",
									gap: "2rem",
									width: "100%",
									justifyContent: "center",
								}}
							>
								<Button
									className="auth-btn"
									onClick={() => {
										deleteBooking();
										handleCloseModal();
									}}
								>
									Yes
								</Button>
								<Button
									className="auth-btn"
									onClick={() => {
										handleCloseModal();
									}}
								>
									No
								</Button>
							</div>
						</div>
					</Modal>
					{/* START OF ADD DATE BAR */}
					{booking?.status === "Under Review" && (
						
						<div>
							<div style={{ display: "flex", flexDirection: "row" }}>
								<div>
									<label
										htmlFor="date"
										className={
											active === true ? "focus-label" : "booking-form-label"
										}
									>
										<strong>Date</strong>
									</label>
									<div style={{ position: "relative" }}>
										<DatePicker
											required
											type="date"
											className={active === true ? "focus" : "normal"}
											disabled={booking?.status === "Cancelled"}
											id="date"
											name="date"
											style={{
												border: "2px solid gray",
												width: "78%",
												height: "34px",
											}}
											// selected={new Date(dateRange.startDate)}
											onChange={(date) => {
												setDateRange({ ...dateRange, startDate: date });
												console.log(date);
												setBookedDay(date);
											}}
											selected={bookedDay}
											// name="startDate"
											dateFormat="dd/MM/yyyy"
											filterDate={isDisabled}
											excludeDates={bookedDates}
											placeholderText="dd/mm/yyyy"
											minDate={moment().toDate() - 1}
											value={bookedDay}
										/>
										<span
											style={{ position: "absolute", top: "30%", right: "5%" }}
										>
											<IoMdArrowDropdown size={20} color="gray" />
										</span>
									</div>
								</div>
								{booking.event === "Individual" ||
									booking.event === "Corporate" ? (
									<div style={{marginLeft:"1rem"}}>
										<label
											htmlFor="start-time"
											className={
												active === true ? "focus-label" : "booking-form-label"
											}
										>
											<strong>Start time</strong>
										</label>
										{allday ? (
											<Select
												required
												id="start-time"
												name="start-time"
												MenuProps={{
													style: {
														maxHeight: 300,
														width: 150,
													},
												}}
												disabled={booking?.status === "Cancelled"}
												type="text"
												className={active === true ? "focus" : "normal"}
												onChange={(e) => {
													console.log(e.target.value, "v2");
													setBookedTime(e.target.value);
												}}
												value={bookedTime}
											>
												{timemenuitems?.map((item) => (
													<MenuItem value={item}>{item}</MenuItem>
												))}
											</Select>
										) : (
											<Select
												required
												id="start-time"
												name="start-time"
												MenuProps={{
													style: {
														maxHeight: 300,
														width: 150,
													},
												}}
												disabled={booking?.status === "Cancelled"}
												type="text"
												className={active === true ? "focus" : "normal"}
												onChange={(e) => {
													console.log(e.target.value, "v2");
													setBookedTime(e.target.value);
												}}
												value={bookedTime}
											>
												{new Date(bookedDay).toDateString().slice(4)===new Date().toDateString().slice(4)?new Date().setHours(1)>new Date().getTime()?<MenuItem value="01:00 am">01:00 am</MenuItem>:null:<MenuItem value="01:00 am">01:00 am</MenuItem>}
                  {new Date(bookedDay).toDateString().slice(4)===new Date().toDateString().slice(4)?new Date().setHours(2)>new Date().getTime()?<MenuItem value="02:00 am">02:00 am</MenuItem>:null:<MenuItem value="02:00 am">02:00 am</MenuItem>}
                  {new Date(bookedDay).toDateString().slice(4)===new Date().toDateString().slice(4)?new Date().setHours(3)>new Date().getTime()?<MenuItem value="03:00 am">03:00 am</MenuItem>:null:<MenuItem value="03:00 am">03:00 am</MenuItem>}
                  {new Date(bookedDay).toDateString().slice(4)===new Date().toDateString().slice(4)?new Date().setHours(4)>new Date().getTime()?<MenuItem value="04:00 am">04:00 am</MenuItem>:null:<MenuItem value="04:00 am">04:00 am</MenuItem>}
                  {new Date(bookedDay).toDateString().slice(4)===new Date().toDateString().slice(4)?new Date().setHours(5)>new Date().getTime()?<MenuItem value="05:00 am">05:00 am</MenuItem>:null:<MenuItem value="05:00 am">05:00 am</MenuItem>}
                  {new Date(bookedDay).toDateString().slice(4)===new Date().toDateString().slice(4)?new Date().setHours(6)>new Date().getTime()?<MenuItem value="06:00 am">06:00 am</MenuItem>:null:<MenuItem value="06:00 am">06:00 am</MenuItem>}
                  {new Date(bookedDay).toDateString().slice(4)===new Date().toDateString().slice(4)?new Date().setHours(7)>new Date().getTime()?<MenuItem value="07:00 am">07:00 am</MenuItem>:null:<MenuItem value="07:00 am">07:00 am</MenuItem>}
                  {new Date(bookedDay).toDateString().slice(4)===new Date().toDateString().slice(4)?new Date().setHours(8)>new Date().getTime()?<MenuItem value="08:00 am">08:00 am</MenuItem>:null:<MenuItem value="08:00 am">08:00 am</MenuItem>}
                  {new Date(bookedDay).toDateString().slice(4)===new Date().toDateString().slice(4)?new Date().setHours(9)>new Date().getTime()?<MenuItem value="09:00 am">09:00 am</MenuItem>:null:<MenuItem value="09:00 am">09:00 am</MenuItem>}
                  {new Date(bookedDay).toDateString().slice(4)===new Date().toDateString().slice(4)?new Date().setHours(10)>new Date().getTime()?<MenuItem value="10:00 am">10:00 am</MenuItem>:null:<MenuItem value="10:00 am">10:00 am</MenuItem>}
                  {new Date(bookedDay).toDateString().slice(4)===new Date().toDateString().slice(4)?new Date().setHours(11)>new Date().getTime()?<MenuItem value="11:00 am">11:00 am</MenuItem>:null:<MenuItem value="11:00 am">11:00 am</MenuItem>}
                  {new Date(bookedDay).toDateString().slice(4)===new Date().toDateString().slice(4)?new Date().setHours(12)>new Date().getTime()?<MenuItem value="12:00 pm">12:00 pm</MenuItem>:null:<MenuItem value="12:00 pm">12:00 pm</MenuItem>}
                  {new Date(bookedDay).toDateString().slice(4)===new Date().toDateString().slice(4)?new Date().setHours(13)>new Date().getTime()?<MenuItem value="01:00 pm">01:00 pm</MenuItem>:null:<MenuItem value="01:00 pm">01:00 pm</MenuItem>}
                  {new Date(bookedDay).toDateString().slice(4)===new Date().toDateString().slice(4)?new Date().setHours(14)>new Date().getTime()?<MenuItem value="02:00 pm">02:00 pm</MenuItem>:null:<MenuItem value="02:00 pm">02:00 pm</MenuItem>}
                  {new Date(bookedDay).toDateString().slice(4)===new Date().toDateString().slice(4)?new Date().setHours(15)>new Date().getTime()?<MenuItem value="03:00 pm">03:00 pm</MenuItem>:null:<MenuItem value="03:00 pm">03:00 pm</MenuItem>}
                  {new Date(bookedDay).toDateString().slice(4)===new Date().toDateString().slice(4)?new Date().setHours(16)>new Date().getTime()?<MenuItem value="04:00 pm">04:00 pm</MenuItem>:null:<MenuItem value="04:00 pm">04:00 pm</MenuItem>}
                  {new Date(bookedDay).toDateString().slice(4)===new Date().toDateString().slice(4)?new Date().setHours(17)>new Date().getTime()?<MenuItem value="05:00 pm">05:00 pm</MenuItem>:null:<MenuItem value="05:00 pm">05:00 pm</MenuItem>}
                  {new Date(bookedDay).toDateString().slice(4)===new Date().toDateString().slice(4)?new Date().setHours(18)>new Date().getTime()?<MenuItem value="06:00 pm">06:00 pm</MenuItem>:null:<MenuItem value="06:00 pm">06:00 pm</MenuItem>}
                  {new Date(bookedDay).toDateString().slice(4)===new Date().toDateString().slice(4)?new Date().setHours(19)>new Date().getTime()?<MenuItem value="07:00 pm">07:00 pm</MenuItem>:null:<MenuItem value="07:00 pm">07:00 pm</MenuItem>}
                  {new Date(bookedDay).toDateString().slice(4)===new Date().toDateString().slice(4)?new Date().setHours(20)>new Date().getTime()?<MenuItem value="08:00 pm">08:00 pm</MenuItem>:null:<MenuItem value="08:00 pm">08:00 pm</MenuItem>}
                  {new Date(bookedDay).toDateString().slice(4)===new Date().toDateString().slice(4)?new Date().setHours(21)>new Date().getTime()?<MenuItem value="09:00 pm">09:00 pm</MenuItem>:null:<MenuItem value="09:00 pm">09:00 pm</MenuItem>}
                  {new Date(bookedDay).toDateString().slice(4)===new Date().toDateString().slice(4)?new Date().setHours(22)>new Date().getTime()?<MenuItem value="10:00 pm">10:00 pm</MenuItem>:null:<MenuItem value="10:00 pm">10:00 pm</MenuItem>}
                  {new Date(bookedDay).toDateString().slice(4)===new Date().toDateString().slice(4)?new Date().setHours(23)>new Date().getTime()?<MenuItem value="11:00 pm">11:00 pm</MenuItem>:null:<MenuItem value="11:00 pm">11:00 pm</MenuItem>}
                  {new Date(bookedDay).toDateString().slice(4)===new Date().toDateString().slice(4)?new Date().setHours(24)>new Date().getTime()?<MenuItem value="12:00 pm">12:00 pm</MenuItem>:null:<MenuItem value="12:00 pm">12:00 pm</MenuItem>}
											</Select>
										)}
									</div>
								) : (
									<div style={{marginLeft:"1.5rem"}}>
										<label
											htmlFor="time-shifts"
											className={
												active === true ? "focus-label" : "booking-form-label"
											}
										>
											<strong>Time Slot</strong>
										</label>
										<Select
											required
											id="time-shifts"
											name="time-shifts"
											defaultValue=""
											disabled={booking?.status === "Cancelled"}
											type="time"
											className={active === true ? "focus" : "normal"}
											onChange={(e) => {
												console.log("booked",e.target.value);
												setBookedHours(
													e.target.value === "6am-6pm" ? "12" : "22"
												);
												let a = e.target.value === "6am-6pm" ? "12" : "22";
												setBookedTime("06:00 am");
												setBookedHours(e.target.value === "6am-6pm" ? 12 : 22);
												setTimeSlot(e.target.value)
											}}
											value={timeSlot}
											displayEmpty
										>
										<MenuItem value="Select">Select........</MenuItem>
										{new Date(bookedDay).toDateString().slice(4)===new Date().toDateString().slice(4)?new Date().setHours(6)>new Date().getTime()? <MenuItem value="6am-6pm">Half Day (6am to 6pm)</MenuItem>:null:<MenuItem value="6am-6pm">Half Day (6am to 6pm)</MenuItem>}
											
											<MenuItem value="6am-2am">Full Day (6am to 2am)</MenuItem>
										</Select>
									</div>
								)}
								{(booking.event === "Individual" ||
									booking.event === "Corporate") && (
										<div>
											<label
												htmlFor="number-of-hours"
												className={
													active === true ? "focus-label" : "booking-form-label"
												}
											>
												<strong>Number of Hours</strong>
											</label>
											{timemenuitems.length ? (
												<Select
													disabled={booking?.status === "Cancelled"}
													required
													type="number"
													id="number-of-hours"
													name="number-of-hours"
													className={active === true ? "focus" : "normal"}
													onChange={(e) => {
														console.log(e.target.value);
														setBookedHours(e.target.value);
													}}
													value={bookedHours}
													displayEmpty
												>
													{timemenuitems?.length > 8 && (
														<MenuItem value="8">8 hours</MenuItem>
													)}
													{timemenuitems?.length > 12 && (
														<MenuItem value="12">12 hours</MenuItem>
													)}
													{timemenuitems?.length > 24 && (
														<MenuItem value="24">24 hours</MenuItem>
													)}
												</Select>
											) : (
												<Select
													required
													type="number"
													id="number-of-hours"
													name="number-of-hours"
													disabled={booking?.status === "Cancelled"}
													className={active === true ? "focus" : "normal"}
													onChange={(e) => {
														console.log(e.target.value);
														setBookedHours(e.target.value);
													}}
													value={bookedHours}
													displayEmpty
												>
													<MenuItem value="8">8 hours</MenuItem>
													<MenuItem value="12">12 hours</MenuItem>
													<MenuItem value="24">24 hours</MenuItem>
												</Select>
											)}
										</div>
									)}
							</div>
							<div
								style={{
									marginLeft: "auto",
									width: "20vw",
									display: `${booking?.status === "Under Review" ? "block" : "none"
										}`,
								}}
							>
								<Button
									variant="contained"
									onClick={handleAddADay}
									sx={{
										width: "20vw",
										backgroundColor: "#0079D7",
										color: "white",
										borderRadius: "4px",
										marginTop: "10px",
									}}
								>
									Add a Day
								</Button>
							</div>
						</div>
					)}
					<div
						style={{
							marginLeft: "auto",
							width: "20vw",
							display: `${booking?.status !== "Approved" ? "none" : "block"}`,
						}}
					>
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
				<h1 style={{fontSize:"1.5rem",marginTop:"1.5rem",display: `${booking?.status !== "Approved" ? "none" : "block"}`}}>Below Is The Map Of Your Location</h1>
				<div
					style={{
						width: "80%",
						height: "500px",
						margin: "auto",
						display: `${booking?.status !== "Approved" ? "none" : "block"}`,
					}}
				>

					{cord.lat !== 0 && <GoogleMap lat={cord.lat} lng={cord.lng} />}
				</div>
				<div className="container">
					<div className="booking-details-header">Message</div>
					<div className="user-info">
						{ownerData?.personalInfo?.profile_pic ? (
							<img src={ownerData?.personalInfo?.profile_pic} alt="profile" />
						) : (
							<Avatar className="user-dp" />
						)}
						<span className="item-heading">
							{ownerData?.personalInfo?.fullName}
						</span>
					</div>
					<div className="booking-details-body">
						<div className="item-heading" style={{ width: "max-content" }}>
							Message to the host:{" "}
						</div>
						<div className="item-info">{booking?.user_data?.message}</div>
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
								}}
								disabled={booking?.status === "Cancelled"}
								onClick={handleChat}
							>
								Message
							</Button>
						</div>
					</div>
				</div>
				{userData?.portfolio[0]?.status !== "Under Review" && (
					<div div className="container">
						<div className="booking-details-header">Reviews and Rating</div>
						<div className="row1">
							<div className="coll1">
								<h2>
									Write A review
									<span style={{ color: "red" }}>*</span>
								</h2>
								<TextareaAutosize
									className="listingInput text-input"
									aria-label="minimum height"
									minRows={6}
									maxLength={500}
									name="property_info"
									onChange={(e) => setReview(e.target.value)}
									// value={property_desc ? property_desc.property_info : ""}
									style={{
										width: 690,
										fontSize: "16px",
										lineHeight: "24px",
										padding: "1%",
									}}
									required
								/>
							</div>
						</div>
						<div className="row1">
							<div className="coll1">
								<h2>
									Ratings
									<span style={{ color: "red" }}>*</span>
								</h2>
								<Rating
									name="simple-controlled"
									value={rating}
									onChange={(event, newValue) => {
										setRating(newValue);
									}}
								/>
							</div>
						</div>
						<div className="row1">
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
								disabled={booking?.status === "Cancelled"}
								onClick={handleReview}
							>
								Send Review
							</Button>
						</div>
					</div>
				)}
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
