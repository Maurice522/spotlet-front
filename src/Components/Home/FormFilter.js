import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../Assets/Styles/Home/formFilter.css";
import {
	Select,
	MenuItem,
		
} from "@mui/material";
const FormFilter = ({ fullScreen }) => {
	const [active, setActive] = useState(false);
	return (
		<div
			id="form-wrapper"
			style={
				fullScreen === true
					? {
							width: "98.7vw",
							borderRadius: "0",
					  }
					: {}
			}>
			<form
				id="form"
				style={
					fullScreen === true
						? {
								width: "99%",
								borderRadius: "0",
						  }
						: {}
				}
				onMouseEnter={() => {
					setActive(true);
				}}
				onClick={() => {
					setActive(true);
				}}
				onMouseLeave={() => {
					setActive(false);
				}}>
				<div>
					<label
						htmlFor="what"
						className={active === true ? "focus-label" : "form-filter-label"}>
						{/* What are you looking for? */}
						Event
					</label>
					<Select
						id="what"
						name="what"
						defaultValue=""
					
						className={active === true ? "focus-select" : "form-filter-select"}
						onChange={(e) => console.log(e.target.value)}>
						{/* <MenuItem value="" disabled hidden>
							What?
						</MenuItem> */}
						<MenuItem value="1">Film Shooting</MenuItem>
						<MenuItem value="2">Corporate Booking</MenuItem>
						<MenuItem value="3">Individual Booking</MenuItem>
					</Select>
				</div>
				<div>
					<label
						htmlFor="which"
						className={active === true ? "focus-label" : "form-filter-label"}>
						Activity
					</label>
					<Select
						id="which"
						name="which"
						defaultValue=""
						className={active === true ? "focus-select" : "form-filter-select"}
						onChange={(e) => console.log(e.target.value)}>
						{/* <MenuItem value="" disabled hidden>
							Which?
						</option> */}
					
						<MenuItem value="1">Film Shoot</MenuItem>
						<MenuItem value="2">Web Series Shoot</MenuItem>
						<MenuItem value="3">Ad Film Shoot</MenuItem>
						<MenuItem value="4">Music Album Shoot</MenuItem>
						<MenuItem value="5">Green Screen</MenuItem>
						<MenuItem value="6">Photo Shoot</MenuItem>
					</Select>
				</div>
				<div>
					<label
						htmlFor="where"
						className={active === true ? "focus-label" : "form-filter-label"}>
						Location
					</label>
					<Select
						id="where"
						name="where"
						defaultValue=""
						className={active === true ? "focus-select" : "form-filter-select"}
						onChange={(e) => console.log(e.target.value)}>
						{/* <MenuItem value="" disabled hidden>
							Where?
						</MenuItem> */}
						<MenuItem value="1">Telangana</MenuItem>
					</Select>
				</div>
				<div>
					<label
						htmlFor="where"
						className={active === true ? "focus-label" : "form-filter-label"}>
						City
					</label>
					<Select
						id="when"
						name="when"
						defaultValue=""
						// value="Hyderabad"
						className={active === true ? "focus-select" : "form-filter-select"}
						onChange={(e) => console.log(e.target.value)}>
						{/* <MenuItem value="" disabled hidden>
							Where?
						</MenuItem> */}
						<MenuItem value="1">Hyderabad</MenuItem>
					</Select>
				</div>

				<Link
					to="/search"
					style={{
						textDecoration: "none",
					}}>
					<div id="submit">Search</div>
				</Link>
			</form>
		</div>
	);
};

export default FormFilter;
