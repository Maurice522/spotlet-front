import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Assets/Styles/blogs.css";
import image from "../Assets/Images/blogs.png";
import FormFilter from "../Components/Home/FormFilter";
import image1 from "../Assets/Images/container1ImgPhotography.png";
import Navbar from "../Components/Navbar";
// import { MdExpandMore, MdDone } from "react-icons/md";
import Footer from "../Components/Footer";
import { Pagination } from "@mui/material";

const Blogs = () => {
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
		{
			id: 8,
			image: image1,
			title: "Lorem ipsum dolor sit amet, consectetur",
			info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendreri",
			linkText: "Read More ...",
		},
		{
			id: 9,
			image: image1,
			title: "Lorem ipsum dolor sit amet, consectetur",
			info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendreri",
			linkText: "Read More ...",
		},
		{
			id: 10,
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
					<div className="message myMessage ">BLOGS</div>
				</div>

				<FormFilter />

				<div class="container">
					{elements.map((item, ind) => (
						<div class="Div1" key={ind}>
							<div className="resourceContent">
								<img
									src={item.image}
									alt="background"
									className="resoourceImg "
								/>
								<h3>{item.title}</h3>
								<p>{item.info}</p>
								<Link to={`/blog/${item.id}`}>
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

export default Blogs;
