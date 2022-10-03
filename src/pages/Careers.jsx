import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import image from "../Assets/Images/about-us-header-image.jpeg";
import image1 from "../Assets/Images/container1ImgPhotography.png";
import image2 from "../Assets/Images/PhotographyImg2.png";

const Careers = () => {
	return (
		<div>
			<Navbar extraNavId="id-2" />
			<div className="text-on-image-container">
				<img src={image} alt="background" className="bg-image darken" />
				<div className="about-us-message">
					<div>OUR MISSION</div>
					<br />
					<div>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
						hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus
						rhoncus pulvinar aliquam.
					</div>
				</div>
			</div>
			<div className="about-us-content">
				<div className="content-with-image">
					<div>
						<div className="about-us-content-heading">Our Culture</div>
						<div className="about-us-content-info">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
							hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus
							rhoncus pulvinar aliquam. Lorem ipsum dolor sit amet, consectetur
							adipiscing elit.
						</div>

						<div
							style={{
								display: "flex",
								justifyContent: "space-around",
								alignItems: "center",
								marginTop: "2rem",
							}}>
							<div>
								<h4>Our Environment</h4>
								<div
									style={{
										marginTop: "5px",
										paddingRight: "15px",
									}}>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
									hendrerit nisi sed sollicitudin pellentesque. Nunc posuere
									purus rhoncus pulvinar aliquam.{" "}
								</div>
							</div>
							<div>
								<h4>Our People</h4>
								<div
									style={{
										marginTop: "5px",
										paddingRight: "15px",
									}}>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
									hendrerit nisi sed sollicitudin pellentesque. Nunc posuere
									purus rhoncus pulvinar aliquam.{" "}
								</div>
							</div>
						</div>
					</div>

					<div>
						<div
							style={{
								position: "relative",
								top: "0%",
								left: "20%",
								width: "300px",
								height: "300px",
								backgroundColor: "#ff6767",
							}}>
							<div
								style={{
									position: "absolute",
									top: "-40px",
									left: "-40px",
									width: "300px",
									height: "300px",
									backgroundColor: "#d9d9d9",
								}}>
								<img src={image1} alt="background" className="container-img" />
							</div>
						</div>
					</div>
				</div>

				<div className="content-with-image-2">
					<div>
						<div
							style={{
								position: "relative",
								top: "0%",
								left: "20%",
								width: "300px",
								height: "300px",
								backgroundColor: "#ff6767",
							}}>
							<div
								style={{
									position: "absolute",
									top: "-40px",
									left: "-40px",
									width: "300px",
									height: "300px",
									backgroundColor: "#d9d9d9",
								}}>
								<img src={image2} alt="background" className="container-img" />
							</div>
						</div>
					</div>
					<div>
						<div className="about-us-content-heading">Why work with us</div>
						<div className="about-us-content-info">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
							hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus
							rhoncus pulvinar aliquam. Lorem ipsum dolor sit amet, consectetur
							adipiscing elit.
						</div>

						<div
							style={{
								display: "flex",
								justifyContent: "space-around",
								alignItems: "center",
								marginTop: "2rem",
							}}>
							<div>
								<h4>We've got you</h4>
								<div
									style={{
										marginTop: "5px",
										paddingRight: "15px",
									}}>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
									hendrerit nisi sed sollicitudin pellentesque. Nunc posuere
									purus rhoncus pulvinar aliquam.{" "}
								</div>
							</div>
							<div>
								<h4>Our Perks</h4>
								<div
									style={{
										marginTop: "5px",
										paddingRight: "15px",
									}}>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
									hendrerit nisi sed sollicitudin pellentesque. Nunc posuere
									purus rhoncus pulvinar aliquam.{" "}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default Careers;
