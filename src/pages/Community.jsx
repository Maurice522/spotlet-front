import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import image2 from "../Assets/Images/about-us-content-image.jpeg";

const Community = () => {
	return (
		<>
			<div>
				<Navbar extraNavId="id-2" />
				<div className="text-on-image-container">
					<img src={image2} alt="background" className="bg-image darken" />
					<div className="about-us-message">
						<div>Coming Soon...</div>
					</div>
				</div>
			</div>

			<Footer />
		</>
	);
};

export default Community;
