import Header from "../Components/Header";
import Content from "../Components/Content";
import FormFilter from "../Components/FormFilter";
import React, { useState } from "react";

function Home() {
	const [id, setId] = useState("");
	const handleScroll = () => {
		if (window.scrollY <= 565) {
			setId("");
		} else {
			setId("id-2");
		}
	};

	document.addEventListener("scroll", handleScroll);

	return (
		<div>
			<Header extraNavId={id} />
			<FormFilter />
			<Content />
		</div>
	);
}

export default Home;
