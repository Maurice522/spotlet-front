import React, { useState } from "react";
import { MenuItem, TextField } from "@mui/material";

import "../../Assets/Styles/Booking/contact.css";

const Contact = ({ setReadyForRequest }) => {
	const [value, setValue] = useState("Individual");

	const handleChange = (event) => {
		setValue(event.target.value);
	};

	const [name, setName] = useState("");
	const [surname, setSurname] = useState("");
	const [profession, setProfession] = useState("");
	const [dob, setDob] = useState("");
	const [designation, setDesignation] = useState("");
	const [message, setMessage] = useState("");

	if (
		name !== "" &&
		surname !== "" &&
		profession !== "" &&
		dob !== "" &&
		message !== ""
	) {
		if (value === "Individual") {
			setReadyForRequest(true);
		}
		if (value === "Company" && designation !== "") {
			setReadyForRequest(true);
		}
	}

	return (
		<form id="booking-contact-form">
			{/* <label htmlFor="name">Name</label> */}
			<div className="name-container">
				<div>
					<label htmlFor="name">Name</label>
					<TextField
						required
						id="name"
						type="text"
						fullWidth
						size="small"
						onChange={(e) => {
							setName(e.target.value);
						}}
					/>
				</div>

				<div>
					<label htmlFor="surname">Surname</label>
					<TextField
						required
						id="surname"
						type="text"
						fullWidth
						size="small"
						onChange={(e) => {
							setSurname(e.target.value);
						}}
					/>
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
						onChange={(e) => {
							setProfession(e.target.value);
						}}
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
							onChange={(e) => {
								setDesignation(e.target.value);
							}}
						/>
					</div>
					<div>
						<label htmlFor="dob">Date of Birth</label>
						<TextField
							required
							id="dob"
							type="date"
							fullWidth
							size="small"
							onChange={(e) => {
								setDob(e.target.value);
							}}
						/>
					</div>
				</div>
			) : (
				<div>
					<label htmlFor="dob">Date of Birth</label>
					<TextField
						required
						id="dob"
						type="date"
						fullWidth
						size="small"
						onChange={(e) => {
							setDob(e.target.value);
						}}
					/>
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
					onChange={(e) => {
						setMessage(e.target.value);
					}}
				/>
			</div>
		</form>
	);
};

export default Contact;
