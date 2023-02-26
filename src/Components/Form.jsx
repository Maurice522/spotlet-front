import React, { useState } from "react";
import "../Assets/Styles/generalForm.css";
import { TextField, Button } from "@mui/material";
import { contactUs, photoshootRequest } from "../services/api";
import { toast } from "react-toastify";

const Form = ({ labels, heading, btnContent }) => {
	const [form, setform] = useState({
		fullName: "",
		email: "",
		mobile: "",
		message: "",
		date:"",
	});
	const handleSubmit = async () => {
		try {
			console.log(form);
			if (heading === "Contact US") {
				await contactUs(form);
			} else {
				await photoshootRequest(form);
			}
			toast.success("Form Submitted");
		} catch (error) {
			toast.error(error);
		}
	};
	return (
		<div>
			<h1 className="form-heading">{heading}</h1>
			<form className="general-form" style={{ width: "55%" }}>
				<TextField
					label={labels[0]}
					onChange={(e) => setform({ ...form, fullName: e.target.value })}
					variant="standard"
					fullWidth
				/>
				<TextField
					label={labels[1]}
					onChange={(e) => setform({ ...form, email: e.target.value })}
					variant="standard"
					fullWidth
				/>
				<TextField
					label={labels[2]}
					onChange={(e) => setform({ ...form, mobile: e.target.value })}
					variant="standard"
					fullWidth
				/>
				<TextField
					label={labels[3]}
					onChange={(e) => setform({ ...form, message: e.target.value })}
					variant="standard"
					fullWidth
				/>
				<TextField
					label="Date"
					type="date"
					onChange={(e) => setform({ ...form, date: e.target.value })}
					variant="standard"
					fullWidth
				/>
				<span>
					<Button
						variant="contained"
						onClick={() => handleSubmit()}
						sx={{
							backgroundColor: "#ff6767",
						}}
					>
						{btnContent ? btnContent : "Send"}
					</Button>
				</span>
			</form>
		</div>
	);
};

export default Form;
