import React from "react";
import FormFilter from "../Components/Home/FormFilter";
import Navbar from "../Components/Navbar";
import PropertyInfo from "../Components/PropertyInfo";
import img1 from "../Assets/Images/property-1.jpeg";
import img2 from "../Assets/Images/property-2.jpeg";
import img3 from "../Assets/Images/property-3.jpeg";
import img4 from "../Assets/Images/property-4.jpeg";
import img5 from "../Assets/Images/property-5.jpeg";
import img6 from "../Assets/Images/property-6.jpeg";
import "../Assets/Styles/Search/search.css";
import Host from "../Components/Home/Host";

const Search = () => {
	const propertyDetails = [
		{
			image: img1,
			name: "Name of Property",
			location: "Location of Property",
			price: "Price",
			rating: "1",
		},
		{
			image: img2,
			name: "Name of Property",
			location: "Location of Property",
			price: "Price",
			rating: "2",
		},
		{
			image: img3,
			name: "Name of Property",
			location: "Location of Property",
			price: "Price",
			rating: "3",
		},
		{
			image: img4,
			name: "Name of Property",
			location: "Location of Property",
			price: "Price",
			rating: "4",
		},
		{
			image: img5,
			name: "Name of Property",
			location: "Location of Property",
			price: "Price",
			rating: "5",
		},
		{
			image: img6,
			name: "Name of Property",
			location: "Location of Property",
			price: "Price",
			rating: "1",
		},
		{
			image: img1,
			name: "Name of Property",
			location: "Location of Property",
			price: "Price",
			rating: "2",
		},
		{
			image: img2,
			name: "Name of Property",
			location: "Location of Property",
			price: "Price",
			rating: "3",
		},
		{
			image: img3,
			name: "Name of Property",
			location: "Location of Property",
			price: "Price",
			rating: "4",
		},
		{
			image: img4,
			name: "Name of Property",
			location: "Location of Property",
			price: "Price",
			rating: "5",
		},
		{
			image: img5,
			name: "Name of Property",
			location: "Location of Property",
			price: "Price",
			rating: "1",
		},
		{
			image: img6,
			name: "Name of Property",
			location: "Location of Property",
			price: "Price",
			rating: "2",
		},
		{
			image: img1,
			name: "Name of Property",
			location: "Location of Property",
			price: "Price",
			rating: "3",
		},
		{
			image: img2,
			name: "Name of Property",
			location: "Location of Property",
			price: "Price",
			rating: "4",
		},
		{
			image: img3,
			name: "Name of Property",
			location: "Location of Property",
			price: "Price",
			rating: "5",
		},
		{
			image: img4,
			name: "Name of Property",
			location: "Location of Property",
			price: "Price",
			rating: "1",
		},
		{
			image: img5,
			name: "Name of Property",
			location: "Location of Property",
			price: "Price",
			rating: "2",
		},
		{
			image: img6,
			name: "Name of Property",
			location: "Location of Property",
			price: "Price",
			rating: "3",
		},
		{
			image: img5,
			name: "Name of Property",
			location: "Location of Property",
			price: "Price",
			rating: "4",
		},
		{
			image: img6,
			name: "Name of Property",
			location: "Location of Property",
			price: "Price",
			rating: "5",
		},
	];

	return (
		<div>
			<Navbar extraNavId="id-2" />
			<div className="below-nav">
				<FormFilter fullScreen={true} />
			</div>

			<div className="search-property-list">
				{propertyDetails.map((item, index) => (
					<PropertyInfo
						item={item}
						index={index}
						isFav={false}
						key={index}
						rating={true}
					/>
				))}
			</div>

			<Host
				title="Get in buisness with GoRecce"
				buttonContent="Become a Host"
			/>
		</div>
	);
};

export default Search;
