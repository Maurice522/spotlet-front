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
		{ value: "Location Manager", label: "Location Manager" },
		{ value: "Fireplace", label: "Fireplace" },
		{ value: "Terrace Garden", label: "Terrace Garden" },
	];

	const [features, setFeatures] = useState(["Feature 1", "Feature 2"]);
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
