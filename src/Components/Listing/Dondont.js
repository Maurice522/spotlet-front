import React, { useEffect, useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch, useSelector } from "react-redux";
import {
	addLocation,
	selectLocationData,
	selectLocationId,
} from "../../redux/slices/locationSlice";
import { createTempLocation } from "../../services/api";
import { toast } from "react-toastify";

const Dondont = ({ showSection }) => {
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
		<div className="lbox">
			<div className="row1">
				<div className="coll1">
					<h2>Do's</h2>
					<div className="row2">
						<input
							className="input"
							id="myInput"
							onChange={(e) => setdo1(e.target.value)}
						/>
						<AddIcon className="add" onClick={HandleChange1} />
					</div>
				</div>

				<div className="coll1">
					<h2>Don'ts</h2>
					<div className="row2">
						<input
							className="input"
							id="myInput1"
							onChange={(e) => setdo2(e.target.value)}
						/>
						<AddIcon className="add" onClick={HandleChange2} />
					</div>
				</div>

				<div className="coll1">
					{do_s.map(
						(item, index) =>
							item !== "" && (
								<div className="optns" key={index}>
									<div className="optn" key={index}>
										{item}
									</div>
									<ClearIcon onClick={() => deleteoptn1(index)} />
								</div>
							)
					)}
				</div>

				<div className={do_s.length === 0 ? "coll2" : "coll1"}>
					{dont_s.map(
						(item, index) =>
							item !== "" && (
								<div className="optns" key={index}>
									<div className="optn" key={index}>
										{item}
									</div>
									<ClearIcon onClick={() => deleteoptn2(index)} />
								</div>
							)
					)}
				</div>
			</div>
			{/* <div className="row1">
				<div className="coll1">
					{do_s.map((item, index) => (
						<>
							<div className="optns">
								<div className="optn" key={index}>
									{item}
								</div>
								<ClearIcon onClick={() => deleteoptn1(index)} />
							</div>
						</>
					))}
				</div>
				<br />
				<br />
				<br />
				<br />
				<div className={do_s.length === 0 ? "coll2" : "coll1"}>
					{dont_s.map((item, index) => (
						<>
							<div className="optns">
								<div className="optn" key={index}>
									{item}
								</div>
								<ClearIcon onClick={() => deleteoptn2(index)} />
							</div>
						</>
					))}
				</div>
			</div> */}
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

export default Dondont;
