import React, { useEffect, useState } from "react";
// import Select from 'react-select'
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Amenities = () => {
	const options = [
		{ value: "Airport", label: "Airport" },
		{ value: "Amusement Park", label: "Amusement Park" },
		{ value: "Apartment", label: "Apartment" },
	];

	const [selOption, setselOption] = useState(["resting"]);
	const HandleChange = (e) => {
		setselOption((prev) => [...prev, e.target.value]);
	};

	// useEffect(() => {
	//     setselOption(selOption);
	// }, [])

	return (
		<div className="lbox">
			<div className="row1">
				<div className="coll1">
					<h2>Amenties</h2>
					<FormControl fullWidth>
						{/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							value={selOption[0]}
							label="Age"
							onChange={HandleChange}>
							<MenuItem value={"Ten"}>Ten</MenuItem>
							<MenuItem value={"Twenty"}>Twenty</MenuItem>
							<MenuItem value={"Thirty"}>Thirty</MenuItem>
						</Select>
					</FormControl>
				</div>
			</div>
			<div className="row1">
				<ol>
					{selOption.map((item, index) => (
						<li key={index}>{item}</li>
					))}
				</ol>
			</div>
		</div>
	);
};

export default Amenities;
