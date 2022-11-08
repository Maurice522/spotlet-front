import React, { useState } from "react";
import { MenuItem, TextField } from "@mui/material";

import "../../Assets/Styles/Booking/contact.css";

const Contact = ({ setReadyForRequest, setUserData, userData }) => {
	const handleChange = (e) => {
		setUserData({ ...userData, [e.target.name]: e.target.value });
		window.scrollTo(0, 0)
	};

	let dtToday = new Date();

	let month = dtToday.getMonth() + 1;
	let day = dtToday.getDate();
	let year = dtToday.getFullYear();

	if (month < 10)
		month = '0' + month.toString();
	if (day < 10)
		day = '0' + day.toString();

	let maxDate = year + '-' + month + '-' + day;

	// const [name, setName] = useState("");
	// const [surname, setSurname] = useState("");
	// const [profession, setProfession] = useState("");
	// const [dob, setDob] = useState("");
	// const [designation, setDesignation] = useState("");
	// const [message, setMessage] = useState("");

	// if (
	// 	name !== "" &&
	// 	surname !== "" &&
	// 	profession !== "" &&
	// 	dob !== "" &&
	// 	message !== ""
	// ) {
	// 	if (value === "Individual") {
	// 		setReadyForRequest(true);
	// 		setUserData({
	// 			fullName : name + " " + surname,
	// 			who_reserves : value,
	// 			profession,
	// 			dob,
	// 			message
	// 		})
	// 	}
	// 	if (value === "Company" && designation !== "") {
	// 		setReadyForRequest(true);
	// 		setUserData({
	// 			fullName : name + " " + surname,
	// 			who_reserves : value,
	// 			designation,
	// 			company : profession,
	// 			dob,
	// 			message
	// 		})
	// 	}
	// }

	return (
		<form id="booking-contact-form">
			{/* <label htmlFor="name">Name</label> */}
			<div>
				<div>
					<label htmlFor="name">Name</label>
					<TextField
						required
						id="name"
						name="firstName"
						type="text"
						fullWidth
						size="small"
						onChange={handleChange}
						value={userData.firstName}
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
						name="lastName"
						onChange={handleChange}
						value={userData.lastName}
					/>
				</div>
			</div>

			<div>
				<div>
					<label htmlFor="who">Who reserves</label>
					<TextField
						id="who"
						select
						name="who_reserves"
						onChange={handleChange}
						value={userData.who_reserves}
						fullWidth
						size="small"
					>
						<MenuItem value="Individual">Individual</MenuItem>
						<MenuItem value="Company">Company</MenuItem>
					</TextField>
				</div>

				<div>
					<label htmlFor="profession">
						{userData.who_reserves === "Individual" ? "Profession" : "Company Name"}
					</label>
					<TextField
						required
						id="profession"
						type="text"
						fullWidth
						size="small"
						name={userData.who_reserves === "Individual" ? "profession" : "company"}
						onChange={handleChange}
						value={userData.who_reserves === "Individual" ? userData.profession : userData.company}
					/>
				</div>
			</div>

			{userData.who_reserves === "Company" ? (
				<div className="name-container">
					<div>
						<label htmlFor="designation">Designation</label>
						<TextField
							required
							id="designation"
							type="text"
							fullWidth
							size="small"
							name="designation"
							onChange={handleChange}
							value={userData.designation}
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
							name="dob"
							onChange={handleChange}
							value={userData.dob}
							inputProps={{ max: maxDate }}
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
						name="dob"
						onChange={handleChange}
						value={userData.dob}
						inputProps={{ max: maxDate }}
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
					name="message"
					onChange={handleChange}
					value={userData.message}
				/>
			</div>
		</form>
	);
};

export default Contact;
