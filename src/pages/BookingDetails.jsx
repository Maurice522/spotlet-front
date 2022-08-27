import React from "react";
import Navbar from "../Components/Navbar";
import { Button, Avatar } from "@mui/material";
import "../Assets/Styles/bookingDetails.css";

const BookingDetails = () => {
	return (
		<div>
			<Navbar extraNavId="id-2" />
			<div className="below-nav">
				<div className="container">
					<div className="booking-details-header">Booking Details</div>
					<div className="booking-details-body">
						<div className="booking-details-body-left">
							<div className="item-heading">Property ID</div>
							<div className="grid-container">
								<div>
									<div className="item-heading">Reserved Date</div>
									<div className="item-body">12th January 2022</div>
								</div>
								<div>
									<div className="item-heading">Attendies</div>
									<div className="item-body">90 People</div>
								</div>
								<div>
									<div className="item-heading">Reserved Time</div>
									<div className="item-body">8:30 to 16:30</div>
								</div>
								<div>
									<div className="item-heading">Duration</div>
									<div className="item-body">8 Hrs</div>
								</div>
							</div>
						</div>
						<div className="booking-details-body-right">
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
								sx={{
									width: "20vw",
									backgroundColor: "#EA4235",
									color: "white",
									borderRadius: "4px",
									marginTop: "10px",
								}}>
								Reject
							</Button>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="booking-details-header">Message</div>
					<div className="user-info">
						<Avatar />
						<span className="item-heading">John Doe</span>
					</div>
					<div className="booking-details-body">
						<div className="item-heading">Last message with host: </div>
						<div className="item-info">
							{" "}
							lorem ipsum donor lorem ipsum donor lorem ipsum donor lorem ipsum
							donor lorem ipsum donor lorem ipsum donor lorem ipsum donor lorem
							ipsum donor lorem ipsum donor lorem ipsum donor
						</div>
						<div>
							<Button
								variant="contained"
								sx={{
									width: "20vw",
									backgroundColor: "#EA4235",
									color: "white",
									borderRadius: "4px",
									marginTop: "10px",
									flexGrow: "1",
								}}>
								Message
							</Button>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="booking-details-header">
						Terms and Conditions Agreed
					</div>
					<div className="terms-conditions item-heading">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
						hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus
						rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat.
						Nulla aliquet porttitor venenatis. Donec a dui et dui fringilla
						consectetur id nec massa. Aliquam erat volutpat. Lorem ipsum dolor
						sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed
						sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar
						aliquam. Ut aliquet tristique nisl vitae volutpat. Nulla aliquet
						porttitor venenatis. Donec a dui et dui fringilla consectetur id nec
						massa. Aliquam erat volutpat. Lorem ipsum dolor sit amet,
						consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin
						pellentesque. Nunc posuere purus rhoncus pulvinar aliquam. Ut
						aliquet tristique nisl vitae volutpat. Nulla aliquet porttitor
						venenatis. Donec a dui et dui fringilla consectetur id nec massa.
						Aliquam erat volutpat.
					</div>

					<div className="terms-conditions item-heading">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
						hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus
						rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat.
						Nulla aliquet porttitor venenatis. Donec a dui et dui fringilla
						consectetur id nec massa. Aliquam erat volutpat. Lorem ipsum dolor
						sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed
						sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar
						aliquam. Ut aliquet tristique nisl vitae volutpat. Nulla aliquet
						porttitor venenatis. Donec a dui et dui fringilla consectetur id nec
						massa. Aliquam erat volutpat. Lorem ipsum dolor sit amet,
						consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin
						pellentesque. Nunc posuere purus rhoncus pulvinar aliquam. Ut
						aliquet tristique nisl vitae volutpat. Nulla aliquet porttitor
						venenatis. Donec a dui et dui fringilla consectetur id nec massa.
						Aliquam erat volutpat.
					</div>
					<div className="terms-conditions item-heading">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
						hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus
						rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat.
						Nulla aliquet porttitor venenatis. Donec a dui et dui fringilla
						consectetur id nec massa. Aliquam erat volutpat. Lorem ipsum dolor
						sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed
						sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar
						aliquam. Ut aliquet tristique nisl vitae volutpat. Nulla aliquet
						porttitor venenatis. Donec a dui et dui fringilla consectetur id nec
						massa. Aliquam erat volutpat. Lorem ipsum dolor sit amet,
						consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin
						pellentesque. Nunc posuere purus rhoncus pulvinar aliquam. Ut
						aliquet tristique nisl vitae volutpat. Nulla aliquet porttitor
						venenatis. Donec a dui et dui fringilla consectetur id nec massa.
						Aliquam erat volutpat.
					</div>
				</div>
			</div>
		</div>
	);
};

export default BookingDetails;
