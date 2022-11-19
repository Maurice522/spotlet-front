import { Button, Modal } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SyncfusionTable from "../Components/BookingListing/SyncFusionTable";
import Navbar from "../Components/Navbar";
import { selectUserData } from "../redux/slices/userSlice";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Footer from "../Components/Footer";
import { useState } from "react";
import { useEffect } from "react";

const Notifications = () => {
	const user = useSelector(selectUserData);
	const [notifications, setNotifications] = useState([]);
	const [open, setOpen] = useState(false);
	const handleClose = () => setOpen(false);
	const [msg, setMsg] = useState();

	useEffect(() => {
		setNotifications(user?.notifications);
	}, [user]);

	const gridActionButton = (props) => (
		<Link
			to={props.row.to}
			style={{
				textDecoration: "none",
			}}
		>
			{props.row.admin ? (
				<>
					<Button
						onClick={() => {
							setOpen(!open);
							setMsg(props.row.content);
						}}
						variant="outlined"
						sx={{
							padding: "6px 10px",
							border: "1px solid #EA4235",
							color: "black",
							fontWeight: "600",
							borderRadius: "4px",
							marginTop: "10px",
						}}
					>
						VIEW
					</Button>
				</>
			) : (
				<Button
					variant="outlined"
					sx={{
						padding: "6px 10px",
						border: "1px solid #EA4235",
						color: "black",
						fontWeight: "600",
						borderRadius: "4px",
						marginTop: "10px",
					}}
				>
					Details
				</Button>
			)}
		</Link>
	);

	const notificationGrid = [
		{
			headerName: "Notification",
			field: "Notification",
			width: "800",
			headerAlign: "Center",
		},
		{
			headerName: "Date",
			field: "Date",
			width: "250",
			headerAlign: "Center",
		},
		{
			headerName: "Details",
			renderCell: gridActionButton,
			field: "action",
			width: "250",
			headerAlign: "Center",
		},
	];

	const notificationData = notifications?.map((notification, index) => {
		return {
			action: gridActionButton,
			Notification: notification.admin
				? notification.title
				: notification?.content,
			Date: notification?.date,
			id: index,
			to: notification.admin ? "" : notification?.link,
			admin: notification.admin,
			content: notification.content,
		};
	});
	notificationData?.reverse();

	// console.log(notificationData);

	return (
		<div>
			<Navbar extraNavId="id-2" />
			<div className="below-nav">
				<div className="booking-list-header" style={{ position: "relative" }}>
					<Link to="/">
						<ArrowBackIcon
							style={{
								position: "absolute",
								left: "0%",
								bottom: "20%",
								fontSize: "32px",
								color: "f26767",
							}}
						/>
					</Link>

					<div className="option">Notifications</div>
				</div>
				<div
					style={{
						width: "90vw",
						margin: "40px auto",
						height: "80vh",
					}}
				>
					<SyncfusionTable
						UsersData={notificationData}
						UsersGrid={notificationGrid}
						content={"Notifications"}
					/>
				</div>
			</div>
			<Footer />
			{open && (
				<Modal open={open}>
					<div onClick={handleClose}>
						<div className="notification-modal">
							<div>
								<p>{msg}</p>
								<Button
									className="notification-btn"
									onClick={() => {
										handleClose();
									}}
								>
									OK
								</Button>
							</div>
						</div>
					</div>
				</Modal>
			)}
		</div>
	);
};

export default Notifications;
