import React from "react";
import "../Assets/Styles/generalForm.css";
import { TextField, Button } from "@mui/material";

const Form = ({ labels }) => {
	return (
		<form className="general-form">
			{labels.map((item, index) => (
				<div key={index}>
					<TextField label={item} variant="outlined" fullWidth />
				</div>
			))}
			<span>
				<Button variant="contained">Continue</Button>
			</span>
		</form>
	);
};

export default Form;
