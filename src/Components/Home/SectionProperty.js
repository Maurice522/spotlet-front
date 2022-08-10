import React, { useState } from "react";
import "../../Assets/Styles/Home/sectionProperty.css";
import img1 from "../../Assets/Images/property-1.jpeg";
import img2 from "../../Assets/Images/property-2.jpeg";
import img3 from "../../Assets/Images/property-3.jpeg";
import img4 from "../../Assets/Images/property-4.jpeg";
import img5 from "../../Assets/Images/property-5.jpeg";
import img6 from "../../Assets/Images/property-6.jpeg";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

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
						<div
							className="text-on-image-container"
							onClick={() => console.log("!")}>
							<img
								src={item.image}
								alt={`property-${index + 1}`}
								className="property-image"
							/>
							<div
								className="favorite-icon-wrapper"
								onClick={() => console.log("!")}>
								{favourites.includes(index) === true ? (
									<MdFavorite
										size="32px"
										color="#ff6767"
										onClick={handleClick}
									/>
								) : (
									<MdFavoriteBorder size="32px" onClick={handleClick} />
								)}
							</div>
						</div>
						<div>
							<div
								className="property-info-heading"
								onClick={() => console.log("1")}>
								{item.name}
							</div>
							<div
								className="property-info-location"
								onClick={() => console.log("1")}>
								{item.location}
							</div>
							<div
								className="property-info-price"
								onClick={() => console.log("1")}>
								{item.price}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default SectionProperty;

// falife1481@agrolivana.com
// 12345678
