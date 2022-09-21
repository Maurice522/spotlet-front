import "./Assets/Styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth/Auth";
import Home from "./pages/Home";
import Property from "./pages/Property";
import AccountInfo from "./pages/AccountInfo";
import Search from "./pages/Search";
import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import { getUserData } from "./services/api";
import { addUser, addUserId, selectUserData } from "./redux/slices/userSlice";
import { useSelector } from "react-redux";
import ResetPassword from "./pages/Auth/ResetPassword";
import BookingProcess from "./pages/BookingProcess";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import BookingList from "./pages/BookingList";
import BookingDetails from "./pages/BookingDetails";
import ListDetails from "./pages/ListDetails";
import ListDetailsComponent from "./pages/ListDetailsComponent";
import ListingPlace from "./pages/ListingPlace";
import Messages from "./pages/Messages";
import HostPage from "./pages/HostPage";
import Favorites from "./pages/Favorites";

function App() {
	const dispatch = useDispatch();
	const user = useSelector(selectUserData);
	useEffect(() => {
		const Start = async () => {
			const jwt = localStorage.getItem("token");
			if (jwt) {
				const user_jwt = jwtDecode(jwt);
				const { data } = await getUserData(user_jwt._id);
				dispatch(addUser(data));
				dispatch(addUserId(user_jwt._id));
			}
		};
		Start();
	}, []);

	const date = new Date().toISOString().split("T")[0];

	const [v1, setV1] = useState(date);
	const [v2, setV2] = useState("06:30");
	const [v3, setV3] = useState("");
	const [v4, setV4] = useState("");
	const [v5, setV5] = useState("");
	const [v6, setV6] = useState(0);
	const [event, setEvent] = useState("");
	return (
		<BrowserRouter>
			<div className="App">
				<ToastContainer />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/signin" element={<Auth />} />
					<Route path="/reset/:userId" element={<ResetPassword />} />
					<Route
						path="/property/:locId"
						element={
							<Property
								v1={v1}
								v2={v2}
								v3={v3}
								v4={v4}
								v5={v5}
								v6={v6}
								event = {event}
								setEvent = {setEvent}
								setV1={setV1}
								setV2={setV2}
								setV3={setV3}
								setV4={setV4}
								setV5={setV5}
								setV6 = {setV6}
							/>
						}
					/>
					<Route path="/account" element={user && <AccountInfo />} />
					{/* {user && <Route path="/search" element={<Search />} />} */}
					<Route path="/search" element={<Search />} />
					<Route path="/listing" element={<ListingPlace />} />
					<Route path="/property/messages/:locId" element={<Messages />} />
					<Route path="/bookinglist" element={<BookingList />} />
					<Route path="/bookingdetails/:bookingId" element={<BookingDetails />} />
					<Route path="/listdetails/:locId" element={<ListDetails />} />
					<Route path="/favorite" element={<Favorites />} />

					<Route
						path="location/:locationId/bookingdetail/:bookingId"
						element={<ListDetailsComponent />}
					/>

					{/* {user && <Route path="/search" element={<Search />} />} */}
					<Route
						path="/:locId/booking"
						element={<BookingProcess v1={v1} v2={v2} v3={v3} v4={v4} v5={v5} v6={v6} event={event} />}
					/>
					<Route path="/host" element={<HostPage />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
