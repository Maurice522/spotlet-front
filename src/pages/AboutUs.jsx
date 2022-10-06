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
				<div className="about-us-message bold">
					We Celebrate Happiness and Togetherness Every Day.
				</div>
			</div>
			<div className="about-us-content">
				<div>
					<div className="about-us-content-heading">
						Book your Spot with Confidence
					</div>
					<div className="about-us-content-info">
						<p>
							SpotLet connects people through our unique spaces. Our
							state-of-the-art online platform enables guests to look for
							specific locations, communicate with their hosts, and make
							payments quickly, all in a single place.
						</p>
						<p>
							We aspire to create a community wherein you can always meet,
							create and celebrate with like-minded people through our online
							marketplace. So book the best spaces for any activity and enjoy a
							rewarding experience.
						</p>
						<p>
							We aspire to provide guests with a simplified booking platform and
							give property owners in India a channel to showcase their spaces
							and earn additional income.
						</p>
						<h6>Let's Get Together</h6>
					</div>
				</div>

				<div className="content-with-image">
					<div>
						<div className="about-us-content-heading">SpotLet for Guests</div>
						<div className="about-us-content-info">
							Whether you’re looking for the prettiest pre-wedding shoot
							locations, the fanciest business retreat centres or the latest TV
							serial shooting locations, SpotLet has you covered. Find the keys
							to the most unique and exciting spaces on our portal.
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
							Let’s Get Started
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
						<div className="about-us-content-heading">SpotLet for Hosts</div>
						<div className="about-us-content-info">
							We invite you to list your property for free, get more visibility
							and manage bookings for your spaces with various simplified tools.
							Share your unutilised property with the world and welcome
							professionals, families and film crew to experience your unique
							offerings.
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
							Let’s Get Hosting
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
						We’re always looking for passionate and dedicated professionals to
						share the spotlight.
					</div>
				</div>
				<div className="about-us-content-text">
					<div>
						As an online platform, we celebrate the intersection of technology
						and people and invite you to bring your creative ideas, intelligence
						and innovation to our fast-paced tech-enabled world.
					</div>
					<div>
						If you’re ready to make a difference and impact society, we’re ready
						to welcome you on board.
					</div>
					<div className="about-us-btn-container">
						<Button
							variant="contained"
							sx={{
								backgroundColor: "#EA4235",
								color: "white",
								padding: "12px 24px",
							}}>
							Current Openings
						</Button>
						<Button
							variant="outlined"
							sx={{
								borderColor: "#EA4235",
								color: "black",
								padding: "12px 24px",
							}}>
							Send your Resume
						</Button>
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default AboutUs;
