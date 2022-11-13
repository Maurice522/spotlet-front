import React, { useEffect, useState } from "react";
import { GoPrimitiveDot } from "react-icons/go";
import Select from "react-select";
import ClearIcon from "@mui/icons-material/Clear";
import { TextField, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
	addLocation,
	selectLocationData,
	selectLocationId,
} from "../../redux/slices/locationSlice";
import { createTempLocation } from "../../services/api";
import { toast } from "react-toastify";
import Dondont from "../Listing/AddNew";
import AddNew from "../Listing/AddNew";
import CheckboxDropdownComponent from "react-checkbox-dropdown";

const Features = ({ showSection, changeSection }) => {
	const options = [
		{ value: "Alarm system", label: " Alarm system" },
		{ value: "Architectural details, such as crown moldings, chair rails, etc.", label: " Architectural details, such as crown moldings, chair rails, etc." },
		{ value: "Builder’s name, if well known in the area", label: " Builder’s name, if well known in the area" },
		{ value: "Central air conditioning", label: " Central air conditioning" },
		{ value: "Deck", label: " Deck" },
		{ value: "Energy efficiency", label: " Energy efficiency" },
		{ value: "Exercise room", label: " Exercise room" },
		{ value: "Exterior lighting", label: " Exterior lighting" },
		{ value: "Finished basement", label: " Finished basement" },
		{ value: "Fireplaces and wood-burning stoves", label: " Fireplaces and wood-burning stoves" },
		{ value: "Garage – heated, three-car, etc.", label: " Garage – heated, three-car, etc." },
		{ value: "Granite countertops in kitchen", label: " Granite countertops in kitchen" },
		{ value: "Great for entertaining", label: " Great for entertaining" },
		{ value: "Heat pump or other energy-efficient systems", label: " Heat pump or other energy-efficient systems" },
		{ value: "Home theater", label: " Home theater" },
		{ value: "Hot tub", label: " Hot tub" },
		{ value: "In-ground pool", label: " In-ground pool" },
		{ value: "In-law or extra apartment with rental potential", label: " In-law or extra apartment with rental potential" },
		{ value: "Kitchen – gourmet, great for entertaining, etc.", label: " Kitchen – gourmet, great for entertaining, etc." },
		{ value: "Landscaping", label: " Landscaping" },
		{ value: "Light-filled or bright", label: " Light-filled or bright" },
		{ value: "Master suite with separate bath", label: " Master suite with separate bath" },
		{ value: "Move-in condition", label: " Move-in condition" },
		{ value: "New bathrooms or kitchen", label: " New bathrooms or kitchen" },
		{ value: "New improvements, such as roof, furnace, electrical service or wiring", label: " New improvements, such as roof, furnace, electrical service or wiring" },
		{ value: "New septic system", label: " New septic system" },
		{ value: "Open floor plan", label: " Open floor plan" },
		{ value: "Outbuildings that can be used for shops, storage, rental income, etc.", label: " Outbuildings that can be used for shops, storage, rental income, etc." },
		{ value: "Pride of ownership that shows", label: " Pride of ownership that shows" },
		{ value: "Solar heating or electrical", label: " Solar heating or electrical" },
		{ value: "Square footage (if it represents a good value for your price)", label: " Square footage (if it represents a good value for your price)" },
		{ value: "Town sewers", label: " Town sewers" },
		{ value: "Upscale appliances that appeal to luxury-oriented buyers", label: " Upscale appliances that appeal to luxury-oriented buyers" },
		{ value: "Views of mountains, lakes, sunsets, sunrises", label: " Views of mountains, lakes, sunsets, sunrises" },
		{ value: "Window – new and energy efficient", label: " Window – new and energy efficient" },
		{ value: "Wood floors", label: " Wood floors" },

	];

	const [features, setFeatures] = useState(["Terrace Garden", "Fireplace"]);
	const dispatch = useDispatch();
	const location_id = useSelector(selectLocationId);
	const location = useSelector(selectLocationData);


	const handleSubmit = async (e) => {
		e.preventDefault();
		//console.log(features)
		if (!features.length)
			return toast.error("Please fill all required fields!!!");
		const locData = {
			...location,
			features,
		};
		dispatch(addLocation(locData));
		const form = {
			location_id,
			data: locData,
		};
		try {
			await createTempLocation(form);
			showSection("Do's & Don'ts");
		} catch (error) {
			toast.error(error.response.data);
		}

		changeSection("Do's & Don'ts");
		window.scrollTo(0, 0);
	};
	const [checkboxValue, setValue] = useState([]);

	return (
		<div className="lbox">
			<div className="row1">
				<div className="coll1 custom-dropdown">
					<h2>
						Features<span style={{ color: "red" }}>*</span>
					</h2>
					<CheckboxDropdownComponent
						displayText="Select Amenities"
						options={options}
						onChange={option => {
							if (!checkboxValue.includes(option)) {
								const newValue = [option, ...checkboxValue];
								setValue(newValue);
							}
							if (!features.includes(option.value)) {
								setFeatures((prev) => [option.value, ...prev]);
							}
						}}
						onDeselectOption={option => {
							const filteredOptions = checkboxValue.filter(
								item => item.value !== option.value
							);
							const finalOptions = features.filter(
								item => item !== option.value
							);
							setValue(filteredOptions);
							setFeatures(finalOptions)
						}}
						value={checkboxValue}
						displayTags
						isStrict={false}
					/>
				</div>
				<div>
					<h2>Selected AFeatures</h2>
					<ul className="selected-options">
						{features.map(item => <li key={item}>{item}</li>)}
					</ul>
				</div>
			</div>
			<div className="row1">
				<div className="coll1">
					<button className="continue" onClick={handleSubmit}>
						Continue
					</button>
				</div>
			</div>
		</div>
	);
};

export default Features;
