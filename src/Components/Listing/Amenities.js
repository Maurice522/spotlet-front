import React, { useEffect, useState } from "react";
import Select from "react-select";
import ClearIcon from "@mui/icons-material/Clear";
import { useDispatch, useSelector } from "react-redux";
import {
	addLocation,
	selectLocationData,
	selectLocationId,
} from "../../redux/slices/locationSlice";
import { createTempLocation } from "../../services/api";
import { toast } from "react-toastify";

const Amenities = ({ showSection }) => {
	const options = [
		{ value: "Air Conditioning", label: "Air Conditioning" },
		{ value: "Wi-Fi", label: "Wi-Fi" },
		{ value: "Fridge", label: "Fridge" },
		{ value: "Projector", label: "Projector" },
		{ value: "Paints", label: "Paints" },
	];
	const [amenities, setAmenities] = useState(["Amenity 1", "Amenity 2"]);
	const dispatch = useDispatch();
	const location_id = useSelector(selectLocationId);
	const location = useSelector(selectLocationData);

	useEffect(() => {
		location.amenities && setAmenities(location.amenities);
	}, []);

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
			showSection("Photo");
		} catch (error) {
			toast.error(error.response.data);
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
			</div>
			<div className="row1">
				<div className="coll1">
					{amenities.map((item, index) => (
						<>
							<div className="optns">
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
