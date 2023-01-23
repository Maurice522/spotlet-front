import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../Assets/Styles/text-only-styles.css";

const PrivacyPolicy = () => {
	const privacyPolicies = [
		{
			heading: "Contact information",
			info: "We might collect your name, email, mobile number, phone number, street, city, state, pincode,  country and ip address.",
			numberOfParagraphs: 0,
		},
		{
			heading: "Payment and billing information",
			info: "We might collect your billing name, billing address and payment method when you book a location or event. We NEVER collect your credit card number or credit card expiry date or other details pertaining to your credit card on our website. Credit card information will be obtained and processed by our online payment partner RazorPay / Stripe.",
			numberOfParagraphs: 0,
		},
		{
			heading: "Information you post",
			info: "We collect information you post in a public space on our website or on a third-party social media site belonging to SpotLet.in",
			numberOfParagraphs: 0,
		},
		{
			heading: "Demographic information",
			info: "We may collect demographic information about you, Locations / Properties / events you like, events you intend to participate in, book location / property, or any other information provided by your during the use of our website. We might collect this as a part of a survey also.",
			numberOfParagraphs: 0,
		},
		{
			heading: "Other information",
			info: "If you use our website, we may collect information about your IP address and the browser you're using. We might look at what site you came from, duration of time spent on our website, pages accessed or what site you visit when you leave us. We might also collect the type of mobile device you are using, or the version of the operating system your computer or device is running.",
			numberOfParagraphs: 0,
		},
	];


	const collectInfo = [
		{
			heading: "We collect information directly from you",
			info: "We collect information directly from you when you register as a Property owner / Guest user. We also collect information if you post a comment on our websites or ask us a question through phone or email.",
			numberOfParagraphs: 0,
		},
		{
			heading: "We collect information from you passively",
			info: "We use tracking tools like Google Analytics, Google Webmaster, browser cookies and web beacons for collecting information about your usage of our website. ",
			numberOfParagraphs: 0,
		},
		{
			heading: "We get information about you from third parties. ",
			info: "For example, if you use an integrated social media feature on our websites. The third-party social media site will give us certain information about you. This could include your name and email address.",
			numberOfParagraphs: 0,
		},
	];


	const personalInfo = [
		{
			heading: "We use information to contact you",
			info: "We might use the information you provide to contact you for confirmation of a booking on our website or for other promotional purposes.",
			numberOfParagraphs: 0,
		},
		{
			heading: "We use information to respond to your requests or questions",
			info: "We might use your information to confirm your registration for an event or contest. ",
			numberOfParagraphs: 0,
		},
		{
			heading: "We use information to improve our products and services",
			info: "We might use your information to customize your experience with us. This could include displaying content based upon your preferences.",
			numberOfParagraphs: 0,
		},
		{
			heading: "We use information to look at site trends and customer interests",
			info: "We may use your information to make our website and products better. We may combine information we get from you with information about you we get from third parties.",
			numberOfParagraphs: 0,
		},
		{
			heading: "We use information for security purposes",
			info: "We may use information to protect our company, our customers, or our websites.",
			numberOfParagraphs: 0,
		},
		{
			heading: "We use information for marketing purposes",
			info: "We might send you information about special promotions or offers. We might also tell you about new features or products. These might be our own offers or products, or third-party offers or products we think you might find interesting. Or, for example, if you book location / property from us we'll enroll you in our newsletter.",
			numberOfParagraphs: 0,
		},
		{
			heading: "We use information to send you transactional communications",
			info: "We might send you emails or SMS about your account or a ticket purchase.",
			numberOfParagraphs: 0,
		},
	];



	const sharingInfo = [
		{
			heading: "We will share information with third parties who perform services on our behalf",
			info: "We share information with vendors who help us manage our online registration process or payment processors or transactional message processors. Some vendors may be located outside of India.",
			numberOfParagraphs: 0,
		},
		{
			heading: "We will share information with the event organizers",
			info: "We share your information with event organizers and other parties responsible for fulfilling the purchase obligation. The event organizers and other parties may use the information we give them as described in their privacy policies.",
			numberOfParagraphs: 0,
		},
		{
			heading: "We will share information with our business partners",
			info: "This includes a third party who provide or sponsor an event, or who operates a venue where we hold events. Our partners use the information we give them as described in their privacy policies.",
			numberOfParagraphs: 0,
		},
		{
			heading: "We may share information if we think we have to in order to comply with the law or to protect ourselves",
			info: "We will share information to respond to a court order or subpoena. We may also share it if a government agency or investigatory body requests. Or, we might also share information when we are investigating potential fraud.",
			numberOfParagraphs: 0,
		},
		{
			heading: "We may share information with any successor to all or part of our business",
			info: "For example, if part of our business is sold we may give our customer list as part of that transaction.",
			numberOfParagraphs: 0,
		},
		{
			heading: "We may share your information for reasons not described in this policy",
			info: "We will tell you before we do this",
			numberOfParagraphs: 0,
		},
		{
			heading: "Age of Majority",
			info: "To be a User of our Platform, you must be of legal age, so you must be over 18 years of age.",
			numberOfParagraphs: 1,
		},
	];
	return (
		<div>
			<Navbar extraNavId="id-2" />
			<div className="text-only-container">
				<div className="text-only-main-heading">Privacy Policy</div>
				<div className="text-only-info">
					SpotLet.in recognises the importance of maintaining your privacy. We value your privacy and appreciate your trust in us. This Policy describes how we treat user information we collect on <a href="http://www.spotlet.in" style={{ color: "#ff6767" }}>http://www.spotlet.in</a> and other offline sources. This Privacy Policy applies to current and former visitors to our website and to our online customers. By visiting and/or using our website, you agree to this Privacy Policy
				</div>
				<br />
				<br />
				<div className="text-only-info">
					SpotLet.in is a property of SpotLet solutions Private Limited, an Indian Company registered under the Companies Act, 2013 having its registered office at 4th Floor, Above Manjeera Mart, KPHB 9th Phase, Hyderabad – 500085, Telangana. India.
				</div>
				<br />
				<br />
				<div style={{fontSize: "22px"}}><strong>Information we collect:</strong></div>

				{privacyPolicies.map((item, index) => (
					<div key={index} className="text-only-item">
						<div className="text-only-heading" style={{fontSize: "18px", marginTop: "4%"}}>{`${index + 1}.  ${item.heading
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
				<div style={{fontSize: "22px"}}><strong>We collect information in different ways:</strong></div>
				{collectInfo.map((item, index) => (
					<div key={index} className="text-only-item">
						<div className="text-only-heading" style={{fontSize: "18px", marginTop: "4%"}}>{`${index + 1}.  ${item.heading
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
				<div style={{fontSize: "22px"}}><strong>Use of your personal information:</strong></div>
				{personalInfo.map((item, index) => (
					<div key={index} className="text-only-item">
						<div className="text-only-heading" style={{fontSize: "18px", marginTop: "4%"}}>{`${index + 1}.  ${item.heading
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
				<div style={{fontSize: "22px"}}><strong>Sharing of information with third-parties:</strong></div>
				{sharingInfo.map((item, index) => (
					<div key={index} className="text-only-item">
						<div className="text-only-heading" style={{fontSize: "18px", marginTop: "4%"}}>{`${index + 1}.  ${item.heading
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

export default PrivacyPolicy;
