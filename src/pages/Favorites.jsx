import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import img1 from "../Assets/Images/property-1.jpeg";
import img2 from "../Assets/Images/property-2.jpeg";
import img3 from "../Assets/Images/property-3.jpeg";
import img4 from "../Assets/Images/property-4.jpeg";
import img5 from "../Assets/Images/property-5.jpeg";
import img6 from "../Assets/Images/property-6.jpeg";
import PropertyInfo from "../Components/PropertyInfo";
import { getAllLocations } from "../services/api";
import image from "../Assets/Images/Favourite1.jpeg";



const Favorites = () => {
	const [propertyDetails, setPropertiesDetail] = useState([]);

	useEffect(() => {
		getAllLocations()
		.then()
		.then(res =>setPropertiesDetail(res.data.locations))
		.catch(err => console.log(err))
	}, [])
	
	return (
		<div>
			<Navbar extraNavId="id-2" />
			<div className="text-on-image-container">
				<img src={image} alt="background" className="bg-image darken" style={{height:"63vh"}}/>
				<div className="about-us-message bold">
					Your Favourites!
				</div>
			</div>
			<div className="below-nav">
				<div
					style={{
						width: "80%",
						margin: "10px auto",
					}}>
					<div className="property-list">
						{console.log(propertyDetails)}
						{propertyDetails.map((item, index) => (
							<PropertyInfo
								item={item}
								index={index}
								isFav={true}
								favPage={true}
								key={index}
								handleClick={() => {
									console.log("clicked");
								}}
								border={false}
							/>
						))}
					</div>
				</div>


			</div>
			<Footer />
		</div>
	);
};

export default Favorites;
