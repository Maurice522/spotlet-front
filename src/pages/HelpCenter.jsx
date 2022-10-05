import React from "react";
import image from "../Assets/Images/photographyMainImage.png";
import Navbar from "../Components/Navbar";
import Form from "../Components/Form";
import Footer from "../Components/Footer";

const HelpCenter = () => {
	const labels = ["Name", "Email", "Phone Number", "Message"];
	return (
		<div>
			<Navbar extraNavId={"id-2"} />
			<div
				className="text-on-image-container"
				style={{
					marginBottom: "40px",
				}}>
				<img src={image} alt="background" className="bg-image darken" />
				<div className="message myMessage">Help Center</div>
			</div>
			<div className="help-info">
				<h1>Get in touch with us</h1>
				<p>
					lorem ipsum donor lorem ipsum donor !llicitudin pellentesque. Nunc
					posuere purus rhoncus pulvinar aliquam. lorem ipsum donor lorem ipsum
					donor !llicitudin pellentesque. Nunc posuere purus rhoncus pulvinar
					aliquam. lorem ipsum donor lorem ipsum donor !llicitudin pellentesque.
					Nunc posuere purus rhoncus pulvinar aliquam. lorem ipsum donor lorem
					ipsum donor !llicitudin pellentesque. Nunc posuere purus rhoncus
					pulvinar aliquam.
				</p>
			</div>
			<Form labels={labels} heading="" />
			<Footer />
		</div>
	);
};

export default HelpCenter;
