import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../Assets/Styles/photography.css";
import image from "../Assets/Images/photographyMainImage.png";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Blog = () => {
	const [open, setOpen] = useState(false);
	const clicked = () => {
		setOpen(!open);
	};

	const params = useParams();
	console.log(params);

	return (
		<>
			<div>
				<Navbar extraNavId={"id-2"} />
				<div className="text-on-image-container">
					<img src={image} alt="background" className="bg-image darken" />
				</div>
				<div className="singleBlogContent">
					<h1>
						Blog Heading loremLorem ipsum dolor sit amet, consectetur adipiscing
						elit. Nam hendrerit nisi sed sollicitudin pellentesque.
					</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
						hendrerit nisi sed sollicitudin pellentesque. Nunc loremLorem ipsum
						dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed
						sollicitudin pellentesque. Nunc pLorem ipsum dolor sit amet,
						consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin
						pellentesque. Nunc pLorem ipsum dolor sit amet, consectetur
						adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque.
						Nunc loremLorem ipsum dolor sit amet, consectetur adipiscing elit.
						Nam hendrerit nisi sed sollicitudin pellentesque. Nunc pLorem ipsum
						dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed
						sollicitudin pellentesque. Nunc pLorem ipsum dolor sit amet,
						consectetur adipiscing elit.
					</p>

					<p>
						Nam hendrerit nisi sed sollicitudin pellentesque. Nunc loremLorem
						ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit
						nisi sed sollicitudin pellentesque. Nunc pLorem ipsum dolor sit
						amet, consectetur adipiscing elit. Nam hendrerit nisi sed
						sollicitudin pellentesque. Nunc pLorem ipsum dolor sit amet,
						consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin
						pellentesque. Nunc loremLorem ipsum dolor sit amet, consectetur
						adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque.
						Nunc pLorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
						hendrerit nisi sed sollicitudin pellentesque. Nunc pLorem ipsum
						dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed
						sollicitudin pellentesque. Nunc loremLorem ipsum dolor sit amet,
						consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin
						pellentesque. Nunc pLorem ipsum dolor sit amet, consectetur
						adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque.
						Nunc pLorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
						hendrerit nisi sed sollicitudin pellentesque.
					</p>
					<p>
						Nunc loremLorem ipsum dolor sit amet, consectetur adipiscing elit.
						Nam hendrerit nisi sed sollicitudin pellentesque. Nunc pLorem ipsum
						dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed
						sollicitudin pellentesque. Nunc pLorem ipsum dolor sit amet,
						consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin
						pellentesque. Nunc loremLorem ipsum dolor sit amet, consectetur
						adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque.
						Nunc pLorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
						hendrerit nisi sed sollicitudin pellentesque. Nunc pLorem ipsum
						dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed
						sollicitudin pellentesque. Nunc loremLorem ipsum dolor sit amet,
						consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin
						pellentesque. Nunc pLorem ipsum dolor sit amet, consectetur
						adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque.
						Nunc pLorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
						hendrerit nisi sed sollicitudin pellentesque. Nunc loremLorem ipsum
						dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed
						sollicitudin pellentesque. Nunc pLorem ipsum dolor sit amet,
						consectetur adipiscing elit.
					</p>
					<p>
						Nam hendrerit nisi sed sollicitudin pellentesque. Nunc pLorem ipsum
						dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed
						sollicitudin pellentesque. Nunc loremLorem ipsum dolor sit amet,
						consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin
						pellentesque. Nunc pLorem ipsum dolor sit amet, consectetur
						adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque.
						Nunc pLorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
						hendrerit nisi sed sollicitudin pellentesque. Nunc loremLorem ipsum
						dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed
						sollicitudin pellentesque. Nunc pLorem ipsum dolor sit amet,
						consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin
						pellentesque. Nunc pLorem ipsum dolor sit amet, consectetur
						adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque.
						Nunc loremLorem ipsum dolor sit amet, consectetur adipiscing elit.
						Nam hendrerit nisi sed sollicitudin pellentesque. Nunc pLorem ipsum
						dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed
						sollicitudin pellentesque. Nunc pLorem ipsum dolor sit amet,
						consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin
						pellentesque. Nunc loremLorem ipsum dolor sit amet, consectetur
						adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque.
						Nunc pLorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
						hendrerit nisi sed sollicitudin pellentesque. Nunc pLorem ipsum
						dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed
						sollicitudin pellentesque. Nunc loremLorem ipsum dolor sit amet,
						consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin
						pellentesque. Nunc pLorem ipsum dolor sit amet, consectetur
						adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque.
						Nunc pLorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
						hendrerit nisi sed sollicitudin pellentesque. Nunc loremLorem ipsum
						dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed
						sollicitudin pellentesque. Nunc pLorem ipsum dolor sit amet,
						consectetur adipiscing elit.
					</p>
					<p>
						{" "}
						Nunc pLorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
						hendrerit nisi sed sollicitudin pellentesque. Nunc pLorem ipsum
						dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed
						sollicitudin pellentesque. Nunc loremLorem ipsum dolor sit amet,
						consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin
						pellentesque. Nunc pLorem ipsum dolor sit amet, consectetur
						adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque.
						Nunc pLorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
						hendrerit nisi sed sollicitudin pellentesque. Nunc loremLorem ipsum
						dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed
						sollicitudin pellentesque. Nunc pLorem ipsum dolor sit amet,
						consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin
						pellentesque. Nunc pLorem ipsum
					</p>
				</div>

				<Footer />
			</div>
		</>
	);
};

export default Blog;
