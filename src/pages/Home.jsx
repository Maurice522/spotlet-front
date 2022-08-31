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
			<Header extraNavId="id-2" />
			<FormFilter />
			<Content />
			<Footer />
		</div>
	);
}

export default Home;

// 1) Search cards gap inc
// 2) Height incresase of why choose image
// 3) Cards border blue
// 4) Padding left inc slightly
// 5) Adjust arrows
// 6) Fix testimonial cards
