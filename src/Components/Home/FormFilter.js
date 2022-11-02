import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../Assets/Styles/Home/formFilter.css";
import {
	MenuItem,

} from "@mui/material";
import Select from "react-select";
import { OutlinedFlag } from "@mui/icons-material";
const FormFilter = ({ fullScreen }) => {
	const [active, setActive] = useState(false);
	const [event, setEvent] = useState(0);

	const changeEvent = (e) => {
		setEvent(e.value);
	}

	const options = [
		{ value: "1", label: "Film Shooting" },
		{ value: "2", label: "Corporate Booking" },
		{ value: "3", label: "Individual Booking" },
	];

	const filterOptions = {
		Activity: [
			[{ value: '', label: '' }],
			[
				{ value: 'Film Shoot', label: 'Film Shoot' },
				{ value: 'Web Series Shoot', label: 'Web Series Shoot' },
				{ value: 'Ad Film Shoot', label: 'Ad Film Shoot' },
				{ value: 'Music Album Shoot', label: 'Music Album Shoot' },
				{ value: 'Green Screen', label: 'Green Screen' },
				{ value: 'Photoshoot', label: 'Photoshoot' }
			],
			[
				{ value: 'Party', label: 'Party' },
				{ value: 'Product Release / Demo', label: 'Product Release / Demo' },
				{ value: 'Awards Ceremony', label: 'Awards Ceremony' },
				{ value: 'Conference', label: 'Conference' }
			],
			[
				{ value: 'Birthday Party', label: 'Birthday Party' },
				{ value: 'Family / Friends OutlinedFlag', label: 'Family / Friends OutlinedFlag' },
				{ value: 'Conference / Counselling', label: 'Conference / Counselling' }
			]
		],

		Location: [
			[{ value: '', label: '' }],
			[
				{ value: 'Rich house', label: 'Rich house'},
				{ value: 'Police station', label: 'Police station'},
				{ value: 'Manduva House', label: 'Manduva House'},
				{ value: 'Industry', label: 'Industry'},
				{ value: 'Farm land', label: 'Farm land'},
				{ value: 'Farm house', label: 'Farm house'},
				{ value: 'Wooden house', label: 'Wooden house'},
				{ value: 'Forest', label: 'Forest'},
				{ value: 'Lakes', label: 'Lakes'},
				{ value: 'Hotel', label: 'Hotel'},
				{ value: 'School', label: 'School'},
				{ value: 'College', label: 'College'},
				{ value: 'Corporate Office', label: 'Corporate Office'},
				{ value: 'Factory', label: 'Factory'},
				{ value: 'Apartment', label: 'Apartment'},
				{ value: 'Apartment parking', label: 'Apartment parking'},
				{ value: 'Movie Theatres', label: 'Movie Theatres'},
				{ value: 'TV Stations', label: 'TV Stations'},
				{ value: 'Studio Floors', label: 'Studio Floors'},
				{ value: 'Village atmosphere', label: 'Village atmosphere'},
				{ value: 'BT roads (open roads)', label: 'BT roads (open roads)'},
				{ value: 'Hospital', label: 'Hospital'},
				{ value: 'Civil Court', label: 'Civil Court'},
				{ value: 'Sports auditoriums', label: 'Sports auditoriums'},
				{ value: 'Event auditoriums', label: 'Event auditoriums'},
				{ value: 'Pubs', label: 'Pubs'},
				{ value: 'Restaurants', label: 'Restaurants'},
				{ value: 'Dhaba', label: 'Dhaba'},
				{ value: 'Jail', label: 'Jail'},
				{ value: 'Railway station', label: 'Railway station'},
				{ value: 'Bus Stand', label: 'Bus Stand'},
				{ value: 'Shopping Malls', label: 'Shopping Malls'},
				{ value: 'Gated Community', label: 'Gated Community'},
				{ value: 'Shooting floors', label: 'Shooting floors'}
			],
			[
			{ value: 'Resorts', label: 'Resorts' },
			{ value: 'Weekend Farming', label: 'Weekend Farming' },
			{ value: 'Farm house', label: 'Farm house' },
			{ value: 'Wooden house', label: 'Wooden house' },
			{ value: 'Forest Stay', label: 'Forest Stay' },
			{ value: 'Lake Stay', label: 'Lake Stay' },
			{ value: 'Hotel Stay', label: 'Hotel Stay' },
			{ value: 'Convention Centres', label: 'Convention Centres' },
			{ value: 'Banquet Halls', label: 'Banquet Halls' },
			{ value: 'Pubs', label: 'Pubs' },
			{ value: 'Restaurants', label: 'Restaurants' }
			],

			[
			{ value: 'Resorts', label: 'Resorts' },
			{ value: 'Weekend Farming', label: 'Weekend Farming' },
			{ value: 'Farm house', label: 'Farm house' },
			{ value: 'Wooden house', label: 'Wooden house' },
			{ value: 'Forest Stay', label: 'Forest Stay' },
			{ value: 'Lake Stay', label: 'Lake Stay' },
			{ value: 'Hotel Stay', label: 'Hotel Stay' },
			{ value: 'Convention Centres', label: 'Convention Centres' },
			{ value: 'Banquet Halls', label: 'Banquet Halls' },
			{ value: 'Restaurants', label: 'Restaurants' }
			]
		]
	};


	let city = [
		{ value: "1", label: "Hyderabad" },
	];

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
						options={options}
						defaultValue=""

						className={active === true ? "focus-select" : "form-filter-select"}
						onChange={changeEvent}>
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
						options={filterOptions.Activity[event]}
						defaultValue=""
						isDisabled={event === 0 ? true : false}
						className={active === true ? "focus-select" : "form-filter-select"}>
					</Select>
					{event === 0 && <p style={{fontSize: "15px", color: "grey"}}>Please select location first</p>}
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
						options={filterOptions.Location[event]}
						defaultValue=""
						isDisabled={event === 0 ? true : false}
						className={active === true ? "focus-select" : "form-filter-select"}>
					</Select>
					{event === 0 && <p style={{fontSize: "15px", color: "grey"}}>Please select location first</p>}
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
						options={city}
						defaultValue=""
						className={active === true ? "focus-select" : "form-filter-select"}>
					</Select>
				</div>

				<Link
					to={`/search/` + event}
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
