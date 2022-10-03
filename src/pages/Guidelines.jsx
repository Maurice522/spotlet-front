import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../Assets/Styles/text-only-styles.css";

const Guidelines = () => {
	const guidelines = [
		{
			heading: "Maintain a safe environment",
			info: "Community of hosts and renters is built on a foundation of trust and mutual respect. Our top priority is ensuring a safe and authentic experience for our users, and this means enforcing a set of basic rules and standards. Below is the list of our seven community guidelines.",
			numberOfParagraphs: 1,
		},
		{
			heading: "Maintain a safe environment",
			info: "Community of hosts and renters is built on a foundation of trust and mutual respect. Our top priority is ensuring a safe and authentic experience for our users, and this means enforcing a set of basic rules and standards. Below is the list of our seven community guidelines.",
			numberOfParagraphs: 2,
		},
		{
			heading: "Maintain a safe environment",
			info: "Community of hosts and renters is built on a foundation of trust and mutual respect. Our top priority is ensuring a safe and authentic experience for our users, and this means enforcing a set of basic rules and standards. Below is the list of our seven community guidelines.",
			numberOfParagraphs: 1,
		},
		{
			heading: "Maintain a safe environment",
			info: "Community of hosts and renters is built on a foundation of trust and mutual respect. Our top priority is ensuring a safe and authentic experience for our users, and this means enforcing a set of basic rules and standards. Below is the list of our seven community guidelines.",
			numberOfParagraphs: 2,
		},
		{
			heading: "Maintain a safe environment",
			info: "Community of hosts and renters is built on a foundation of trust and mutual respect. Our top priority is ensuring a safe and authentic experience for our users, and this means enforcing a set of basic rules and standards. Below is the list of our seven community guidelines.",
			numberOfParagraphs: 1,
		},
	];
	return (
		<div>
			<Navbar extraNavId="id-2" />
			<div className="text-only-container">
				<div className="text-only-main-heading">
					What are GoRecce’s Hosting Guidelines
				</div>
				<div className="text-only-info">
					Community of hosts and renters is built on a foundation of trust and
					mutual respect. Our top priority is ensuring a safe and authentic
					experience for our users, and this means enforcing a set of basic
					rules and standards. Below is the list of our seven community
					guidelines.
				</div>

				{guidelines.map((item, index) => (
					<div key={index} className="text-only-item">
						<div className="text-only-heading">{`${index + 1}.  ${
							item.heading
						}`}</div>
						<div className="text-only-info">
							{item.info} {item.numberOfParagraphs === 1 && item.info}
						</div>
						{item.numberOfParagraphs > 1 && (
							<div className="text-only-info">{item.info}</div>
						)}
					</div>
				))}
			</div>
			<Footer />
		</div>
	);
};

export default Guidelines;
