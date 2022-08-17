import React, { useState } from "react";
import { MenuItem, TextField } from "@mui/material";

import "../../Assets/Styles/Booking/contact.css";

const Contact = () => {
	const [value, setValue] = useState("Individual");

	const handleChange = (event) => {
		setValue(event.target.value);
	};

	return (
		<form id="booking-contact-form">
			{/* <label htmlFor="name">Name</label> */}
			<div className="name-container">
				<div>
					<label htmlFor="name">Name</label>
					<TextField required id="name" type="text" fullWidth size="small" />
				</div>

				<div>
					<label htmlFor="surname">Surname</label>
					<TextField required id="surname" type="text" fullWidth size="small" />
				</div>
			</div>

			<div className="name-container">
				<div>
					<label htmlFor="who">Who reserves</label>
					<TextField
						id="who"
						select
						value={value}
						fullWidth
						size="small"
						onChange={handleChange}>
						<MenuItem value="Individual">Individual</MenuItem>
						<MenuItem value="Company">Company</MenuItem>
					</TextField>
				</div>

				<div>
					<label htmlFor="profession">
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
			</div>

			{value === "Company" ? (
				<div className="name-container">
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
					<div>
						<label htmlFor="dob">Date of Birth</label>
						<TextField required id="dob" type="date" fullWidth size="small" />
					</div>
				</div>
			) : (
				<div>
					<label htmlFor="dob">Date of Birth</label>
					<TextField required id="dob" type="date" fullWidth size="small" />
				</div>
			)}

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
