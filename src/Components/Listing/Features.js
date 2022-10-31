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

const Features = ({ showSection }) => {
	const options = [
		{value : "Alarm system",label:" Alarm system" },
		{value : "Architectural details, such as crown moldings, chair rails, etc.",label:" Architectural details, such as crown moldings, chair rails, etc." },
		{value : "Builder’s name, if well known in the area",label:" Builder’s name, if well known in the area" },
		{value : "Central air conditioning",label:" Central air conditioning" },
		{value : "Deck",label:" Deck" },
		{value : "Energy efficiency",label:" Energy efficiency" },
		{value : "Exercise room",label:" Exercise room" },
		{value : "Exterior lighting",label:" Exterior lighting" },
		{value : "Finished basement",label:" Finished basement" },
		{value : "Fireplaces and wood-burning stoves",label:" Fireplaces and wood-burning stoves" },
		{value : "Garage – heated, three-car, etc.",label:" Garage – heated, three-car, etc." },
		{value : "Granite countertops in kitchen",label:" Granite countertops in kitchen" },
		{value : "Great for entertaining",label:" Great for entertaining" },
		{value : "Heat pump or other energy-efficient systems",label:" Heat pump or other energy-efficient systems" },
		{value : "Home theater",label:" Home theater" },
		{value : "Hot tub",label:" Hot tub" },
		{value : "In-ground pool",label:" In-ground pool" },
		{value : "In-law or extra apartment with rental potential",label:" In-law or extra apartment with rental potential" },
		{value : "Kitchen – gourmet, great for entertaining, etc.",label:" Kitchen – gourmet, great for entertaining, etc." },
		{value : "Landscaping",label:" Landscaping" },
		{value : "Light-filled or bright",label:" Light-filled or bright" },
		{value : "Master suite with separate bath",label:" Master suite with separate bath" },
		{value : "Move-in condition",label:" Move-in condition" },
		{value : "New bathrooms or kitchen",label:" New bathrooms or kitchen" },
		{value : "New improvements, such as roof, furnace, electrical service or wiring",label:" New improvements, such as roof, furnace, electrical service or wiring" },
		{value : "New septic system",label:" New septic system" },
		{value : "Open floor plan",label:" Open floor plan" },
		{value : "Outbuildings that can be used for shops, storage, rental income, etc.",label:" Outbuildings that can be used for shops, storage, rental income, etc." },
		{value : "Pride of ownership that shows",label:" Pride of ownership that shows" },
		{value : "Solar heating or electrical",label:" Solar heating or electrical" },
		{value : "Square footage (if it represents a good value for your price)",label:" Square footage (if it represents a good value for your price)" },
		{value : "Town sewers",label:" Town sewers" },
		{value : "Upscale appliances that appeal to luxury-oriented buyers",label:" Upscale appliances that appeal to luxury-oriented buyers" },
		{value : "Views of mountains, lakes, sunsets, sunrises",label:" Views of mountains, lakes, sunsets, sunrises" },
		{value : "Window – new and energy efficient",label:" Window – new and energy efficient" },
		{value : "Wood floors",label:" Wood floors" },

	];

	const [features, setFeatures] = useState(["Terrace Garden", "Fireplace"]);
	const dispatch = useDispatch();
	const location_id = useSelector(selectLocationId);
	const location = useSelector(selectLocationData);

	// useEffect(() => {
	// 	location.features && setFeatures(location.features);
	//   }, [])

	const HandleChange = (e) => {
		if (!features.includes(e.value)) {
			setFeatures((prev) => [...prev, e.value]);
		}
	};
	const deleteoptn = (e) => {
		features.splice(e, 1);
		setFeatures((prev) => [...prev]);
	};

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
			showSection("Do’s & Don’ts");
		} catch (error) {
			toast.error(error.response.data);
		}
	};

	const [newFeature, setNewFeature] = useState("");

	return (
		<div className="lbox">
			<div className="row1">
				<div className="coll1">
					<h2>
						Features<span style={{ color: "red" }}>*</span>
					</h2>
					<Select
						className="select"
						options={options}
						onChange={HandleChange}
					/>
				</div>

				<div className="coll1">
					<h2
						style={{
							marginLeft: "30px",
							marginBottom: "8px",
						}}>
						Add New Features
					</h2>
					<div
						style={{
							marginLeft: "30px",
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
							gap: "30px",
						}}>
						<TextField
							label="Add New Amenties"
							variant="outlined"
							size="small"
							onChange={(e) => setNewFeature(e.target.value)}
						/>
						<Button
							onClick={() => {
								console.log("Add this Feature to the list", newFeature);
								features.includes(newFeature) === false
									? setFeatures((prev) => [...prev, newFeature])
									: toast.error("Feature already exists");
							}}
							variant="contained"
							sx={{
								backgroundColor: "#ea4235",
							}}>
							Add
						</Button>
					</div>
				</div>

				{/* <div className="coll1" style={{ marginLeft: "1%" }}>
					<h2>Add New</h2>
					<AddNew />
				</div> */}
			</div>

			<div className="row1">
				<div className="coll1">
					{features.map((item, index) => (
						<>
							<div className="optns">
								<GoPrimitiveDot color="#ea4235" />
								<div className="optn" key={index}>
									{item}
								</div>
								<ClearIcon onClick={() => deleteoptn(index)} />
							</div>
						</>
					))}
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
