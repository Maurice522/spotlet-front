import React from "react";
import SectionMenu from "./SectionMenu";
import SectionReason from "./SectionReason";
import SectionProperty from "./SectionProperty";
import SectionServices from "./SectionServices";
import Footer from "./Footer";

const Content = () => {
	return (
		<>
			<SectionMenu />
			<SectionReason />
			<SectionProperty />
			<SectionServices />
			<Footer />
		</>
	);
};

export default Content;
