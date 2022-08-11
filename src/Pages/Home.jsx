import Header from "../Components/Home/Header";
import Content from "../Components/Home/Content";
import FormFilter from "../Components/Home/FormFilter";
import React, { useState } from "react";
import Footer from "../Components/Footer";

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
			<Footer />
		</div>
	);
}

export default Home;
