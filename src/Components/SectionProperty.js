import React, { useState } from "react";
import "../Assets/Styles/sectionProperty.css";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import img1 from "../Assets/Images/property-1.jpeg";
import img2 from "../Assets/Images/property-2.jpeg";
import img3 from "../Assets/Images/property-3.jpeg";
import img4 from "../Assets/Images/property-4.jpeg";
import img5 from "../Assets/Images/property-5.jpeg";
import img6 from "../Assets/Images/property-6.jpeg";
import { Link } from "react-router-dom";

const SectionProperty = () => {
	const [favourites, setFavourites] = useState([0, 1, 2]);

	const propertyDetails = [
		{
			image: img1,
			name: "Name of Property",
			location: "Location of Property",
			price: "Price",
			isFavourite: favourites.includes(0),
		},
		{
			image: img2,
			name: "Name of Property",
			location: "Location of Property",
			price: "Price",
			isFavourite: favourites.includes(1),
		},
		{
			image: img3,
			name: "Name of Property",
			location: "Location of Property",
			price: "Price",
			isFavourite: favourites.includes(2),
		},
		{
			image: img4,
			name: "Name of Property",
			location: "Location of Property",
			price: "Price",
			isFavourite: favourites.includes(3),
		},
		{
			image: img5,
			name: "Name of Property",
			location: "Location of Property",
			price: "Price",
			isFavourite: favourites.includes(4),
		},
		{
			image: img6,
			name: "Name of Property",
			location: "Location of Property",
			price: "Price",
			isFavourite: favourites.includes(5),
		},
	];

	const handleClick = () => {
		console.log("Hello");
	};

	return (
		<div className="property-section">
			<div className="property-heading">Featured Properties in Hyderabad</div>
			<div className="property-list">
				{propertyDetails.map((item, index) => (
					<div className="item" key={index}>
						<Link to="/property">
							<div className="text-on-image-container">
								<img
									src={item.image}
									alt={`property-${index + 1}`}
									className="property-image"
								/>
								{favourites.includes(index) === true ? (
									<AiFillHeart
										color="#ff6767"
										size="32px"
										style={{
											position: "absolute",
											top: "10px",
											right: "10px",
											cursor: "pointer",
										}}
										onClick={handleClick}
									/>
								) : (
									<AiOutlineHeart
										size="32px"
										style={{
											position: "absolute",
											top: "10px",
											right: "10px",
											cursor: "pointer",
										}}
										onClick={handleClick}
									/>
								)}
							</div>
						</Link>
						<div>
							<div className="property-info-heading">{item.name}</div>
							<div className="property-info-location">{item.location}</div>
							<div className="property-info-price">{item.price}</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default SectionProperty;
