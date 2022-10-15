import React, { useEffect, useState } from "react";
import "../../Assets/Styles/Details/bookingForm.css";
import { useSelector } from "react-redux";
import { selectUserData } from "../redux/slices/userSlice";
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
}) => {
	const user = useSelector(selectUserData);
	const [active, setActive] = useState(false);
	const [tot_price, setTotPrice] = useState(0);
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
		//console.log(event);
		if (eventType === "Film, Webseries or Ad") {
			const rate = locationData?.pricing?.film_webseries_ad?.hourly_rate;
			setV6(rate);
			if (hour_rate === "12") setTotPrice(rate * 12 * 0.9);
			else if (hour_rate === "24") setTotPrice(rate * 24 * 0.8);
			else setTotPrice(rate * hour_rate);
		} else if (eventType === "Corporate") {
			const rate = locationData?.pricing?.corporate?.hourly_rate;
			setV6(rate);
			if (hour_rate === "12") setTotPrice(rate * 12 * 0.9);
			else if (hour_rate === "24") setTotPrice(rate * 24 * 0.8);
			else setTotPrice(rate * hour_rate);
		} else if (eventType === "TV Series and Others") {
			const rate = locationData?.pricing?.tv_series_other?.hourly_rate;
			setV6(rate);
			if (hour_rate === "12") setTotPrice(rate * 12 * 0.9);
			else if (hour_rate === "24") setTotPrice(rate * 24 * 0.8);
			else setTotPrice(rate * hour_rate);
		} else {
			const rate = locationData?.pricing?.individual?.hourly_rate;
			setV6(rate);
			if (hour_rate === "12") setTotPrice(rate * 12 * 0.9);
			else if (hour_rate === "24") setTotPrice(rate * 24 * 0.8);
			else setTotPrice(rate * hour_rate);
		}
	};

	return (
		<div>
			<div
				className="wrapper"
				onMouseEnter={() => {
					setActive(true);
				}}
				onMouseLeave={() => {
					setActive(false);
				}}>
				<form className="form">
					<div>
						<label
							htmlFor="event"
							className={
								active === true ? "focus-label" : "booking-form-label"
							}>
							Event
						</label>
						<Select
							required
							type="text"
							className={active === true ? "focus" : "normal"}
							id="event"
							name="event"
							onChange={(e) => {
								console.log(e.target.value);
								setEvent(e.target.value);
								calculatePrice(e.target.value, v3);
							}}
							value={event}
							displayEmpty
							// defaultValue={new Date().toISOString().split("T")[0]}
						>
							<MenuItem value="">None</MenuItem>
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
							Date
						</label>
						<input
							required
							type="date"
							className={active === true ? "focus" : "normal"}
							id="date"
							name="date"
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
								Start time
							</label>
							<input
								required
								id="start-time"
								name="start-time"
								defaultValue="06:30"
								type="time"
								className={active === true ? "focus" : "normal"}
								onChange={(e) => {
									//console.log(e.target.value);
									setV2(e.target.value);
								}}
								value={v2}
							/>
						</div>
					) : (
						<Select
							required
							id="start-time"
							name="start-time"
							defaultValue="06:30"
							type="time"
							className={active === true ? "focus" : "normal"}
							onChange={(e) => {
								setV2(e.target.value);
							}}
							value={v2}
							displayEmpty>
							<MenuItem value="6am-6pm">6am to 6pm</MenuItem>
							<MenuItem value="6am-2am">6am to 2am</MenuItem>
						</Select>
					)}
					{(event === "Individual" || event === "Corporate") && (
						<div>
							<label
								htmlFor="number-of-hours"
								className={
									active === true ? "focus-label" : "booking-form-label"
								}>
								Number of Hours
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
								<MenuItem value="0">None</MenuItem>
								<MenuItem value="4">4 hours</MenuItem>
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
							Number of people
						</label>
						<input
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
						/>
					</div>
					<div>
						<label
							htmlFor="activity"
							className={
								active === true ? "focus-label" : "booking-form-label"
							}>
							Activity
						</label>
						<input
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
						/>
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
					₹ {tot_price}
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
};

export default BookingForm;
