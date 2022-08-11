import "./Assets/Styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Auth from "./Pages/Auth/Auth";
import Home from "./Pages/Home";
import Property from "./Pages/Property";
import Search from "./Pages/Search";
import OTPVerify from "./Pages/Auth/OTPVerify";

import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import jwtDecode from "jwt-decode";
import { getUserData } from "./services/api";
import { addUser, selectUserData } from "./redux/slices/userSlice";
import { useSelector } from "react-redux";
function App() {
	const dispatch = useDispatch();
	const user = useSelector(selectUserData);
	useEffect(() => {
		const Start = async () => {
			const jwt = localStorage.getItem("token");
			if (jwt) {
				const user_jwt = jwtDecode(jwt);
				console.log(user_jwt);
				const { data } = await getUserData(user_jwt._id);
				dispatch(addUser(data));
			}
		};
		Start();
	}, []);
	return (
		<BrowserRouter>
			<div className="App">
				<ToastContainer />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/signin" element={<Auth />} />
					<Route path="/verification" element={<OTPVerify />} />
					<Route path="/property" element={<Property />} />
					<Route path="/search" element={<Search />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
