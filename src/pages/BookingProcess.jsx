import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import "../Assets/Styles/Booking/booking-process.css";
import SideSection from "../Components/Booking/SideSection";
import Booking from "../Components/Booking/Booking";
import Rules from "../Components/Booking/Rules";
import Contact from "../Components/Booking/Contact";

const BookingProcess = ({ v1, v2, v3, v4, v5 }) => {
	const [index, setIndex] = useState(0);
	const [ok, setOk] = useState(false);
	const [readyForRequest, setReadyForRequest] = useState(false);
	return (
		<>
			<Navbar extraNavId="id-2" />
			<div className="below-nav">
				<div className="booking-content-wrapper">
					<div className="left-section">
						<div className="booking-process">
							<div className={`booking-item ${index === 0 ? "highlight" : ""}`}>
								BOOKING
							</div>
							<div className="filler">----------------</div>
							<div className={`booking-item ${index === 1 ? "highlight" : ""}`}>
								RULES
							</div>
							<div className="filler">----------------</div>
							<div className={`booking-item ${index === 2 ? "highlight" : ""}`}>
								CONTACT
							</div>
						</div>

						{index === 0 ? (
							<Booking v1={v1} v2={v2} v3={v3} v4={v4} v5={v5} />
						) : index === 1 ? (
							<Rules isOk={setOk} />
						) : (
							<Contact setReadyForRequest={setReadyForRequest} />
						)}
					</div>
					<SideSection
						index={index}
						setIndex={setIndex}
						ok={ok}
						setOk={setOk}
						v1={v1}
						v3={v3}
						v4={v4}
						v5={v5}
						readyForRequest={readyForRequest}
						setReadyForRequest={setReadyForRequest}
					/>
				</div>
			</div>
		</>
	);
};

export default BookingProcess;
