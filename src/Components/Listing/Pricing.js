import React, { useEffect, useState } from "react";
import Switch from "@mui/material/Switch";
import { useDispatch, useSelector } from "react-redux";
import {
	addLocation,
	selectLocationData,
	selectLocationId,
} from "../../redux/slices/locationSlice";
import { createTempLocation } from "../../services/api";
import { toast } from "react-toastify";

const Pricing = ({ showSection }) => {
	const [film, setfilm] = useState({
		hourly_rate: 0,
		isPresent: false,
	});
	const [tv, settv] = useState({
		hourly_rate: 0,
		isPresent: false,
	});
	const [corp, setcorp] = useState({
		hourly_rate: 0,
		isPresent: false,
	});
	const [event, setevent] = useState({
		hourly_rate: 0,
		isPresent: false,
	});
	const dispatch = useDispatch();
	const location_id = useSelector(selectLocationId);
	const location = useSelector(selectLocationData);

	useEffect(() => {
		location.pricing && setfilm(location.pricing.film_webseries_ad);
		location.pricing && settv(location.pricing.tv_series_other);
		location.pricing && setcorp(location.pricing.corporate);
		location.pricing && setevent(location.pricing.individual);
	}, []);
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!film.isPresent && !tv.isPresent && !corp.isPresent && !event.isPresent)
			return toast.error("Please add atleast one event type!");
		const pricing = {
			film_webseries_ad: film,
			tv_series_other: tv,
			corporate: corp,
			individual: event,
		};
		// console.log(pricing);
		const locData = {
			...location,
			pricing,
		};
		dispatch(addLocation(locData));
		const form = {
			location_id,
			data: locData,
		};
		try {
			await createTempLocation(form);
			showSection("Timings");
		} catch (error) {
			toast.error(error.response.data);
		}
	};
	return (
		<div className="lbox">
			<div className="coll1">
				<div className="row1">
					<h1>Film/ Ad Film/ Web Series Shoot</h1>
					<Switch
						onClick={() => setfilm({ ...film, isPresent: !film.isPresent })}
						color="warning"
						checked={film.isPresent}
					/>
				</div>
			</div>
			{film.isPresent == true ? (
				<>
					<div className="row1">
						<div className="coll1">
							<h2>1 hour Rate</h2>
							<input
								className="input"
								onChange={(e) =>
									setfilm({ ...film, hourly_rate: e.target.value })
								}
								value={film.hourly_rate}
							/>
						</div>
					</div>
					<div className="row1">
						<div className="coll1">
							<h2>12 hour Rate</h2>
							<input
								className="sminput"
								disabled
								value={(film.hourly_rate * 12 * 0.9).toFixed(2)}
							/>
						</div>
						<div className="coll1">
							<h2>24 hour Rate</h2>
							<input
								className="sminput"
								disabled
								value={(film.hourly_rate * 24 * 0.8).toFixed(2)}
							/>
						</div>
					</div>
				</>
			) : (
				""
			)}
			<hr />
			<br />

			<div className="coll1">
				<div className="row1">
					<h1>TV Series & Other Video Shoot</h1>
					<Switch
						onClick={() => settv({ ...tv, isPresent: !tv.isPresent })}
						color="warning"
						checked={tv.isPresent}
					/>
				</div>
			</div>
			{tv.isPresent == true ? (
				<>
					<div className="row1">
						<div className="coll1">
							<h2>1 hour Rate</h2>
							<input
								className="input"
								onChange={(e) => settv({ ...tv, hourly_rate: e.target.value })}
								value={tv.hourly_rate}
							/>
						</div>
					</div>
					<div className="row1">
						<div className="coll1">
							<h2>8 hour Rate</h2>
							<input className="sminput" disabled value={tv.hourly_rate * 8} />
						</div>
						<div className="coll1">
							<h2>12 hour Rate</h2>
							<input
								className="sminput"
								disabled
								value={(tv.hourly_rate * 12 * 0.9).toFixed(2)}
							/>
						</div>
						<div className="coll1">
							<h2>24 hour Rate</h2>
							<input
								className="sminput"
								disabled
								value={(tv.hourly_rate * 24 * 0.8).toFixed(2)}
							/>
						</div>
					</div>
				</>
			) : (
				""
			)}
			<hr />
			<br />

			<div className="coll1">
				<div className="row1">
					<h1>Corporate Event</h1>
					<Switch
						onClick={() => setcorp({ ...corp, isPresent: !corp.isPresent })}
						color="warning"
						checked={corp.isPresent}
					/>
				</div>
			</div>
			{corp.isPresent == true ? (
				<>
					<div className="row1">
						<div className="coll1">
							<h2>1 hour Rate</h2>
							<input
								className="input"
								onChange={(e) =>
									setcorp({ ...corp, hourly_rate: e.target.value })
								}
								value={corp.hourly_rate}
							/>
						</div>
					</div>
					<div className="row1">
						<div className="coll1">
							<h2>8 hour Rate</h2>
							<input
								className="sminput"
								disabled
								value={corp.hourly_rate * 8}
							/>
						</div>
						<div className="coll1">
							<h2>12 hour Rate</h2>
							<input
								className="sminput"
								disabled
								value={(corp.hourly_rate * 12 * 0.9).toFixed(2)}
							/>
						</div>
						<div className="coll1">
							<h2>24 hour Rate</h2>
							<input
								className="sminput"
								disabled
								value={(corp.hourly_rate * 24 * 0.8).toFixed(2)}
							/>
						</div>
					</div>
				</>
			) : (
				""
			)}
			<hr />
			<br />

			<div className="coll1">
				<div className="row1">
					<h1>Individual Event</h1>
					<Switch
						onClick={() => setevent({ ...event, isPresent: !event.isPresent })}
						color="warning"
						checked={event.isPresent}
					/>
				</div>
			</div>
			{event.isPresent == true ? (
				<>
					<div className="row1">
						<div className="coll1">
							<h2>1 hour Rate</h2>
							<input
								className="input"
								onChange={(e) =>
									setevent({ ...event, hourly_rate: e.target.value })
								}
								value={event.hourly_rate}
							/>
						</div>
					</div>
					<div className="row1">
						<div className="coll1">
							<h2>8 hour Rate</h2>
							<input
								className="sminput"
								disabled
								value={event.hourly_rate * 8}
							/>
						</div>
						<div className="coll1">
							<h2>12 hour Rate</h2>
							<input
								className="sminput"
								disabled
								value={(event.hourly_rate * 12 * 0.9).toFixed(2)}
							/>
						</div>
						<div className="coll1">
							<h2>24 hour Rate</h2>
							<input
								className="sminput"
								disabled
								value={(event.hourly_rate * 24 * 0.8).toFixed(2)}
							/>
						</div>
					</div>
				</>
			) : (
				""
			)}
			<hr />
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

export default Pricing;
