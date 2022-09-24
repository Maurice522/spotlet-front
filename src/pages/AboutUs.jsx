import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import image from "../Assets/Images/about-us-header-image.jpeg";
import image2 from "../Assets/Images/about-us-content-image.jpeg";
import { Button } from "@mui/material";

import "../Assets/Styles/aboutUs.css";

const AboutUs = () => {
	return (
		<div>
			<Navbar extraNavId="id-2" />
			<div className="text-on-image-container">
				<img src={image} alt="background" className="bg-image darken" />
				<div className="about-us-message">
					<div>OUR MISSION</div>
					<br />
					<div className="bold">BRINGING PEOPLE TOGETHER</div>
				</div>
			</div>
			<div className="about-us-content">
				<div>
					<div className="about-us-content-heading">
						We connect people with unique spaces
					</div>
					<div className="about-us-content-info">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
						hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus
						rhoncus pulvinar aliquam. Lorem ipsum dolor sit amet, consectetur
						adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque.
						Nunc posuere purus rhoncus pulvinar aliquam.{" "}
					</div>
				</div>

				<div className="content-with-image">
					<div>
						<div className="about-us-content-heading">
							We connect people with unique spaces
						</div>
						<div className="about-us-content-info">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
							hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus
							rhoncus pulvinar aliquam. Lorem ipsum dolor sit amet, consectetur
							adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque.
							Nunc posuere purus rhoncus pulvinar aliquam.{" "}
						</div>
						<Button
							variant="outlined"
							sx={{
								marginTop: "30px",
								borderColor: "#ff6767",
								color: "black",
								fontSize: "14px",
								fontFamily: "Rubik",
								fontWeight: "600",
								padding: "6px 12px",
							}}>
							Find a space
						</Button>
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
								}}></div>
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
								}}></div>
						</div>
					</div>
					<div>
						<div className="about-us-content-heading">
							We connect people with unique spaces
						</div>
						<div className="about-us-content-info">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
							hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus
							rhoncus pulvinar aliquam. Lorem ipsum dolor sit amet, consectetur
							adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque.
							Nunc posuere purus rhoncus pulvinar aliquam.{" "}
						</div>
						<Button
							variant="outlined"
							sx={{
								marginTop: "30px",
								borderColor: "#ff6767",
								color: "black",
								fontSize: "14px",
								fontFamily: "Rubik",
								fontWeight: "600",
								padding: "6px 12px",
							}}>
							Find a space
						</Button>
					</div>
				</div>
			</div>

			<div
				style={{
					width: "98.8vw",
					height: "500px",
				}}>
				<img
					src={image2}
					alt="content"
					style={{
						width: "100%",
						height: "100%",
					}}
				/>
			</div>

			<div className="about-us-bottom-text">
				<div>
					<div className="about-us-content-heading">Join Our Team</div>
					<div className="about-us-content-info">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
						hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus
						rhoncus pulvinar aliquam. Lorem ipsum dolor sit amet, consectetur
						adipiscing elit.{" "}
					</div>
				</div>
				<div className="about-us-content-text">
					<div>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
						hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus
						rhoncus pulvinar aliquam. Lorem ipsum dolor sit amet, consectetur
						adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing
						elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere
						purusm.
					</div>
					<div>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
						posuere purus rhoncus pulvinar aliquam.{" "}
					</div>
					<div className="about-us-btn-container">
						<Button
							variant="contained"
							sx={{
								backgroundColor: "#EA4235",
								color: "white",
								padding: "12px 24px",
							}}>
							View open positions
						</Button>
						<Button
							variant="outlined"
							sx={{
								borderColor: "#EA4235",
								color: "black",
								padding: "12px 24px",
							}}>
							See what it's like to work here
						</Button>
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default AboutUs;
