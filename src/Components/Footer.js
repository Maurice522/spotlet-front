import React from "react";
import "../Assets/Styles/footer.css";
import { MdExpandLess } from "react-icons/md";
import { Link } from "react-router-dom";
import { BsInstagram, BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";
// import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
	const objArray = [
		{
			title: "Company",
			items: [
				{ name: "About Us", to: "/aboutus" },
				// { name: "Investors", to: "/investors" },
				{ name: "Careers", to: "/careers" },
				{ name: "Blogs", to: "/blogs" },
			],
		},
		{
			title: "Host",
			items: [
				{ name: "List your space", to: "/host" },
				{ name: "Community", to: "/community" },
				{ name: "Resource Center", to: "/resourcecenter" },
				{ name: "Guidelines", to: "/guidelines" },
				{ name: "Photography", to: "/photography" },
			],
		},
		{
			title: "Explore",
			items: [
				{ name: "Activities", to: "/activities" },
				{ name: "Location", to: "/location" },
				{ name: "Knowledge Base", to: "/knowledgecenter" },
				{ name: "Affiliate", to: "/affiliate" },
			],
		},
		{
			title: "Support",
			items: [
				{ name: "Help Center", to: "/helpcenter" },
				{ name: "Cancellation", to: "/cancellation" },
				{ name: "Privacy Policy", to: "/privacypolicy" },
				{ name: "Terms and Conditions", to: "/termsofservice" },
				{ name: "Trust and Safety", to: "/trustandsafety" },
				{ name: "Cookie Prefercnce", to: "/cookiepreference" },
			],
		},
		{
			title: "Social Media",
			items: [
				{
					name: "Instagram",
					to: "/instagram",
					icon: <BsInstagram size="18px" color="white" />,
				},
				{
					name: "Facebook",
					to: "/facebook",
					icon: <BsFacebook size="18px" color="white" />,
				},
				{
					name: "Twitter",
					to: "/twitter",
					icon: <BsTwitter size="18px" color="white" />,
				},
				{
					name: "LinkedIn",
					to: "/linkedin",
					icon: <BsLinkedin size="18px" color="white" />,
				},
			],
		},
	];

	const items = objArray.map((item, index) => (
		<div key={index}>
			<div className="footer-subheading">{item.title}</div>
			{item.items.map((val, i) => (
				<Link to={val.to} key={i}>
					<div className="footer-item">
						{val.icon && val.icon}
						{val.name}
					</div>
				</Link>
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
						<div className="company-name">SpotLet</div>
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
