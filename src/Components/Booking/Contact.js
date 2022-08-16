import React, { useState } from "react";
import { MenuItem, TextField } from "@mui/material";

import "../../Assets/Styles/Booking/booking.css";

const Contact = () => {
	const [value, setValue] = useState("Individual");

	const handleChange = (event) => {
		setValue(event.target.value);
	};

	return (
		<form id="booking-page-form">
			<div>
				<label htmlFor="name">Name</label>
				<TextField required id="name" type="text" fullWidth size="small" />
			</div>
			<div>
				<label htmlFor="surname">Surame</label>
				<TextField required id="surname" type="text" fullWidth size="small" />
			</div>
			<div>
				<label htmlFor="who">Who Reserves</label>
				<TextField
					id="who"
					select
					fullWidth
					value={value}
					onChange={handleChange}>
					<MenuItem value="Individual">Individual</MenuItem>
					<MenuItem value="Company">Company</MenuItem>
				</TextField>
			</div>
			<div>
				<label htmlFor="name">
					{value === "Individual" ? "Profession" : "Company Name"}
				</label>
				<TextField
					required
					id="profession"
					type="text"
					fullWidth
					size="small"
				/>
			</div>
			{value === "Company" && (
				<div>
					<label htmlFor="designation">Designation</label>
					<TextField
						required
						id="designation"
						type="text"
						fullWidth
						size="small"
					/>
				</div>
			)}
			<div>
				<label htmlFor="dob">Date of Birth</label>
				<TextField required id="dob" type="date" fullWidth size="small" />
			</div>

			<div>
				<label htmlFor="message">Send Message to the Host</label>
				<TextField
					required
					id="message"
					type="text"
					multiline
					fullWidth
					size="small"
					minRows={5}
				/>
			</div>
		</form>
	);
};

export default Contact;
