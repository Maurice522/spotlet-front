import React, { useState } from "react";
import "../../Assets/Styles/Details/bookingForm.css";

import { useNavigate } from "react-router-dom";

const BookingForm = ({
	v1,
	v2,
	v3,
	v4,
	v5,
	setV1,
	setV2,
	setV3,
	setV4,
	setV5,
}) => {
	const [active, setActive] = useState(false);

	const navigate = useNavigate();

	const handleClick = () => {
		console.log(v1, v2, v3, v4, v5);
		if (v1 !== "" && v2 !== "" && v3 !== "" && v4 !== "" && v5 !== "") {
			console.log("Navigate", navigate);
			setTimeout(() => {
				setV1(new Date().toISOString().split("T")[0]);
				setV2("06:30");
				setV3("");
				setV4("");
				setV5("");
			}, 0);
			navigate("/booking");
		} else {
			alert("Please fill all the fields");
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
			<div className={active === true ? "active-rate" : "rate"}>$ 00/hr</div>
			<form className="form">
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
							console.log(e.target.value);
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
							console.log(e.target.value);
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
							console.log(e.target.value);
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
							console.log(e.target.value);
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
							console.log(e.target.value);
							setV5(e.target.value);
						}}
					/>
				</div>
				<div className="submit" type="submit" onClick={handleClick}>
					Reserve
				</div>
			</form>
		</div>
	);
};

export default BookingForm;
