import React from "react";
import "../Assets/Styles/generalForm.css";
import { TextField, Button } from "@mui/material";

//

const Form = ({ labels, heading }) => {
	return (
		<div>
			<h1 className="form-heading">{heading}</h1>
			<form className="general-form">
				{labels.map((item, index) => (
					<div key={index}>
						<TextField label={item} variant="standard" fullWidth />
					</div>
				))}
				<span>
					<Button
						variant="contained"
						sx={{
							backgroundColor: "#ff6767",
						}}>
						Continue
					</Button>
				</span>
			</form>
		</div>
	);
};

export default Form;
