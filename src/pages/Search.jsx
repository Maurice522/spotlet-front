import React, { useState, useEffect } from "react";
import FormFilter from "../Components/Home/FormFilter";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import PropertyInfo from "../Components/PropertyInfo";
import img1 from "../Assets/Images/property-1.jpeg";
import img2 from "../Assets/Images/property-2.jpeg";
import img3 from "../Assets/Images/property-3.jpeg";
import img4 from "../Assets/Images/property-4.jpeg";
import img5 from "../Assets/Images/property-5.jpeg";
import img6 from "../Assets/Images/property-6.jpeg";
import "../Assets/Styles/Search/search.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import jwtDecode from "jwt-decode";
import { getUserData } from "../services/api";

const Search = () => {
	var sortedProperties;
	const navigate = useNavigate();

	const [searchEvent, setSearchEvent] = useState("all");
	const [searchLocation, setSearchLocation] = useState("all");
	const [propertyDetails, setPropertiesDetail] = useState([]);
	const [favorites, setFavorites] = useState([]);
	const [sort, setSort] = useState("");

	useEffect(() => {
		const getAllLocations = async () => {
			const response = await axios.get(
				"https://nipunbacky.herokuapp.com/getlocations"
			);

			const res = response.data;
			const result = res.locations;
			// console.log(result);
			setPropertiesDetail(result);
		};
		getAllLocations();
	}, []);

	useEffect(() => {
		const fetchFav = async () => {
			const jwt = localStorage.getItem("token");
			if (jwt) {
				const user_jwt = jwtDecode(jwt);
				const { data } = await getUserData(user_jwt._id);
				setFavorites(data.favourites);
				// console.log(favorites);
			}
		};
		fetchFav();
	}, []);

	// console.log(searchEvent, searchLocation);
	const [min, setMin] = useState(0);
	const [max, setMax] = useState(Number.MAX_SAFE_INTEGER);

	// console.log("max min", max, min);

	if (searchEvent == "all") {
		sortedProperties = propertyDetails;
	}
	if (searchEvent == "CorporateBooking") {
		if (sort == "highesttolowest") {
			sortedProperties = [...propertyDetails].sort((a, b) =>
				Number(a.pricing.corporate?.hourly_rate) <
				Number(b.pricing.corporate?.hourly_rate)
					? 1
					: -1
			);
		} else {
			sortedProperties = [...propertyDetails].sort((a, b) =>
				Number(a.pricing.corporate?.hourly_rate) <
				Number(b.pricing.corporate?.hourly_rate)
					? -1
					: 1
			);
		}
	}
	if (searchEvent == "IndividualBooking") {
		if (sort == "highesttolowest") {
			sortedProperties = [...propertyDetails].sort((a, b) =>
				Number(a.pricing.individual?.hourly_rate) <
				Number(b.pricing.individual?.hourly_rate)
					? 1
					: -1
			);
		} else {
			sortedProperties = [...propertyDetails].sort((a, b) =>
				Number(a.pricing.individual?.hourly_rate) <
				Number(b.pricing.individual?.hourly_rate)
					? -1
					: 1
			);
		}
	}
	if (searchEvent == "FilmShooting") {
		if (sort == "highesttolowest") {
			sortedProperties = [...propertyDetails].sort((a, b) =>
				Number(a.pricing.film_webseries_ad?.hourly_rate) <
				Number(b.pricing.film_webseries_ad?.hourly_rate)
					? 1
					: -1
			);
		} else {
			sortedProperties = [...propertyDetails].sort((a, b) =>
				Number(a.pricing.film_webseries_ad?.hourly_rate) <
				Number(b.pricing.film_webseries_ad?.hourly_rate)
					? -1
					: 1
			);
		}
	}

	// console.log(searchEvent, sort);
	// console.log(sortedProperties);
	return (
		<>
			<Navbar extraNavId="id-2" />
			<div className="below-nav">
				<AiOutlineArrowLeft
					size="20px"
					style={{ cursor: "pointer" }}
					onClick={() => navigate("/")}
				/>
				<FormFilter
					fullScreen={true}
					homepage={false}
					setSearchEvent={setSearchEvent}
					setSearchLocation={setSearchLocation}
					setMax={setMax}
					setMin={setMin}
					sort={sort}
					setSort={setSort}
				/>
			</div>
			<div className="search-heading">All Locations</div>

			<div className="search-property-list">
				{sortedProperties?.map((item, index) => {
					if (
						searchEvent == "all" &&
						((item.pricing.film_webseries_ad?.hourly_rate <= max &&
							item.pricing.film_webseries_ad?.hourly_rate >= min) ||
							(item.pricing?.tv_series_other?.hourly_rate <= max &&
								item.pricing?.tv_series_other?.hourly_rate >= min) ||
							(item.pricing.corporate?.hourly_rate <= max &&
								item.pricing.corporate?.hourly_rate >= min) ||
							(item.pricing.individual?.hourly_rate <= max &&
								item.pricing.individual?.hourly_rate >= min))
					) {
						return (
							<PropertyInfo
								item={item}
								// index={index}
								// isFav={true}
								favPage={false}
								favorites={favorites}
								setFavorites={setFavorites}
								key={item.location_id}
								handleClick={() => {
									console.log("clicked");
								}}
								border={false}
							/>
						);
					} else if (searchLocation == "all") {
						if (
							searchEvent == "FilmShooting" &&
							(item.pricing.film_webseries_ad.isPresent == true ||
								item.pricing.tv_series_other.isPresent == true) &&
							((item.pricing.film_webseries_ad?.hourly_rate <= max &&
								item.pricing.film_webseries_ad?.hourly_rate > min) ||
								(item.pricing?.tv_series_other?.hourly_rate <= max &&
									item.pricing?.tv_series_other?.hourly_rate > min))
						) {
							return (
								<PropertyInfo
									item={item}
									// index={index}
									// isFav={true}
									favPage={false}
									favorites={favorites}
									setFavorites={setFavorites}
									key={item.location_id}
									handleClick={() => {
										console.log("clicked");
									}}
									border={false}
								/>
							);
						} else if (
							searchEvent == "CorporateBooking" &&
							item.pricing.corporate.isPresent == true &&
							item.pricing.corporate?.hourly_rate <= max &&
							item.pricing.corporate?.hourly_rate >= min
						) {
							return (
								<PropertyInfo
									item={item}
									// index={index}
									// isFav={true}
									favPage={false}
									favorites={favorites}
									setFavorites={setFavorites}
									key={item.location_id}
									handleClick={() => {
										console.log("clicked");
									}}
									border={false}
								/>
							);
						} else if (
							searchEvent == "IndividualBooking" &&
							item.pricing.individual.isPresent == true &&
							item.pricing.individual?.hourly_rate <= max &&
							item.pricing.individual?.hourly_rate >= min
						) {
							return (
								<PropertyInfo
									item={item}
									// index={index}
									// isFav={true}
									favPage={false}
									favorites={favorites}
									setFavorites={setFavorites}
									key={item.location_id}
									handleClick={() => {
										console.log("clicked");
									}}
									border={false}
								/>
							);
						}
					} else if (
						searchEvent == "FilmShooting" &&
						(item.pricing.film_webseries_ad.isPresent == true ||
							item.pricing.tv_series_other.isPresent == true) &&
						((item.pricing.film_webseries_ad?.hourly_rate <= max &&
							item.pricing.film_webseries_ad?.hourly_rate >= min) ||
							(item.pricing?.tv_series_other?.hourly_rate <= max &&
								item.pricing?.tv_series_other?.hourly_rate >= min))
					) {
						console.log(searchEvent);
						if (searchLocation == item.property_desc.location_type) {
							console.log(searchLocation, item.property_desc.location_type);
							return (
								<PropertyInfo
									item={item}
									// index={index}
									// isFav={true}
									favPage={false}
									favorites={favorites}
									setFavorites={setFavorites}
									key={item.location_id}
									handleClick={() => {
										console.log("clicked");
									}}
									border={false}
								/>
							);
						}
					} else if (
						searchEvent == "CorporateBooking" &&
						item.pricing.corporate.isPresent == true &&
						item.pricing.corporate?.hourly_rate <= max &&
						item.pricing.corporate?.hourly_rate >= min
					) {
						console.log(searchEvent);
						if (searchLocation == item.property_desc.location_type) {
							console.log(searchLocation, item.property_desc.location_type);
							return (
								<PropertyInfo
									item={item}
									// index={index}
									// isFav={true}
									favPage={false}
									favorites={favorites}
									setFavorites={setFavorites}
									key={item.location_id}
									handleClick={() => {
										console.log("clicked");
									}}
									border={false}
								/>
							);
						}
					} else if (
						searchEvent == "IndividualBooking" &&
						item.pricing.individual.isPresent == true &&
						item.pricing.individual?.hourly_rate <= max &&
						item.pricing.individual?.hourly_rate >= min
					) {
						console.log(searchEvent);
						if (searchLocation == item.property_desc.location_type) {
							console.log(searchLocation, item.property_desc.location_type);
							return (
								<PropertyInfo
									item={item}
									// index={index}
									// isFav={true}
									favPage={false}
									favorites={favorites}
									setFavorites={setFavorites}
									key={item.location_id}
									handleClick={() => {
										console.log("clicked");
									}}
									border={false}
								/>
							);
						}
					}
				})}
			</div>
			{/* <Host
				title="Get in buisness with GoRecce"
				buttonContent="Become a Host"
			/> */}
			<Footer />
		</>
	);
};

export default Search;
