import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Button, Avatar } from "@mui/material";
import { BiArrowBack } from "react-icons/bi";

const ListDetailsComponent = () => {
	return (
		<div>
			<Navbar extraNavId="id-2" />
			<div className="below-nav">
				<div className="booking-list-header">
					<div className="option">Booking</div>
					<div className="chosen option">Listing</div>
				</div>

				<div className="container">
					<div className="booking-details-body-2">
						<div className="booking-details-body-left">
							<div className="booking-details-header">
								Booking Details - #00000000
							</div>
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
							<div className="booking-details-header">User Details</div>
							<div className="grid-container-2">
								<div>
									<div className="item-heading">Name</div>
									<div className="item-body">John Doe</div>
								</div>
								<div>
									<div className="item-heading">Number</div>
									<div className="item-body">1234657890</div>
								</div>
								<div>
									<div className="item-heading">Email ID</div>
									<div className="item-body">johndoe23@gmail.com</div>
								</div>
								<div>
									<div className="item-heading">Who Reserves</div>
									<div className="item-body">Organization</div>
								</div>
								<div>
									<div className="item-heading">Company Name</div>
									<div className="item-body">XYZ International</div>
								</div>
								<div>
									<div className="item-heading">Activity</div>
									<div className="item-body">Photoshoot</div>
								</div>
							</div>
						</div>
						<div className="booking-details-body-right">
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
								Approved
							</Button>
							<br />
							<Button
								variant="outlined"
								sx={{
									width: "20vw",
									color: "black",
									borderRadius: "4px",
									border: "2px solid #EA4235",
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
			</div>

			<Footer />
		</div>
	);
};

export default ListDetailsComponent;
