import React from "react";
import "../../Assets/Styles/Booking/sideSection.css";
import { Button } from "@mui/material";
import { format } from "date-fns";
import { toast } from "react-toastify";

const SideSection = ({
	setReadyForRequest,
	readyForRequest,
	index,
	setIndex,
	ok,
	setOk,
	v1,
	v3,
	v4,
}) => {
	const handleClick = () => {
		console.log("clicked");
		if (index === 0) {
			setIndex(1);
		} else if (index === 1) {
			if (ok) {
				setIndex(2);
				setOk(false);
			} else {
				toast.error("Please accept the terms and conditions");
			}
		} else if (index === 2) {
			if (readyForRequest) {
				setIndex(0);
				setReadyForRequest(false);
			} else {
				toast.error("Please fill all the fields");
			}
		}
	};

	const year = v1.slice(0, 4);
	const month = v1.slice(5, 7);
	const day = v1.slice(8, 10);

	console.log(v1, v3, v4);
	return (
		<div>
			<div className="side-section-image-wrapper">
				<img
					src={require("../../Assets/Images/side-section-image.jpeg")}
					alt="booking-process"
					className="image"
				/>
			</div>

			<div data-attribute-1>Property ID</div>
			<div data-attribute-2>Location</div>

			<div className="booking-side-section-title">Reserved Date</div>
			<div className="booking-side-section-info">
				{format(new Date(Number(year), Number(month), Number(day)), "PPP")}
			</div>
			<div className="booking-side-section-title">Reserved Time</div>
			<div className="booking-side-section-info">{`${v3} Hours`}</div>
			<div className="booking-side-section-title">Attendies</div>
			<div className="booking-side-section-info">{v4} </div>

			<div data-attribute-3>
				<div data-attribute-4>$ 100 * 6 hrs</div>
				<div data-attribute-4>$600</div>
			</div>
			<div data-attribute-3>
				<div data-attribute-4>Processing Fee</div>
				<div data-attribute-4>$40</div>
			</div>

			<div data-attribute-3>
				<div data-attribute-1>Total</div>
				<div data-attribute-1>$640</div>
			</div>

			<Button
				variant="contained"
				onClick={handleClick}
				sx={{
					width: "20vw",
					backgroundColor: "#EA4235",
					color: "white",
					borderRadius: "4px",
					marginTop: "10px",
				}}>
				{index === 2 ? "Request Availability" : "Continue"}
			</Button>
		</div>
	);
};

export default SideSection;
