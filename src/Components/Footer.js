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
			title: "Host",
			items: [
				"List your space",
				"Community",
				"Resource Center",
				"Guidelines",
				"Photography",
			],
		},
		{
			title: "Explore",
			items: ["Activities", "Location", "Knowledge Base", "Affiliate"],
		},
		{
			title: "Support",
			items: [
				"Help Center",
				"Cancellation",
				"Privacy Policy",
				"Terms and Conditions",
				"Trust and Safety",
				"Cookie Prefercnce",
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
		<div className="footer-wrapper">
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
		</div>
	);
};

export default Footer;
