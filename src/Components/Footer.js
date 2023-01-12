import React from "react";
import "../Assets/Styles/footer.css";
import { MdExpandLess } from "react-icons/md";
import { BsInstagram, BsFacebook, BsTwitter, BsLinkedin, BsPinterest, BsYoutube } from "react-icons/bs";
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
				{ name: "SpotLet Pro", to: "/spotletpro" },

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
			],
		},
		{
			title: "Social Media",
			items: [
				{
					name: "Instagram",
					to: "https://www.instagram.com/spotletin/",
					icon: <BsInstagram size="18px" color="white" />,
				},
				{
					name: "Facebook",
					to: "https://www.facebook.com/SpotLetIN",
					icon: <BsFacebook size="18px" color="white" />,
				},
				{
					name: "Twitter",
					to: "https://twitter.com/SpotLetIN",
					icon: <BsTwitter size="18px" color="white" />,
				},
				{
					name: "LinkedIn",
					to: "https://www.linkedin.com/company/spotletin/",
					icon: <BsLinkedin size="18px" color="white" />,
				},
				{
					name: "Pinterest",
					to: "https://in.pinterest.com/SpotLetIN/",
					icon: <BsPinterest size="18px" color="white" />,
				},
				{
					name: "Youtube",
					to: "/",
					icon: <BsYoutube size="18px" color="white" />,
				},
			],
		},
	];

	const items = objArray.map((item, index) => (
		<div key={index} className="footer-points">
			<div className="footer-subheading">{item.title}</div>
			{item.items.map((val, i) => (
				<a href={val.to} key={i}>
					<div className="footer-item">
						{val.icon && val.icon}
						{val.name}
					</div>
				</a>
				/* <a href="https://www.instagram.com/spotletin/"></a> */
				// Can't use <Link> here as it is used to navigate within the app
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
							SpotLet is a platform where hosts, guests, clients and customers come together to find their dream spaces! It’s a collaboration of ideas, places and people to create beautiful moments and memories.
						</div>
					</div>
					{items}
				</div>
				<p className="footer-conc">© 2023 SpotLet. All rights reserved.</p>
			</div>
		</div>
	);
};

export default Footer;
