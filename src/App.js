import "./Assets/Styles/App.css";
import React from "react";
import Home from "./Pages/Home";
import Property from "./Pages/Property";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/property" element={<Property />} />
			</Routes>
		</div>
	);
}

export default App;
