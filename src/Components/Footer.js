import React from "react";
import "../Assets/Styles/footer.css";

const Footer = () => {
	const objArray = [
		{
			title: "Company",
			items: ["About Us", "Investors", "Careers", "Blogs"],
		},
		{
			title: "Hosting",
			items: [
				"List Properties",
				"Explore Resources",
				"How to host",
				"Community",
			],
		},
		{
			title: "Support",
			items: [
				"Contact Us",
				"Cancellation",
				"Terms and Conditions",
				"Covid 19 Measures",
			],
		},
		{
			title: "Social Media",
			items: ["Instagram", "Facebook", "Twitter", "LinkedIn"],
		},
	];

	const items = objArray.map((item, index) => (
		<div key={index}>
			<div className="footer-subheading">{item.title}</div>
			{item.items.map((val, i) => (
				<div className="footer-item" key={i}>
					{val}
				</div>
			))}
		</div>
	));
	return (
		<div className="footer">
			<div className="footer-content">
				<div className="footer-spanning-item">
					<div className="company-name">COMPANY</div>
					<div className="company-details">
						{" "}
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod
						aliquam tempus at sapien, quis.
					</div>
				</div>
				{items}
			</div>
		</div>
	);
};

export default Footer;
