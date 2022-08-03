import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Form from "./components/Form";
import React, { useState } from "react";

function App() {
	const [id, setId] = useState("");
	const handleScroll = () => {
		console.log(window.scrollY);

		if (window.scrollY <= 565) {
			setId("");
		} else {
			setId("id-2");
		}
	};

	document.addEventListener("scroll", handleScroll);

	return (
		<div className="App">
			<Header extraNavId={id} />
			<Form />
			<Content />
		</div>
	);
}

export default App;
