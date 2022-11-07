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

const Amenities = ({ showSection, changeSection }) => {
	const options = [
		{ value: "Air Conditioning", label: "Air Conditioning" },
		{ value: "Access to public transportation", label: " Access to public transportation" },
		{ value: "Air conditioning", label: " Air conditioning" },
		{ value: "All utilities included", label: " All utilities included" },
		{ value: "Balcony", label: " Balcony" },
		{ value: "Bark Parks", label: " Bark Parks" },
		{ value: "Bike Parking", label: " Bike Parking" },
		{ value: "Business Center", label: " Business Center" },
		{ value: "Cable ready", label: " Cable ready" },
		{ value: "Ceiling Fans in All Bedrooms", label: " Ceiling Fans in All Bedrooms" },
		{ value: "Clubhouse with Lounge Seating", label: " Clubhouse with Lounge Seating" },
		{ value: "Co-Working Spaces", label: " Co-Working Spaces" },
		{ value: "Community Lounge", label: " Community Lounge" },
		{ value: "Computer Desks In Each Unit", label: " Computer Desks In Each Unit" },
		{ value: "Conference Rooms", label: " Conference Rooms" },
		{ value: "Courtyard", label: " Courtyard" },
		{ value: "Covered Parking", label: " Covered Parking" },
		{ value: "Custom Cabinetry and Large Kitchen Islands", label: " Custom Cabinetry and Large Kitchen Islands" },
		{ value: "Custom Colored Accent walls", label: " Custom Colored Accent walls" },
		{ value: "Dining Room", label: " Dining Room" },
		{ value: "Dishwasher", label: " Dishwasher" },
		{ value: "Dual Sinks", label: " Dual Sinks" },
		{ value: "Fire Pits", label: " Fire Pits" },
		{ value: "Fitness Center", label: " Fitness Center" },
		{ value: "Fitness Center – Technogym Equipped", label: " Fitness Center – Technogym Equipped" },
		{ value: "Food Shopping", label: " Food Shopping" },
		{ value: "Frameless Shower Doors", label: " Frameless Shower Doors" },
		{ value: "Furnished apartments", label: " Furnished apartments" },
		{ value: "Garages", label: " Garages" },
		{ value: "Gated Access", label: " Gated Access" },
		{ value: "Golf Simulators", label: " Golf Simulators" },
		{ value: "Greater Amounts of Storage", label: " Greater Amounts of Storage" },
		{ value: "Grilling Pavilion", label: " Grilling Pavilion" },
		{ value: "Hair and Nail Salons", label: " Hair and Nail Salons" },
		{ value: "High-speed internet access", label: " High-speed internet access" },
		{ value: "In-unit washer and dryer", label: " In-unit washer and dryer" },
		{ value: "Indoor Basketball", label: " Indoor Basketball" },
		{ value: "Indoor Mail Boxes and Mobile Package Service Alerts", label: " Indoor Mail Boxes and Mobile Package Service Alerts" },
		{ value: "Lake", label: " Lake" },
		{ value: "Laundry Facility", label: " Laundry Facility" },
		{ value: "Library", label: " Library" },
		{ value: "Luxury Bathrooms", label: " Luxury Bathrooms" },
		{ value: "Movie Theater", label: " Movie Theater" },
		{ value: "Multi-Purpose Game Room", label: " Multi-Purpose Game Room" },
		{ value: "Online Payments", label: " Online Payments" },
		{ value: "Oversized Balconies Over Looking Pool", label: " Oversized Balconies Over Looking Pool" },
		{ value: "Pet friendly", label: " Pet friendly" },
		{ value: "Pet-Friendly", label: " Pet-Friendly" },
		{ value: "Pets allowed", label: " Pets allowed" },
		{ value: "Plush Carpeting in Bedrooms", label: " Plush Carpeting in Bedrooms" },
		{ value: "Private Balconies and Patios", label: " Private Balconies and Patios" },
		{ value: "Private Bedrooms and Bathrooms", label: " Private Bedrooms and Bathrooms" },
		{ value: "Private Meeting Rooms", label: " Private Meeting Rooms" },
		{ value: "Quartz Countertops with Tile Backsplash", label: " Quartz Countertops with Tile Backsplash" },
		{ value: "Resort-Style Pools", label: " Resort-Style Pools" },
		{ value: "Roof-Top Terraces", label: " Roof-Top Terraces" },
		{ value: "Screening Room with 128” Projector screen", label: " Screening Room with 128” Projector screen" },
		{ value: "Some utilities included", label: " Some utilities included" },
		{ value: "Sound-Proof Music JamRoom with Piano", label: " Sound-Proof Music JamRoom with Piano" },
		{ value: "Spa", label: " Spa" },
		{ value: "Spacious Walk-In Closets", label: " Spacious Walk-In Closets" },
		{ value: "Stainless Steel Appliances", label: " Stainless Steel Appliances" },
		{ value: "Sun Deck", label: " Sun Deck" },
		{ value: "Sun Tanning Salon", label: " Sun Tanning Salon" },
		{ value: "Swimming Pool", label: " Swimming Pool" },
		{ value: "Swimming pool", label: " Swimming pool" },
		{ value: "Toddler Room", label: " Toddler Room" },
		{ value: "Utilities Included", label: " Utilities Included" },
		{ value: "Valet Parking", label: " Valet Parking" },
		{ value: "Washer and dryer connections", label: " Washer and dryer connections" },
		{ value: "Washer and Dryers", label: " Washer and Dryers" },
		{ value: "Wireless internet access", label: " Wireless internet access" },
		{ value: "Wood-Style Flooring in Living and Dining Areas", label: " Wood-Style Flooring in Living and Dining Areas" },
		{ value: "“Smart” Sensors that Control Lighting and Temperature", label: " “Smart” Sensors that Control Lighting and Temperature" },
	];
	const [amenities, setAmenities] = useState(["Wifi", "TV Included", "Wine Cellar"]);
	const dispatch = useDispatch();
	const location_id = useSelector(selectLocationId);
	const location = useSelector(selectLocationData);

	const [newAmenity, setNewAmenity] = useState("");
	// useEffect(() => {
	// 	location.amenities && setAmenities(location.amenities);
	// }, []);

	const HandleChange = (e) => {
		if (!amenities.includes(e.value)) {
			setAmenities((prev) => [...prev, e.value]);
		}
	};
	const deleteoptn = (e) => {
		amenities.splice(e, 1);
		setAmenities((prev) => [...prev]);
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		//console.log(amenities);
		if (!amenities.length)
			return toast.error("Please fill all required fields!!!");
		const locData = {
			...location,
			amenities,
		};
		dispatch(addLocation(locData));
		const form = {
			location_id,
			data: locData,
		};
		try {
			await createTempLocation(form);
			showSection("Photos");
		} catch (error) {
			toast.error(error.response.data);
		}

		if (amenities.length === 5) {
			changeSection("Photos");
			window.scrollTo(0, 0);
		}
	};
	return (
		<div className="lbox">
			<div className="row1">
				<div className="coll1">
					<h2>
						Amenties<span style={{ color: "red" }}>*</span>
					</h2>
					<Select
						className="listingInput select"
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
						Add New Amenities
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
							onChange={(e) => setNewAmenity(e.target.value)}
						/>
						<Button
							onClick={() => {
								console.log("Add this amenity to the list", newAmenity);
								amenities.includes(newAmenity) === false
									? setAmenities((prev) => [...prev, newAmenity])
									: toast.error("Amenity already exists");
							}}
							variant="contained"
							sx={{
								backgroundColor: "#ea4235",
							}}>
							Add
						</Button>
					</div>
				</div>
			</div>
			<div className="row1">
				<div className="coll1">
					{amenities.map((item, index) => (
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

export default Amenities;
