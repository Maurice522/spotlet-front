import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import image from "../Assets/Images/investors_img.jpeg";


const Spotletpro = () => {
	return (
		<div>
			<Navbar extraNavId="id-2" />
			<div className="text-on-image-container">
				<img src={image} alt="background" className="bg-image darken" />
				<div className="about-us-message bold">
					Spotlet Pro Comming Soon !
                    
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default Spotletpro;
