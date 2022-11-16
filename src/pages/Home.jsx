import Header from "../Components/Home/Header";
import Content from "../Components/Home/Content";
import FormFilter from "../Components/Home/FormFilter";
import React from "react";
import Footer from "../Components/Footer";

function Home() {
	return (
		<div>
			<Header extraNavId="id-2" />
			<FormFilter homepage={true} />
			<Content />
			<Footer />
		</div>
	);
}

export default Home;

// 1) Adjust gap in booking list
// 2) Blue border removal
// 3) Height setup in sectionReason
