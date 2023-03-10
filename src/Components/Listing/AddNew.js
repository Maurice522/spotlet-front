import React, { useEffect, useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import { GoPrimitiveDot } from "react-icons/go";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch, useSelector } from "react-redux";
import {
	addLocation,
	selectLocationData,
	selectLocationId,
} from "../../redux/slices/locationSlice";
import { createTempLocation } from "../../services/api";
import { toast } from "react-toastify";
import "../../Assets/Styles/listYourSpace.css";

const AddNew = ({ showSection }) => {
	const [do_s, setdo_s] = useState([""]);
	const [do1, setdo1] = useState("");

	const HandleChange1 = () => {
		if (!do_s.includes(do1)) {
			setdo_s((prev) => [...prev, do1]);
			document.getElementById("myInput").value = "";
		}
	};
	const [dont_s, setdont_s] = useState([""]);
	const [do2, setdo2] = useState("");
	const dispatch = useDispatch();
	const location_id = useSelector(selectLocationId);
	const location = useSelector(selectLocationData);

	useEffect(() => {
		location?.do_and_dont && setdo_s(location.do_and_dont.do_s);
		location?.do_and_dont && setdont_s(location.do_and_dont.dont_s);
	}, []);

	const HandleChange2 = (e) => {
		if (!dont_s.includes(do2)) {
			setdont_s((prev) => [...prev, do2]);
			document.getElementById("myInput1").value = "";
		}
	};
	const deleteoptn1 = (e) => {
		do_s.splice(e, 1);
		setdo_s((prev) => [...prev]);
	};
	const deleteoptn2 = (e) => {
		dont_s.splice(e, 1);
		setdont_s((prev) => [...prev]);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!do_s.length && !dont_s.length)
			return toast.error("Please fill all required fields!!!");
		const do_and_dont = {
			do_s,
			dont_s,
		};
		// console.log(do_and_dont);
		const locData = {
			...location,
			do_and_dont,
		};
		dispatch(addLocation(locData));
		const form = {
			location_id,
			data: locData,
		};
		try {
			await createTempLocation(form);
			showSection("Pricing");
		} catch (error) {
			toast.error(error.response.data);
		}
	};

	return (
		<div style={{marginTop:"2%"}}>
			<div className="row1">
				<div className="coll1">
					<div className="row2">
						<input
							className="addNewInput listingInput input"
							id="myInput"
							onChange={(e) => setdo1(e.target.value)}
						/>
						<AddIcon className="add" onClick={HandleChange1} />
					</div>
				</div>
                </div>

<div className="row1">
				<div className="coll1">
					{do_s.map(
						(item, index) =>
							item !== "" && (
								<div className="optns" key={index}>
									<GoPrimitiveDot color="#ea4235" />
									<div className="optn">{item}</div>
									<ClearIcon
										onClick={() => deleteoptn1(index)}
										sx={{
											color: "#ea4235",
										}}
									/>
								</div>
							)
					)}
				</div>

				<ul className={do_s.length === 0 ? "coll2" : "coll1"}>
					{dont_s.map(
						(item, index) =>
							item !== "" && (
								<li className="optns" key={index}>
									<GoPrimitiveDot color="#ea4235" />
									<div className="optn">{item}</div>
									<ClearIcon
										onClick={() => deleteoptn2(index)}
										sx={{
											color: "#ea4235",
										}}
									/>
								</li>
							)
					)}
				</ul>
			</div>

		</div>
	);
};

export default AddNew;
