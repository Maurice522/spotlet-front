import React, { useState } from "react";
import "../Assets/Styles/photography.css";
import image from "../Assets/Images/photographyMainImage.png";
import image1 from "../Assets/Images/container1ImgPhotography.png";
import image2 from "../Assets/Images/PhotographyImg2.png";
import Navbar from "../Components/Navbar";
import { MdExpandMore, MdDone } from "react-icons/md";
import Form from "../Components/Form";
import Footer from "../Components/Footer";
const Photography = () => {
	const [open, setOpen] = useState(false);
	const clicked = () => {
		setOpen(!open);
	};

	const labels = ["Name", "Email", "Phone Number", "Address"];

	return (
		<>
			<div>
				<Navbar extraNavId={"id-2"} />
				<div className="text-on-image-container">
					<img src={image} alt="background" className="bg-image darken" />
					<div className="message myMessage ">
						Professional Photography
						<p className="subtextBanner">
							Providing high-quality photography makes that simple!llicitudin
							pellentesque. Nunc posuere purus rhoncus pulvinar aliquam.
						</p>
					</div>
				</div>

				<div className="container1">
					<div className="leftContainer1">
						<div className="contentLeftContainer">
							<h1>Maximize your Earnings</h1>
							<p className="contentLeftContainerSubtext">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
								hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus
								rhoncus pulvinar aliquam. Lorem ipsum dolor sit amet,
								consectetur adipiscing elit. Lorem ipsum dolor sit amet,
								consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin
								pellentesque. Nunc p{" "}
							</p>
						</div>
					</div>

					<div className="rightContainer1">
						<div className="colouredbg">
							<img src={image1} alt="background" className="container1Img" />
						</div>
					</div>
				</div>

				<div className="container2">
					<div className="rightContainer2">
						<div className="colouredbg">
							<img src={image2} alt="background" className="container1Img" />
						</div>
					</div>

					<div className="rightContainer2">
						<div className="contentRightContainer">
							<h1>Preparing Your Space</h1>
							<p className="contentRightContainerSubtext">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
								hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus
								rhoncus pulvinar aliquam. Lorem ipsum dolor sit amet,
								consectetur adipiscing elit. Lorem ipsum dolor sit amet,
								consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin
								pellentesque. Nunc p{" "}
							</p>
						</div>
					</div>
				</div>

				<div className="faqSection">
					<h1 className="faqHead">Frequently Asked Questions</h1>
					<div className="faqContent">
						<h2 className="faqQuestion">
							Can I Keep the photos?
							{
								<MdExpandMore
									size="31px"
									color="black"
									className="dropDownArrow"
									onClick={() => clicked()}
								/>
							}
						</h2>
						<p className="faqContentPAddClass">
							loremLorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
							hendrerit nisi sed sollicitudin pellentesque. Nunc pLorem ipsum
							dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi
							sed sollicitudin pellentesque. Nunc pLorem ipsum dolor sit amet,
							consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin
							pellentesque. Nunc p
						</p>
						<hr></hr>

						<h2 className="faqQuestion ">
							What will be photographed?
							{
								<MdExpandMore
									size="31px"
									color="black"
									className="dropDownArrow"
								/>
							}
						</h2>
						<p className="faqContentPAddClass">
							loremLorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
							hendrerit nisi sed sollicitudin pellentesque. Nunc pLorem ipsum
							dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi
							sed sollicitudin pellentesque. Nunc pLorem ipsum dolor sit amet,
							consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin
							pellentesque. Nunc p
						</p>
						<hr></hr>

						<h2 className="faqQuestion">
							Is it actually free?
							{
								<MdExpandMore
									size="31px"
									color="black"
									className="dropDownArrow"
								/>
							}
						</h2>
						<p className="faqContentPAddClass">
							loremLorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
							hendrerit nisi sed sollicitudin pellentesque. Nunc pLorem ipsum
							dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi
							sed sollicitudin pellentesque. Nunc pLorem ipsum dolor sit amet,
							consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin
							pellentesque. Nunc p
						</p>
						<hr></hr>

						<h2 className="faqQuestion">
							How to get more clients?
							{
								<MdExpandMore
									size="31px"
									color="black"
									className="dropDownArrow"
								/>
							}
						</h2>
						<p className="faqContentPAddClass">
							loremLorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
							hendrerit nisi sed sollicitudin pellentesque. Nunc pLorem ipsum
							dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi
							sed sollicitudin pellentesque. Nunc pLorem ipsum dolor sit amet,
							consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin
							pellentesque. Nunc p
						</p>
						<hr></hr>
					</div>
				</div>

				<Form labels={labels} heading="Get your Session Booked" />

				<Footer />
			</div>
		</>
	);
};

export default Photography;
