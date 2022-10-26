import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../Assets/Styles/Home/formFilter.css";
import {
	Select,
	MenuItem,
		
} from "@mui/material";
import { OutlinedFlag } from "@mui/icons-material";
const FormFilter = ({ fullScreen }) => {
	const [active, setActive] = useState(false);
	const [event, setEvent] = useState(0);

	const changeEvent = (e) => {
		setEvent(e.target.value);
	}

	const filterOptions = {
		Activity: [
			[''],
			['Film Shoot', 'Web Series Shoot', 'Ad Film Shoot', 'Music Album Shoot', 'Green Screen', 'Photoshoot'],
			['Party', 'Product Release / Demo', 'Awards Ceremony', 'Conference'],
			['Birthday Party', 'Family / Friends OutlinedFlag', 'Conference / Counselling']
		],

		Location: [
			[''],
			['Rich house', 'Police station', 'Manduva House', 'Industry', 'Farm land', 'Farm house', 'Wooden house', 'Forest', 'Lakes', 'Hotel', 'School', 'College', 'Corporate Office', 'Factory', 'Apartment', 'Apartment parking', 'Movie Theatres', 'TV Stations', 'Studio Floors', 'Village atmosphere', 'BT roads (open roads)', 'Hospital', 'Civil Court', 'Sports auditoriums', 'Event auditoriums', 'Pubs', 'Restaurants', 'Dhaba', 'Jail', 'Railway station', 'Bus Stand', 'Shopping Malls', 'Gated Community', 'Shooting floors'],
			['Resorts', 'Weekend Farming', 'Farm house', 'Wooden house', 'Forest Stay', 'Lake Stay', 'Hotel Stay', 'Convention Centres', 'Banquet Halls', 'Pubs', 'Restaurants'],
			['Resorts', 'Weekend Farming', 'Farm house', 'Wooden house', 'Forest Stay', 'Lake Stay', 'Hotel Stay', 'Convention Centres', 'Banquet Halls', 'Restaurants']
	]
	};

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
						onChange={changeEvent}>
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
					
						{filterOptions.Activity[event].map(item => <MenuItem value={filterOptions.Activity[event].indexOf(item)} key={item}>{item}</MenuItem>)}
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
						{filterOptions.Location[event].map(item => <MenuItem value={filterOptions.Activity[event].indexOf(item)} key={item}>{item}</MenuItem>)}
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
