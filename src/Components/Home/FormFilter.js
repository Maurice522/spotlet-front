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
						What are you planning?
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
						Date
					</label>
					<input
						type="date"
						id="when"
						name="when"
						placeholder="When?"
						className={active === true ? "focus-input" : "form-filter-input"}
						onChange={(e) => console.log(e.target.value)}
					/>
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
