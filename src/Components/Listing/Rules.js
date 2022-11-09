import React, { useEffect, useState } from "react";
import { GoPrimitiveDot } from "react-icons/go";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
import { useDispatch, useSelector } from "react-redux";
import {
	addLocation,
	selectLocationData,
	selectLocationId,
} from "../../redux/slices/locationSlice";
import { createTempLocation } from "../../services/api";
import { toast } from "react-toastify";

const Rules = ({ showSection }) => {
	const [rules, setRules] = useState(["Do not add or in any way change locks or keying. ", "No furnishings may be taken from the premises and put in halls, basement, or onporches or balconies without prior consent of Landlord, even for limited times."]);
	const [optn, setoptn] = useState("");
	const dispatch = useDispatch();
	const location_id = useSelector(selectLocationId);
	const location = useSelector(selectLocationData);

	useEffect(() => {
		location?.rules && setRules(location.rules);
	}, []);

	const HandleChange = () => {
		if (!rules.includes(optn)) {
			setRules((prev) => [...prev, optn]);
			document.getElementById("myInput").value = "";
		}
	};
	const deleteoptn = (e) => {
		rules.splice(e, 1);
		setRules((prev) => [...prev]);
	};
	const handleSubmit = async (e) => {
		if (!rules.length) return toast.error("Please fill all required fields");
		const locData = {
			...location,
			rules,
		};
		dispatch(addLocation(locData));
		const form = {
			location_id,
			data: locData,
		};
		try {
			await createTempLocation(form);
			showSection("Contact Details");
		} catch (error) {
			toast.error(error.response.data);
		}
	};
	return (
		<div className="lbox">
			<div className="row1" style={{gridTemplateColumns: "29.4fr 3.4fr"}}>
				<div className="coll1" style={{width:"100%"}}>
					<h2>
						Rules of the Host<span style={{ color: "red" }}>*</span>
					</h2>
					<div className="row2" style={{width:"100%"}}>
						<input
							className="input listingInput"
							id="myInput"
							style={{width:"100%"}}
							onChange={(e) => setoptn(e.target.value)}
						/>
						<AddIcon className="add" onClick={HandleChange} />
					</div>
				</div>
			</div>
			<div className="row1" style={{gridTemplateColumns: "2.4fr 0.4fr"}} >
				<div className="coll1">
					{rules.map((item, index) => (
						<>
							<div className="optns" key={index}>
								<GoPrimitiveDot color="#ea4235" />
								<div className="optn" key={index} style={{width:"94%"}}>
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

export default Rules;
