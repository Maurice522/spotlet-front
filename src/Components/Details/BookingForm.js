import React, { useEffect, useState } from "react";
import "../../Assets/Styles/Details/bookingForm.css";
import { useSelector } from "react-redux";
import { selectUserData } from "../../redux/slices/userSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { MenuItem, Select } from "@mui/material";
import { margin } from "@mui/system";
import { endOfDay } from "date-fns";

const BookingForm = ({
	v1,
	v2,
	v3,
	v4,
	v5,
	v6,
	event,
	setEvent,
	setV1,
	setV2,
	setV3,
	setV4,
	setV5,
	setV6,
	locationData,
	tot_price,
	setTotPrice
}) => {
	// console.log(locationData)
	const user = useSelector(selectUserData);
	const [active, setActive] = useState(false);
	const [val, setVal] = useState(0)
	const navigate = useNavigate();
	useEffect(() => {
		calculatePrice(event, v3);
	}, [locationData]);
	const handleClick = () => {

		//console.log(v1, v2, v3, v4, v5);
		if (user) {
			if (v1 !== "" && v2 !== "" && v3 !== "" && v4 !== "" && v5 !== "") {
				//console.log("Navigate", navigate);
				navigate(`/${window.location.pathname.substring(10)}/booking`);
			} else {
				toast.error("Please fill all the fields");
			}
		} else {
			toast.error("Please Login first");
		}
	};

	const calculatePrice = (eventType, hour_rate = 0) => {
		console.log(eventType, hour_rate);
		if (eventType === "Film, Webseries or Ad") {
			const rate = locationData?.pricing?.film_webseries_ad?.hourly_rate;
			setV6(rate);
			if (hour_rate === "12") setTotPrice(rate * 12 * 0.9*1.18);
			else if (hour_rate === "24") setTotPrice(rate * 24 * 0.8*1.18);
			else setTotPrice(rate * hour_rate* 1.18);
		} else if (eventType === "Corporate") {
			const rate = locationData?.pricing?.corporate?.hourly_rate;
			setV6(rate);
			if (hour_rate === "12") setTotPrice(rate * 12 * 0.9*1.18);
			else if (hour_rate === "24") setTotPrice(rate * 24 * 0.8*1.18);
			else setTotPrice(rate * hour_rate* 1.18);
		} else if (eventType === "TV Series and Others") {
			const rate = locationData?.pricing?.tv_series_other?.hourly_rate;
			setV6(rate);
			if (hour_rate === "12") setTotPrice(rate * 12 * 0.9*1.18);
			else if (hour_rate === "24") setTotPrice(rate * 24 * 0.8*1.18);
			else setTotPrice(rate * hour_rate* 1.18);
		} else {
			const rate = locationData?.pricing?.individual?.hourly_rate;
			setV6(rate);
			if (hour_rate === "12") setTotPrice(rate * 12 * 0.9*1.18);
			else if (hour_rate === "24") setTotPrice(rate * 24 * 0.8*1.18);
			else setTotPrice(rate * hour_rate*1.18);
		}
	};


	return (
		<div>
			<div
				className="wrapper"
				// onMouseEnter={() => {
				// 	setActive(true);
				// }}
				// onMouseLeave={() => {
				// 	setActive(false);
				// }}
				>
				<form className={(event === "Individual" || event === "Corporate") ? "form" : "form-2"}>
					<div>
						<label
							htmlFor="event"
							className={
								active === true ? "focus-label" : "booking-form-label"
							}>
							<strong>Event</strong>
						</label>
						<Select
							required
							type="text"
							className={active === true ? "focus" : "normal"}
							id="event"
							name="event"
							onChange={(e) => {
								// console.log(e.target.value);
								setEvent(e.target.value);
								// console.log(val);
								let a = (e.target.value === "Individual" || e.target.value ==="Corporate") ? v3 : val;
								calculatePrice(e.target.value, a);
							}}
							value={event}
							displayEmpty
							// defaultValue={new Date().toISOString().split("T")[0]}
						>
							{locationData?.pricing?.corporate?.isPresent && (
								<MenuItem value="Corporate">Corporate</MenuItem>
							)}
							{locationData?.pricing?.film_webseries_ad?.isPresent && (
								<MenuItem value="Film, Webseries or Ad">
									Film, Webseries or Ad
								</MenuItem>
							)}
							{locationData?.pricing?.individual?.isPresent && (
								<MenuItem value="Individual">Individual</MenuItem>
							)}
							{locationData?.pricing?.tv_series_other?.isPresent && (
								<MenuItem value="TV Series and Others">
									TV Series and Others
								</MenuItem>
							)}
						</Select>
					</div>
					<div>
						<label
							htmlFor="date"
							className={
								active === true ? "focus-label" : "booking-form-label"
							}>
							<strong>Date</strong>
						</label>
						<input
							required
							type="date"
							className={active === true ? "focus" : "normal"}
							id="date"
							name="date"
							style={{border:"2px solid lightgray",width:"75%",height:"34px"}}
							defaultValue={new Date().toISOString().split("T")[0]}
							onChange={(e) => {
								//console.log(e.target.value);
								setV1(e.target.value);
							}}
							value={v1}
						/>
					</div>
					{event === "Individual" || event === "Corporate" ? (
						<div>
							<label
								htmlFor="start-time"
								className={
									active === true ? "focus-label" : "booking-form-label"
								}>
								<strong>Start time</strong>
							</label>
							<select
								required
								id="start-time"
								name="start-time"
								style={{border:"2px solid lightgray",width:"90%",height:"38px"}}
								defaultValue="06:30 pm"
								type="text"
								className={active === true ? "focus" : "normal"}
								onChange={(e) => {
									console.log(e.target.value,"v2");
									setV2(e.target.value);
								}}
								value={v2}
							>
							<option value="10">10:00 am</option>
								<option value="11">11:00 am</option>
							    <option value="12">12:00 pm</option>
								<option value="13">01:00 pm</option>
								<option value="14">02:00 pm</option>
								<option value="15">03:00 pm</option>
								<option value="16">04:00 pm</option>
								<option value="17">05:00 pm</option>
								<option value="18">06:00 pm</option>
								<option value="19">07:00 pm</option>
								<option value="20">08:00 pm</option>
								<option value="21">09:00 pm</option>
								<option value="22">10:00 pm</option>
								<option value="24">11:00 pm</option>
								<option value="24">12:00 pm</option>
								<option value="1">01:00 am</option>
								<option value="2">02:00 am</option>
								<option value="3">03:00 am</option>
								<option value="4">04:00 am</option>
								<option value="5">05:00 am</option>
								<option value="6">06:00 am</option>
								<option value="7">07:00 am</option>
								<option value="8">08:00 am</option>
								<option value="9">09:00 am</option>
								
								
							</select>
						</div>
					) : (
						<div>
							<label
								htmlFor="time-shifts"
								className={
									active === true ? "focus-label" : "booking-form-label"
								}>
								<strong>Time Slot</strong>
							</label>
							<Select
								required
								id="time-shifts"
								name="time-shifts"
								// defaultValue="Half Day (6am to 6pm)"
								defaultValue=""
								type="time"
								className={active === true ? "focus" : "normal"}
								onChange={(e) => {
									// console.log(e.target.value)
									setVal(e.target.value === "6am-6pm" ? "12" : "24");
									// (e.target.value === "6am-6pm" ? "12" : "24");
									let a= e.target.value === "6am-6pm" ? "12" : "24";
									calculatePrice(event, a);
								}}
								// value={"6am-6pm"}
								displayEmpty>
								<MenuItem value="6am-6pm">Half Day (6am to 6pm)</MenuItem>
								<MenuItem value=""></MenuItem>
								<MenuItem value="6am-2am">Full Day  (6am to 2am)</MenuItem>
							</Select>
						</div>
					)}
					{(event === "Individual" || event === "Corporate") && (
						<div>
							<label
								htmlFor="number-of-hours"
								className={
									active === true ? "focus-label" : "booking-form-label"
								}>
								<strong>Number of Hours</strong>
							</label>
							<Select
								required
								type="number"
								id="number-of-hours"
								name="number-of-hours"
								className={active === true ? "focus" : "normal"}
								onChange={(e) => {
									console.log(e.target.value);
									setV3(e.target.value);
									calculatePrice(event, e.target.value);
								}}
								value={v3}
								displayEmpty>
								<MenuItem value="8">8 hours</MenuItem>
								<MenuItem value="12">12 hours</MenuItem>
								<MenuItem value="24">24 hours</MenuItem>
							</Select>
						</div>
					)}
					<div>
						<label
							htmlFor="number-of-people"
							className={
								active === true ? "focus-label" : "booking-form-label"
							}>
							<strong>Number of people</strong>
						</label>
						<Select
							required
							type="number"
							id="number-of-people"
							name="number-of-people"
							placeholder="Approx. no."
							className={active === true ? "focus" : "normal"}
							onChange={(e) => {
								//console.log(e.target.value);
								setV4(e.target.value);
							}}
							value={v4}
						>
						<MenuItem value="5">1-5</MenuItem>
								<MenuItem value="15">6-15</MenuItem>
								<MenuItem value="25">15-25</MenuItem>
								<MenuItem value="50">25-50</MenuItem>
								<MenuItem value="100">50-100</MenuItem>
								<MenuItem value="more than 100">More than 100</MenuItem>
						</Select>
					</div>
					<div>
						<label
							htmlFor="activity"
							className={
								active === true ? "focus-label" : "booking-form-label"
							}>
							<strong>Activity</strong>
						</label>
						<Select
							required
							type="text"
							id="activity"
							name="activity"
							className={active === true ? "focus" : "normal"}
							onChange={(e) => {
								//console.log(e.target.value);
								setV5(e.target.value);
							}}
							value={v5}
						>
						<MenuItem value="Activity 1">Activity 1</MenuItem>
								<MenuItem value="Activity 2">Activity 2</MenuItem>
								<MenuItem value="Activity 3">Activity 3</MenuItem>
								<MenuItem value="Activity 4">Activity 4</MenuItem>
								<MenuItem value="Activity 5">Activity 5</MenuItem>
						</Select>
					</div>
				</form>
			</div>
			<div
				style={{
					width: "80%",
					margin: "auto",
					alignItems: "right",
					gap: "30px",
					textAlign: "end",
				}}>
				<div
					className={active === true ? "active-rate" : "rate"}
					style={{
						display: "inline-block",
						marginTop: "2%",
						fontSize: "30px",
					}}>
					₹ {Number(tot_price.toFixed(2))}
				</div>
				<div
					className="submit"
					type="submit"
					onClick={handleClick}
					style={{
						display: "inline-block",
						width: "11%",
						textAlign: "center",
						marginLeft: "4%",
					}}>
					Reserve
				</div>
			</div>
		</div>
	);
	// return (
	// 	<div>
	// 		<div
	// 			className="wrapper"
	// 			onMouseEnter={() => {
	// 				setActive(true);
	// 			}}
	// 			onMouseLeave={() => {
	// 				setActive(false);
	// 			}}>
	// 			<form className={(event === "Individual" || event === "Corporate") ? "form" : "form-2"}>
	// 				<div>
	// 					<label
	// 						htmlFor="event"
	// 						className={
	// 							active === true ? "focus-label" : "booking-form-label"
	// 						}>
	// 						Event
	// 					</label>
	// 					<Select
	// 						required
	// 						type="text"
	// 						className={active === true ? "focus" : "normal"}
	// 						id="event"
	// 						name="event"
	// 						onChange={(e) => {
	// 							// console.log(e.target.value);
	// 							setEvent(e.target.value);
	// 							// console.log(val);
	// 							let a = (e.target.value === "Individual" || e.target.value ==="Corporate") ? v3 : val;
	// 							calculatePrice(e.target.value, a);
	// 						}}
	// 						value={event}
	// 						displayEmpty
	// 						// defaultValue={new Date().toISOString().split("T")[0]}
	// 					>
	// 						{locationData?.pricing?.corporate?.isPresent && (
	// 							<MenuItem value="Corporate">Corporate</MenuItem>
	// 						)}
	// 						{locationData?.pricing?.film_webseries_ad?.isPresent && (
	// 							<MenuItem value="Film, Webseries or Ad">
	// 								Film, Webseries or Ad
	// 							</MenuItem>
	// 						)}
	// 						{locationData?.pricing?.individual?.isPresent && (
	// 							<MenuItem value="Individual">Individual</MenuItem>
	// 						)}
	// 						{locationData?.pricing?.tv_series_other?.isPresent && (
	// 							<MenuItem value="TV Series and Others">
	// 								TV Series and Others
	// 							</MenuItem>
	// 						)}
	// 					</Select>
	// 				</div>
	// 				<div>
	// 					<label
	// 						htmlFor="date"
	// 						className={
	// 							active === true ? "focus-label" : "booking-form-label"
	// 						}>
	// 						Date
	// 					</label>
	// 					<input
	// 						required
	// 						type="date"
	// 						className={active === true ? "focus" : "normal"}
	// 						id="date"
	// 						name="date"
	// 						defaultValue={new Date().toISOString().split("T")[0]}
	// 						onChange={(e) => {
	// 							//console.log(e.target.value);
	// 							setV1(e.target.value);
	// 						}}
	// 						value={v1}
	// 					/>
	// 				</div>
	// 				{event === "Individual" || event === "Corporate" ? (
	// 					<div>
	// 						<label
	// 							htmlFor="start-time"
	// 							className={
	// 								active === true ? "focus-label" : "booking-form-label"
	// 							}>
	// 							Start time
	// 						</label>
	// 						<input
	// 							required
	// 							id="start-time"
	// 							name="start-time"
	// 							defaultValue="06:30"
	// 							type="time"
	// 							className={active === true ? "focus" : "normal"}
	// 							onChange={(e) => {
	// 								//console.log(e.target.value);
	// 								setV2(e.target.value);
	// 							}}
	// 							value={v2}
	// 						/>
	// 					</div>
	// 				) : (
	// 					<div>
	// 						<label
	// 							htmlFor="time-shifts"
	// 							className={
	// 								active === true ? "focus-label" : "booking-form-label"
	// 							}>
	// 							Time Slot
	// 						</label>
	// 						<Select
	// 							required
	// 							id="time-shifts"
	// 							name="time-shifts"
	// 							// defaultValue="Half Day (6am to 6pm)"
	// 							defaultValue=""
	// 							type="time"
	// 							className={active === true ? "focus" : "normal"}
	// 							onChange={(e) => {
	// 								// console.log(e.target.value)
	// 								setVal(e.target.value === "6am-6pm" ? "12" : "24");
	// 								let a= e.target.value === "6am-6pm" ? "12" : "24";
	// 								calculatePrice(event, a);
	// 							}}
	// 							// value={"6am-6pm"}
	// 							displayEmpty>
	// 							<MenuItem value="6am-6pm">Half Day (6am to 6pm)</MenuItem>
	// 							<MenuItem value=""></MenuItem>
	// 							<MenuItem value="6am-2am">Full Day  (6am to 2am)</MenuItem>
	// 						</Select>
	// 					</div>
	// 				)}
	// 				{(event === "Individual" || event === "Corporate") && (
	// 					<div>
	// 						<label
	// 							htmlFor="number-of-hours"
	// 							className={
	// 								active === true ? "focus-label" : "booking-form-label"
	// 							}>
	// 							Number of Hours
	// 						</label>
	// 						<Select
	// 							required
	// 							type="number"
	// 							id="number-of-hours"
	// 							name="number-of-hours"
	// 							className={active === true ? "focus" : "normal"}
	// 							onChange={(e) => {
	// 								console.log(e.target.value);
	// 								setV3(e.target.value);
	// 								calculatePrice(event, e.target.value);
	// 							}}
	// 							value={v3}
	// 							displayEmpty>
	// 							<MenuItem value="8">8 hours</MenuItem>
	// 							<MenuItem value="12">12 hours</MenuItem>
	// 							<MenuItem value="24">24 hours</MenuItem>
	// 						</Select>
	// 					</div>
	// 				)}
	// 				<div>
	// 					<label
	// 						htmlFor="number-of-people"
	// 						className={
	// 							active === true ? "focus-label" : "booking-form-label"
	// 						}>
	// 						Number of people
	// 					</label>
	// 					<input
	// 						required
	// 						type="number"
	// 						id="number-of-people"
	// 						name="number-of-people"
	// 						placeholder="Approx. no."
	// 						className={active === true ? "focus" : "normal"}
	// 						onChange={(e) => {
	// 							//console.log(e.target.value);
	// 							setV4(e.target.value);
	// 						}}
	// 						value={v4}
	// 					/>
	// 				</div>
	// 				<div>
	// 					<label
	// 						htmlFor="activity"
	// 						className={
	// 							active === true ? "focus-label" : "booking-form-label"
	// 						}>
	// 						Activity
	// 					</label>
	// 					<input
	// 						required
	// 						type="text"
	// 						id="activity"
	// 						name="activity"
	// 						className={active === true ? "focus" : "normal"}
	// 						onChange={(e) => {
	// 							//console.log(e.target.value);
	// 							setV5(e.target.value);
	// 						}}
	// 						value={v5}
	// 					/>
	// 				</div>
	// 			</form>
	// 		</div>
	// 		<div
	// 			style={{
	// 				width: "80%",
	// 				margin: "auto",
	// 				alignItems: "right",
	// 				gap: "30px",
	// 				textAlign: "end",
	// 			}}>
	// 			<div
	// 				className={active === true ? "active-rate" : "rate"}
	// 				style={{
	// 					display: "inline-block",
	// 					marginTop: "2%",
	// 					fontSize: "30px",
	// 				}}>
	// 				₹ {Number(tot_price.toFixed(2))}
	// 			</div>
	// 			<div
	// 				className="submit"
	// 				type="submit"
	// 				onClick={handleClick}
	// 				style={{
	// 					display: "inline-block",
	// 					width: "11%",
	// 					textAlign: "center",
	// 					marginLeft: "4%",
	// 				}}>
	// 				Reserve
	// 			</div>
	// 		</div>
	// 	</div>
	// );
};

export default BookingForm;
