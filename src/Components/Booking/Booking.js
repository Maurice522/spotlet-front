import React from "react";
import { TextField } from "@mui/material";

import "../../Assets/Styles/Booking/booking.css";

const Booking = ({ v1, v2, v3, v4, v5 }) => {
	return (
		<form id="booking-page-form">
			<div>
				<label htmlFor="date">Date</label>
				<TextField
					required
					disabled
					id="date"
					type="date"
					fullWidth
					size="small"
					defaultValue={v1}
				/>
			</div>
			<div>
				<label htmlFor="start-time">Start Time</label>
				<TextField
					required
					disabled
					id="start-time"
					type="time"
					defaultValue={v2}
					fullWidth
					size="small"
				/>
			</div>
			<div>
				<label htmlFor="duration">Duration</label>
				<TextField
					required
					disabled
					id="duration"
					type="number"
					fullWidth
					size="small"
					defaultValue={v3}
				/>
			</div>
			<div>
				<label htmlFor="attendies">Attendies</label>
				<TextField
					required
					disabled
					id="attendies"
					type="number"
					fullWidth
					size="small"
					defaultValue={v4}
				/>
			</div>
			<div>
				<label htmlFor="activity">Activity</label>
				<TextField
					required
					disabled
					id="activity"
					type="text"
					fullWidth
					size="small"
					defaultValue={v5}
				/>
			</div>
		</form>
	);
};

export default Booking;
