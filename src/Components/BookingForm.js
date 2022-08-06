import React, { useState } from "react";
import "../Assets/Styles/bookingForm.css";

const BookingForm = () => {
	const [active, setActive] = useState(false);
	return (
		<div className="wrapper">
			<div className="rate">$ 00/hr</div>
			<form
				className="form"
				onMouseEnter={() => {
					setActive(true);
				}}
				onMouseLeave={() => {
					setActive(false);
				}}>
				<div>
					<label
						htmlFor="date"
						className={active === true ? "focus-label" : "label"}>
						Date
					</label>
					<input
						type="date"
						className={active === true ? "focus" : "normal"}
						id="date"
						name="date"
						defaultValue={new Date().toISOString().split("T")[0]}
					/>
				</div>
				<div>
					<label
						htmlFor="start-time"
						className={active === true ? "focus-label" : "label"}>
						Start time
					</label>
					<select
						id="start-time"
						name="start-time"
						defaultValue=""
						className={active === true ? "focus" : "normal"}>
						<option value="" disabled hidden>
							Start time
						</option>
						<option value="1">6:00</option>
						<option value="2">6:30</option>
						<option value="3">7:00</option>
						<option value="4">7:30</option>
						<option value="5">8:00</option>
						<option value="6">8:30</option>
						<option value="7">9:00</option>
						<option value="8">9:30</option>
						<option value="9">10:00</option>
						<option value="10">10:30</option>
						<option value="11">11:00</option>
						<option value="12">11:30</option>
						<option value="1">12:00</option>
						<option value="2">12:30</option>
						<option value="3">13:00</option>
						<option value="4">13:30</option>
						<option value="5">14:00</option>
						<option value="6">14:30</option>
						<option value="7">15:00</option>
						<option value="8">15:30</option>
						<option value="9">16:00</option>
						<option value="10">16:30</option>
						<option value="11">17:00</option>
						<option value="12">17:30</option>
						<option value="13">18:00</option>
						<option value="14">18:30</option>
						<option value="15">19:00</option>
						<option value="16">19:30</option>
						<option value="17">20:00</option>
						<option value="18">20:30</option>
						<option value="19">21:00</option>
						<option value="20">21:30</option>
						<option value="21">22:00</option>
						<option value="22">22:30</option>
						<option value="23">23:00</option>
						<option value="24">23:30</option>
					</select>
				</div>
				<div>
					<label
						htmlFor="end-time"
						className={active === true ? "focus-label" : "label"}>
						End time
					</label>
					<select
						id="end-time"
						name="end-time"
						defaultValue=""
						className={active === true ? "focus" : "select"}>
						<option value="" disabled hidden>
							End time
						</option>
						<option value="1">6:00</option>
						<option value="2">6:30</option>
						<option value="3">7:00</option>
						<option value="4">7:30</option>
						<option value="5">8:00</option>
						<option value="6">8:30</option>
						<option value="7">9:00</option>
						<option value="8">9:30</option>
						<option value="9">10:00</option>
						<option value="10">10:30</option>
						<option value="11">11:00</option>
						<option value="12">11:30</option>
						<option value="1">12:00</option>
						<option value="2">12:30</option>
						<option value="3">13:00</option>
						<option value="4">13:30</option>
						<option value="5">14:00</option>
						<option value="6">14:30</option>
						<option value="7">15:00</option>
						<option value="8">15:30</option>
						<option value="9">16:00</option>
						<option value="10">16:30</option>
						<option value="11">17:00</option>
						<option value="12">17:30</option>
						<option value="13">18:00</option>
						<option value="14">18:30</option>
						<option value="15">19:00</option>
						<option value="16">19:30</option>
						<option value="17">20:00</option>
						<option value="18">20:30</option>
						<option value="19">21:00</option>
						<option value="20">21:30</option>
						<option value="21">22:00</option>
						<option value="22">22:30</option>
						<option value="23">23:00</option>
						<option value="24">23:30</option>
						<option value="23">00:00(+1)</option>
						<option value="24">00:30(+1)</option>
						<option value="23">01:00(+1)</option>
						<option value="24">01:30(+1)</option>
						<option value="23">02:00(+1)</option>
						<option value="24">02:30(+1)</option>
						<option value="23">02:00(+1)</option>
						<option value="24">02:30(+1)</option>
						<option value="23">03:00(+1)</option>
						<option value="24">03:30(+1)</option>
						<option value="23">04:00(+1)</option>
						<option value="24">04:30(+1)</option>
						<option value="23">05:00(+1)</option>
						<option value="24">05:30(+1)</option>
					</select>
				</div>
				<div>
					<label
						htmlFor="number-of-people"
						className={active === true ? "focus-label" : "label"}>
						Total number of people
					</label>
					<input
						type="number"
						id="number-of-people"
						name="number-of-people"
						placeholder="Approx. no."
						className={active === true ? "focus" : "input"}
					/>
				</div>
				<input type="submit" value="Reserve" className="submit" />
			</form>
		</div>
	);
};

export default BookingForm;
