import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../Assets/Styles/Home/formFilter.css";

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
					<select
						id="what"
						name="what"
						defaultValue=""
						className={active === true ? "focus-select" : "form-filter-select"}
						onChange={(e) => console.log(e.target.value)}>
						<option value="" disabled hidden>
							What?
						</option>
						<option value="1">Select</option>
						<option value="2">Select</option>
						<option value="3">Select</option>
						<option value="4">Select</option>
					</select>
				</div>
				<div>
					<label
						htmlFor="which"
						className={active === true ? "focus-label" : "form-filter-label"}>
						Activity
					</label>
					<select
						id="which"
						name="which"
						defaultValue=""
						className={active === true ? "focus-select" : "form-filter-select"}
						onChange={(e) => console.log(e.target.value)}>
						<option value="" disabled hidden>
							Which?
						</option>
						<option value="1">Select</option>
						<option value="2">Select</option>
						<option value="3">Select</option>
						<option value="4">Select</option>
					</select>
				</div>
				<div>
					<label
						htmlFor="where"
						className={active === true ? "focus-label" : "form-filter-label"}>
						Location
					</label>
					<select
						id="where"
						name="where"
						defaultValue=""
						className={active === true ? "focus-select" : "form-filter-select"}
						onChange={(e) => console.log(e.target.value)}>
						<option value="" disabled hidden>
							Where?
						</option>
						<option value="1">Select</option>
						<option value="2">Select</option>
						<option value="3">Select</option>
						<option value="4">Select</option>
					</select>
				</div>
				<div>
					<label
						htmlFor="when"
						className={active === true ? "focus-label" : "form-filter-label"}>
						City
					</label>
					<select
						id="when"
						name="when"
						defaultValue=""
						className={active === true ? "focus-select" : "form-filter-select"}
						onChange={(e) => console.log(e.target.value)}>
						<option value="" disabled hidden>
							When?
						</option>
						<option value="1">Select</option>
						<option value="2">Select</option>
						<option value="3">Select</option>
						<option value="4">Select</option>
					</select>
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
