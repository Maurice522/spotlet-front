import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Assets/Styles/resources.css";
import image from "../Assets/Images/resourceCenter_img2.jpeg";
import image1 from "../Assets/Images/container1ImgPhotography.png";
import Navbar from "../Components/Navbar";
import { Pagination } from "@mui/material";
// import { MdExpandMore, MdDone } from "react-icons/md";

import Footer from "../Components/Footer";
const Resources = () => {
	const elements = [
		{
			id: 1,
			image: image1,
			title: "Lorem ipsum dolor sit amet, consectetur",
			info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendreri",
			linkText: "Read More ...",
		},
		{
			id: 2,
			image: image1,
			title: "Lorem ipsum dolor sit amet, consectetur",
			info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendreri",
			linkText: "Read More ...",
		},
		{
			id: 3,
			image: image1,
			title: "Lorem ipsum dolor sit amet, consectetur",
			info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendreri",
			linkText: "Read More ...",
		},
		{
			id: 4,
			image: image1,
			title: "Lorem ipsum dolor sit amet, consectetur",
			info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendreri",
			linkText: "Read More ...",
		},
		{
			id: 5,
			image: image1,
			title: "Lorem ipsum dolor sit amet, consectetur",
			info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendreri",
			linkText: "Read More ...",
		},
		{
			id: 6,
			image: image1,
			title: "Lorem ipsum dolor sit amet, consectetur",
			info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendreri",
			linkText: "Read More ...",
		},
		{
			id: 7,
			image: image1,
			title: "Lorem ipsum dolor sit amet, consectetur",
			info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendreri",
			linkText: "Read More ...",
		},
	];
	return (
		<>
			<div>
				<Navbar extraNavId={"id-2"} />
				<div className="text-on-image-container">
					<img src={image} alt="background" className="bg-image " />
					<div
						className="message myMessage"
						style={{
							color: "white",
						}}>
						RESOURCE CENTRE
					</div>
				</div>
				<div class="container">
					{elements.map((item, ind) => (
						<div class="Div1" key={ind}>
							<div class="resourceContent">
							<Link to={`/resource/${item.id}`}>

								<img
									src={item.image}
									alt="background"
									className="resoourceImg "
								/>
								<h3 style={{color:"black"}}>{item.title}</h3>
								<p style={{color:"black"}}>{item.info}</p>
									<p className="readmore">{item.linkText}</p>
								</Link>
							</div>
						</div>
					))}
				</div>

				<div
					style={{
						width: "fit-content",
						margin: "20px auto",
					}}>
					<Pagination
						count={10}
						variant="outlined"
						shape="rounded"
						color="primary"
					/>
				</div>

				<Footer />
			</div>
		</>
	);
};

export default Resources;
