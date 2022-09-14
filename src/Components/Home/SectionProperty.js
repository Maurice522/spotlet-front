import React, { useEffect, useState } from "react";
import { BsFillBookmarkFill } from "react-icons/bs";
import "../../Assets/Styles/Home/sectionProperty.css";
import img1 from "../../Assets/Images/property-1.jpeg";
import img2 from "../../Assets/Images/property-2.jpeg";
import img3 from "../../Assets/Images/property-3.jpeg";
import img4 from "../../Assets/Images/property-4.jpeg";
import img5 from "../../Assets/Images/property-5.jpeg";
import img6 from "../../Assets/Images/property-6.jpeg";
import PropertyInfo from "../PropertyInfo";
import { getAllLocations } from "../../services/api";

const SectionProperty = () => {
	const [favorites, setFavorites] = useState([0, 1, 2]);
	const [propertyDetails, setPropertiesDetail] = useState([]);
	const handleClick = () => {
		console.log("clicked");
	};

	// const propertyyDetails = [
	// 	{
	// 		image: img1,
	// 		name: "Name of Property",
	// 		location: "Location of Property",
	// 		price: "Price",
	// 		isFavourite: favorites.includes(0),
	// 	},
	// 	{
	// 		image: img2,
	// 		name: "Name of Property",
	// 		location: "Location of Property",
	// 		price: "Price",
	// 		isFavourite: favorites.includes(1),
	// 	},
	// 	{
	// 		image: img3,
	// 		name: "Name of Property",
	// 		location: "Location of Property",
	// 		price: "Price",
	// 		isFavourite: favorites.includes(2),
	// 	},
	// 	{
	// 		image: img4,
	// 		name: "Name of Property",
	// 		location: "Location of Property",
	// 		price: "Price",
	// 		isFavourite: favorites.includes(3),
	// 	},
	// 	{
	// 		image: img5,
	// 		name: "Name of Property",
	// 		location: "Location of Property",
	// 		price: "Price",
	// 		isFavourite: favorites.includes(4),
	// 	},
	// 	{
	// 		image: img6,
	// 		name: "Name of Property",
	// 		location: "Location of Property",
	// 		price: "Price",
	// 		isFavourite: favorites.includes(5),
	// 	},
	// 	{
	// 		image: img6,
	// 		name: "Name of Property",
	// 		location: "Location of Property",
	// 		price: "Price",
	// 		isFavourite: favorites.includes(6),
	// 	},
	// 	{
	// 		image: img6,
	// 		name: "Name of Property",
	// 		location: "Location of Property",
	// 		price: "Price",
	// 		isFavourite: favorites.includes(7),
	// 	},
	// ];

	useEffect(() => {
		getAllLocations()
		.then(res => setPropertiesDetail(res.data.locations))
		.catch(err => console.log(err))
	}, [])

	return (
		<div className="property-section">
			<div className="property-heading">
				<BsFillBookmarkFill size={24} color="#EA4235" />
				Featured Properties in Hyderabad
			</div>
			<div className="property-list">
				{propertyDetails.map((item, index) => (
					<PropertyInfo
						item={item}
						index={index}
						isFav={true}
						favorites={favorites}
						setFavorites={setFavorites}
						key={index}
						handleClick={handleClick}
						border={false}
					/>
				))}
			</div>
		</div>
	);
};

export default SectionProperty;

// falife1481@agrolivana.com
// 12345678
