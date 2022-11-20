import React from "react";
import image from "../Assets/Images/helpcenter_img3.jpeg";
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
					margin: "auto",
					marginBottom: "40px",
				}}
			>
				<img src={image} alt="background" className="bg-image darken" />
				<div className="message myMessage">Help Center</div>
			</div>
			<div className="help-info" style={{ width: "75%" }}>
				<h1
					style={{
						fontWeight: "800",
						color: "#ff6767",
					}}
				>
					Get in touch with us
				</h1>
				<p
					style={{
						lineHeight: "24px",
						textAlign: "justify",
					}}
				>
					lorem ipsum donor lorem ipsum donor !llicitudin pellentesque. Nunc
					posuere purus rhoncus pulvinar aliquam. lorem ipsum donor lorem ipsum
					donor !llicitudin pellentesque. Nunc posuere purus rhoncus pulvinar
					aliquam. lorem ipsum donor lorem ipsum donor !llicitudin pellentesque.
					Nunc posuere purus rhoncus pulvinar aliquam. lorem ipsum donor lorem
					ipsum donor !llicitudin pellentesque. Nunc posuere purus rhoncus
					pulvinar aliquam.
				</p>
			</div>

			<Form labels={labels} heading="Contact US" />

			<div className="help-info" style={{ width: "75%" }}>
				<h1
					style={{
						fontWeight: "800",
						color: "#ff6767",
					}}
				>
					Thank You for Reaching Out!
				</h1>
				<p
					style={{
						lineHeight: "24px",
						textAlign: "justify",
					}}
				>
					lorem ipsum donor lorem ipsum donor !llicitudin pellentesque. Nunc
					posuere purus rhoncus pulvinar aliquam. lorem ipsum donor lorem ipsum
					donor !llicitudin pellentesque. Nunc posuere purus rhoncus pulvinar
					aliquam. lorem ipsum donor lorem ipsum donor !llicitudin pellentesque.
					Nunc posuere purus rhoncus pulvinar aliquam. lorem ipsum donor lorem
					ipsum donor !llicitudin pellentesque. Nunc posuere purus rhoncus
					pulvinar aliquam.
				</p>
			</div>
			<Footer />
		</div>
	);
};

export default HelpCenter;
