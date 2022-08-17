import React from "react";
import { FormControlLabel, Checkbox } from "@mui/material";
import "../../Assets/Styles/Booking/rules.css";

const Rules = ({ isOk }) => {
	const handleChange = (e) => {
		console.log(e.target.checked);
		isOk(e.target.checked);
	};

	return (
		<div className="rules-wrapper">
			<div>
				<div className="rule-title">Cancellation Policy</div>
				<div className="rule-info">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit
					nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus
					pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat. Nulla
					aliquet porttitor venenatis. Donec a dui et dui fringilla consectetur
					id nec massa. Aliquam erat volutpat.
				</div>
			</div>

			<div>
				<div className="rule-title">Rules of the host</div>
				<div className="rule-info">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit
					nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus
					pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat. Nulla
					aliquet porttitor venenatis. Donec a dui et dui fringilla consectetur
					id nec massa. Aliquam erat volutpat.
					<br />
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit
					nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus
					pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat. Nulla
					aliquet porttitor venenatis. Donec a dui et dui fringilla consectetur
					id nec massa. Aliquam erat volutpat.
					<br />
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit
					nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus
					pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat. Nulla
					aliquet porttitor venenatis. Donec a dui et dui fringilla consectetur
					id nec massa. Aliquam erat volutpat.
				</div>
			</div>

			<div className="terms-conditions">
				<FormControlLabel
					control={
						<Checkbox
							onChange={handleChange}
							sx={{
								color: "#ea4235",
								"&.Mui-checked": {
									color: "#ea4235",
								},
							}}
						/>
					}
					label="I understand and accept the rules of the host and its cancellation policy"
				/>
			</div>
		</div>
	);
};

export default Rules;
