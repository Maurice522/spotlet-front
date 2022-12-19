import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../Assets/Styles/text-only-styles.css";

const Guidelines = () => {
	const guidelines = [
		{
			heading: "Provide A Safe Environment ",
			info: "Our hosts must always promise a safe space for their guests. You shouldn’t convey harm to any guest through your words or physical actions. SpotLet locations should not have any unsecured weapons, toxic substances or dangerous animals. All hosts must ensure that they don’t contribute to any activity that can increase the likelihood of a fire, explosion or chemical spill. ",
			numberOfParagraphs: 1,
		},
		{
			heading: "Ensure Respect for the Property",
			info: "Our hosts must never use property that doesn’t belong to them to post on our portal. We request that you ensure that you only publish properties that you have complete ownership of. No host should make any transactions apart from SpotLet’s payment systems with our guests or commit any kind of booking or credit card fraud.",
			numberOfParagraphs: 2,
		},
		{
			heading: "Put your Best Foot Forward",
			info: "We request your accuracy and reliability during the entire process. Please don’t provide false date of birth, name or other details. Also, don’t maintain duplicate accounts on SpotLet or use the portal if you are under 18. We’d love to see your real, authentic self at all times! Don’t provide the wrong location information or show incorrect availability. Our guests trust the details you showcase so don’t mislead them about the type, nature or information related to your listing.",
			numberOfParagraphs: 1,
		},
		{
			heading: "Minimize Cancellations",
			info: "Unless there’s an emergency, we urge our hosts not to cancel a booking. You shouldn’t fail to break the host’s location rules and not surprise the guests with any complex last-minute requests or undisclosed restrictions.",
			numberOfParagraphs: 2,
		},
		{
			heading: "Respect People’s Privacy",
			info: "Never access any other account without authorization or have any undisclosed or ill-sited cameras on your property. We urge hosts not to spy on their guests or violate privacy rights.",
			numberOfParagraphs: 1,
		},
		{
			heading: "Stay Responsive",
			info: "You shouldn’t be unresponsive during a booking or shoot and fail to offer the right point of contact. We expect all our hosts to engage in healthy communication throughout the booking process. ",
			numberOfParagraphs: 2,
		},
	];
	return (
		<div>
			<Navbar extraNavId="id-2" />
			<div className="text-only-container">
				<div className="text-only-main-heading">
					What are Spotlet Hosting Guidelines
				</div>
				<div className="text-only-info">
				At SpotLet, we’re building a community of like-minded hosts and guests based on trust and respect. We prioritize a safe and authentic experience for all our users and, thus, enforce specific rules to maintain consistency and quality. Our community guidelines for hosting include the following:
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
				<br />
				<br />
				<br />
				<div>Together, we can make this community a better place for hosts and guests. We look forward to your complete cooperation.</div>
				<br />
				<div style={{marginBottom: "2rem"}}>Thank you!</div>
			</div>
			<Footer />
		</div>
	);
};

export default Guidelines;
