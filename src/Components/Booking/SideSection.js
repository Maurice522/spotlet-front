import React, { useEffect, useState } from "react";
import "../../Assets/Styles/Booking/sideSection.css";
import { Button, Backdrop, Fade, Box, Typography, Modal } from "@mui/material";
import { format } from "date-fns";
import { toast } from "react-toastify";
import { MdDone } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { bookingRequest, getLocation } from "../../services/api";
import { selectUser_id } from "../../redux/slices/userSlice";
import { useSelector } from "react-redux";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
};

const SideSection = ({
	setReadyForRequest,
	readyForRequest,
	index,
	setIndex,
	userData,
	ok,
	setOk,
	event,
	v1,
	v2,
	v3,
	v4,
	v5,
	v6,
	tot_price,
}) => {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const [locationData, setLocationData] = useState({});
	const navigate = useNavigate();
	const user_id = useSelector(selectUser_id);
	const location_id = window.location.pathname.substring(1, 10);
	const total_amt =
		v3 === "12"
			? v6 * v3 * 0.9 * 1.18 + 80
			: v3 === "24"
			? v6 * v3 * 0.8 * 1.18 + 80
			: v6 * v3 * 1.18 + 80;
	useEffect(() => {
		getLocation(location_id)
			.then((res) => setLocationData(res.data))
			.catch((err) => console.log(err));
	}, []);
	//console.log(v1, v2, v3, v4, v5, v6, event, userData);

	const year = v1.slice(0, 4);
	const month = v1.slice(5, 7);
	const day = v1.slice(8, 10);

	const handleClick = async () => {
		//console.log("clicked");
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
			if (
				readyForRequest &&
				userData.firstName !== "" &&
				userData.lastName !== "" &&
				userData.who_reserves !== "" &&
				userData.dob !== "" &&
				userData.message !== ""
			) {
				const bookingDet = {
					activity: v5,
					attendies: v4,
					date: day + "-" + month + "-" + year,
					duration_in_hours: v3,
					event,
					owner_id: locationData.property_desc.user_id,
					property_id: location_id,
					time: v2,
					total_amt,
					user_id,
					user_data: {
						fullName: userData.firstName + " " + userData.lastName,
						who_reserves: userData.who_reserves,
						[userData.who_reserves === "Individual" ? "profession" : "company"]:
							userData.who_reserves === "Individual"
								? userData.profession
								: userData.company,
						dob: userData.dob,
						message: userData.message,
					},
				};
				try {
					await bookingRequest(bookingDet);
					handleOpen();
					setReadyForRequest(false);
					setTimeout(() => {
						window.location = "/bookinglist";
					}, 3000);
				} catch (error) {
					console.log(error);
				}
			} else {
				toast.error("Please fill all the fields");
			}
		}
	};

	tot_price = Math.round(tot_price, 2);
	let gst = v6 * v3 * 1.18;
	gst = Math.round(gst, 2);
	// console.log(v1, v3, v4);
	return (
		<div style={{width:"30%"}}>
			<div className="side-section-image-wrapper">
				<img
					src={locationData?.images?.at(0)}
					alt="booking-process"
					className="image"
				/>
			</div>

			<div data-attribute-1>{location_id}</div>
			<div data-attribute-2>Location</div>
			<br/><br/>

			{/* <div className="booking-side-section-title">Reserved Date</div>
			<div className="booking-side-section-info">
				{format(new Date(Number(year), Number(month), Number(day)), "PPP")}
			</div> */}
			{/* <div className="booking-side-section-title">Reserved Time</div>
			<div className="booking-side-section-info">{`${v3} Hours`}</div> */}

			<div data-attribute-3>
				<div data-attribute-4>
				₹ {v6} * {v3} hrs (including Gst)
				</div>
				<div data-attribute-4>₹ {gst}</div>
			</div>
			<div data-attribute-3>
				<div data-attribute-4>Discounted Price</div>
				<div data-attribute-4>{tot_price}</div>
			</div>

			<div data-attribute-3>
				<div data-attribute-4>Cleaning Fee (including Gst)</div>
				<div data-attribute-4>₹ 40</div>
			</div>

			<div data-attribute-3>
				<div data-attribute-4>Processing Fee (including Gst)</div>
				<div data-attribute-4>₹ 40</div>
			</div>

			<div data-attribute-3>
				<div data-attribute-1>Total</div>
				<div data-attribute-1>₹ {tot_price+80}</div>
			</div>

			<Button
				variant="contained"
				onClick={handleClick}
				sx={{
					width: "22vw",
					backgroundColor: "#EA4235",
					color: "white",
					borderRadius: "4px",
					marginTop: "10px",
				}}>
				{index === 2 ? "Request Availability" : "Continue"}
			</Button>

			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				open={open}
				onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}>
				<Fade in={open}>
					<Box sx={style}>
						<MdDone size={50} color="green" />
						<Typography id="transition-modal-title" variant="h6" component="h2">
							Request Sent Successfully!
						</Typography>
						<Typography id="transition-modal-description" sx={{ mt: 2 }}>
							You will be redirected to the bookings page in 3 seconds
						</Typography>
					</Box>
				</Fade>
			</Modal>
		</div>
	);
};

export default SideSection;
