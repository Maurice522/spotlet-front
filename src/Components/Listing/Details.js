import React, { useEffect, useState } from "react";
import Select from "react-select";
import Checkbox from "@mui/material/Checkbox";
import { TextField, Button } from "@mui/material";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { useDispatch, useSelector } from "react-redux";
import { selectUserData, selectUser_id } from "../../redux/slices/userSlice";
import { createTempLocation } from "../../services/api";
import {
	addLocation,
	addLocationId,
	selectLocationData,
	selectLocationId,
} from "../../redux/slices/locationSlice";
import { toast } from "react-toastify";
import "../../Assets/Styles/listYourSpace.css";



let options = [
	{ value: "Add New", label: "ADD NEW" },
	{ value: "Airport", label: "Airport" },
	{ value: "Amusement Park", label: "Amusement Park" },
	{ value: "Apartment", label: "Apartment" },
	
];

const Details = ({ showSection }) => {
	const user_id = useSelector(selectUser_id);
	const user = useSelector(selectUserData);
	const location = useSelector(selectLocationData);
	const location_id = useSelector(selectLocationId);
	const dispatch = useDispatch();
	const [property_desc, setPropertyDescr] = useState({
		user_id: "",
		location_type: "",
		property_size: "",
		property_info: "",
		street_parking: "",
		house_parking: "",
		security_camera: "",
	});

	useEffect(() => {
		user_id && setPropertyDescr({ ...property_desc, user_id });
	}, [user_id]);

	useEffect(() => {
		location && setPropertyDescr(location.property_desc);
	}, []);

	const handleChange = (e) => {
		setPropertyDescr({
			...property_desc,
			[e.target.name]: e.target.value,
		});
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (
			!property_desc.location_type.length ||
			!property_desc.property_info.length ||
			!property_desc.property_size.length ||
			!property_desc.security_camera.length ||
			!property_desc.street_parking.length ||
			!property_desc.house_parking.length
		)
			return toast.error("Please fill all required fields!!!");
		const form = {
			data: {
				...location,
				property_desc,
			},
			name: user.personalInfo.fullName,
			location_id,
		};
		console.log(form);
		try {
			const response = await createTempLocation(form);
			!location_id && dispatch(addLocationId(response.data));
			dispatch(addLocation(form.data));
			showSection("Location");
		} catch (error) {
			toast.error(error.response.data);
		}
	};

	const [opt, setOpt] = useState(options);
	const [loc, setLoc] = useState(false);
	const [newLoc, setNewLoc] = useState('');

	return (
		<div className="lbox">
			<div className="row1">
				<div className="coll1">
					<h2>
						Type of Location<span style={{ color: "red" }}>*</span>
					</h2>
					<Select
						className="listingInput locationtype"
						options={opt}
						onChange={(e) =>{
							if(e.value != 'Add New')
								setPropertyDescr({ ...property_desc, location_type: e.value })
							else
								setLoc(true);
						}
						}
						required
					/>
				</div>
				{loc && <div className="coll1">
					<h2
						style={{
							marginLeft: "30px",
							marginBottom: "8px",
						}}>
						Add New Loaction
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
							label="Add New Location"
							variant="outlined"
							size="small"
							onChange={(e) => {setPropertyDescr({ ...property_desc, location_type: e.value }); setNewLoc(e.target.value)}}
						/>
						<Button
							onClick={() => {newLoc === '' ? toast.error("Location can't be empty") : 
							(options.filter(item => item.label === newLoc).length === 0
									? setOpt(prev => [...prev, {value: `${newLoc}`, label: `${newLoc}`}])
									: toast.error("Location already exists"))
									newLoc === '' ? setLoc(true) : setLoc(false)
							}}
							variant="contained"
							sx={{
								backgroundColor: "#ea4235",
							}}>
							Add
						</Button>
					</div>
				</div>}
				<div className="coll1">
					<h2>
						Property Size in sq ft<span style={{ color: "red" }}>*</span>
					</h2>
					<input
						className="listingInput input"
						name="property_size"
						onChange={handleChange}
						value={property_desc.property_size}
						required
						type="number"
					/>
				</div>
			</div>
			<div className="row1-checkbox">
				<div className="coll1">
					<h2>
						In-House Parking Facility Available
						<span style={{ color: "red" }}>*</span>
					</h2>
					<div className="row2">
						<div>
							<input
								type="radio"
								className="radio"
								name="house_parking"
								onChange={handleChange}
								value="yes"
								checked={property_desc.house_parking === "yes"}
								required
							/>
							<span>YES</span>
						</div>
						<div>
							<input
								type="radio"
								className="radio"
								name="house_parking"
								onChange={handleChange}
								value="no"
								checked={property_desc.house_parking === "no"}
							/>{" "}
							<span>NO</span>
						</div>
					</div>
				</div>
				<div className="coll1">
					<h2>
						Street Parking Facility Available
						<span style={{ color: "red" }}>*</span>
					</h2>
					<div className="row2">
						<div>
							<input
								type="radio"
								className="radio"
								name="street_parking"
								onChange={handleChange}
								value="yes"
								checked={property_desc.street_parking === "yes"}
								required
							/>
							<span>YES</span>
						</div>
						<div>
							<input
								type="radio"
								className="radio"
								name="street_parking"
								onChange={handleChange}
								value="no"
								checked={property_desc.street_parking === "no"}
							/>{" "}
							<span>NO</span>
						</div>
					</div>
				</div>
				<div className="coll1">
					<h2>
						Security Camera Available<span style={{ color: "red" }}>*</span>
					</h2>
					<div className="row2">
						<div>
							<input
								type="radio"
								className="radio"
								name="security_camera"
								onChange={handleChange}
								value="yes"
								checked={property_desc.security_camera === "yes"}
							/>
							<span>YES</span>
						</div>
						<div>
							<input
								type="radio"
								className="radio"
								name="security_camera"
								onChange={handleChange}
								value="no"
								checked={property_desc.security_camera === "no"}
							/>{" "}
							<span>NO</span>
						</div>
					</div>
				</div>
			</div>
			<div className="row1">
				<div className="coll1">
					<h2>
						Description of the property<span style={{ color: "red" }}>*</span>
					</h2>
					<TextareaAutosize
						className="listingInput"
						aria-label="minimum height"
						minRows={6}
						maxLength={500}
						name="property_info"
						onChange={handleChange}
						value={property_desc.property_info}
						style={{
							width: 690,
							fontSize: "16px",
							lineHeight: "24px",
							padding: "1%",
						}}
						required
					/>
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

export default Details;
