import React, { useState } from "react";
import "../../Assets/Styles/Details/bookingForm.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const BookingForm = ({
	v1,
	v2,
	v3,
	v4,
	v5,
	v6,
	setV1,
	setV2,
	setV3,
	setV4,
	setV5,
	setV6,
	locationData
}) => {
	const [active, setActive] = useState(false);
	const [event, setEvent] = useState("");
	// const [price, setV6] = useState(0);
	const navigate = useNavigate();
	const handleClick = () => {
		//console.log(v1, v2, v3, v4, v5);
		if (v1 !== "" && v2 !== "" && v3 !== "" && v4 !== "" && v5 !== "") {
			//console.log("Navigate", navigate);
			navigate(`/${window.location.pathname.substring(10)}/booking`);
		} else {
			toast.error("Please fill all the fields");
		}
	};

	const calculatePrice = () => {
		console.log(event);
		if(event.startsWith("film") || event.startsWith("Film") || event.startsWith("webseries") || event.startsWith("Webseries") || event.startsWith("Ad"))
		    {
				const rate = locationData?.pricing?.film_webseries_ad?.hourly_rate;
				setV6(rate);
			}
		else if(event.startsWith("corporate") || event.startsWith("Corporate"))
		{
			const rate = locationData?.pricing?.corporate?.hourly_rate;
			setV6(rate);
		}
		else if(event.startsWith("TV") || event.startsWith("Tv") || event.startsWith("series"))
		{
			const rate = locationData?.pricing?.tv_series_other?.hourly_rate;
			setV6(rate);
		} 
		else{
			const rate = locationData?.pricing?.individual?.hourly_rate;
			setV6(rate);
		}
	};

	return (
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
						className={active === true ? "focus-label" : "booking-form-label"}>
						Event
					</label>
					<input
						required
						type="text"
						className={active === true ? "focus" : "normal"}
						id="event"
						name="event"
						placeholder="Event"
						onChange={(e) => setEvent(e.target.value)}
						value = {event}
						// defaultValue={new Date().toISOString().split("T")[0]}
					/>
				</div>
				<div>
					<label
						htmlFor="date"
						className={active === true ? "focus-label" : "booking-form-label"}>
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
					/>
				</div>
				<div>
					<label
						htmlFor="start-time"
						className={active === true ? "focus-label" : "booking-form-label"}>
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
					/>
				</div>
				<div>
					<label
						htmlFor="number-of-hours"
						className={active === true ? "focus-label" : "booking-form-label"}>
						Number of Hours
					</label>
					<input
						required
						type="number"
						id="number-of-hours"
						name="number-of-hours"
						placeholder="Approx. no."
						className={active === true ? "focus" : "normal"}
						onChange={(e) => {
							//console.log(e.target.value);
							setV3(e.target.value);
						}}
					/>
				</div>
				<div>
					<label
						htmlFor="number-of-people"
						className={active === true ? "focus-label" : "booking-form-label"}>
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
					/>
				</div>
				<div>
					<label
						htmlFor="activity"
						className={active === true ? "focus-label" : "booking-form-label"}>
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
					/>
				</div>
				<div className="submit" type="submit" onClick={calculatePrice}>
					Apply
				</div>
			</form>
			<div
				style={{
					marginTop: "20px",
					display: "flex",
					alignItems: "center",
					gap: "30px",
				}}>
				<div className={active === true ? "active-rate" : "rate"}>$ {v6}/hr</div>
				<div className="submit" type="submit" onClick={handleClick}>
					Reserve
				</div>
			</div>
		</div>
	);
};

export default BookingForm;
