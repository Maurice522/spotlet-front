import React from "react";
import "../Assets/Styles/footer.css";
import { MdExpandLess } from "react-icons/md";
import { Link } from "react-router-dom";

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

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
			/* you can also use 'auto' behaviour
         in place of 'smooth' */
		});
	};

	return (
		<>
			<div className="to-top" onClick={scrollToTop}>
				<MdExpandLess color="white" size="40px" />
			</div>
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
		</>
	);
};

export default Footer;
