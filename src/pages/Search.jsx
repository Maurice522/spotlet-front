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
import { useNavigate, useParams } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import jwtDecode from "jwt-decode";
import { getUserData } from "../services/api";
import { Button, Modal } from "@mui/material";
import { BiFilterAlt } from "react-icons/bi";
import { ImCross } from "react-icons/im";
import Select from "react-select";
import Host from "../Components/Home/Host";
import { MarginRounded } from "@mui/icons-material";

const Search = () => {
	var sortedProperties;
	const navigate = useNavigate();
	const { event } = useParams();
	const [searchEvent, setSearchEvent] = useState("all");
	const [searchLocation, setSearchLocation] = useState("all");
	const [propertyDetails, setPropertiesDetail] = useState([]);
	const [favorites, setFavorites] = useState([]);
	const [sort, setSort] = useState("");
	const [openFilter, setOpenFilter] = useState(false);
	const handleOpenFilter = () => setOpenFilter(true);
	const handleCloseFilter = () => setOpenFilter(false);
	// const [event, setEvent] = useState("all");
	const [active, setActive] = useState(false);

	useEffect(() => {
		console.log("useeffect");
		console.log(event);
		if (event) {
			setSearchEvent(event);
			setSearchLocation('all');
		}
	}, []);

	const price = [
		{ value: 0, label: 0 },
		{ value: 1000, label: "1,000" },
		{ value: 2000, label: "2,000" },
		{ value: 5000, label: "5,000" },
		{ value: 10000, label: "10,000" },
		{ value: 20000, label: "20,000" },
		{ value: 50000, label: "50,000" },
		{ value: 100000, label: "1,00,000" },
	];

	const sortOptions = [
		{ value: "highesttolowest", label: "Highest to Lowest" },
		{ value: "lowesttohighest", label: "Lowest to Highest" },
	];

	const changeMinPrice = (e) => {
		setMin(e.value);
	};

	const changeMaxPrice = (e) => {
		setMax(e.value);
	};

	const changeSort = (e) => {
		setSort(e.value);
	};

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
			<div className="below-nav" style={{ minHeight: "14rem" }}>
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
			{/* <div className="filter-box">
				<div>
					<button className="filter-btn" onClick={handleOpenFilter}>
						<BiFilterAlt />
						<h2>Filter</h2>
					</button>
					<Button style={{ color: "red", padding: "6px 0" }}>
						Clear Filter
					</Button>
				</div>
				<h2>{sortedProperties?.length} Stays</h2>
			</div> */}
			<Modal open={openFilter} onClose={handleCloseFilter}>
				<div className="listing-modal filter-modal">
					<>
						<button className="accbut">
							<h2>Filter</h2>
							<ImCross
								onClick={() => {
									handleCloseFilter();
								}}
								style={{ cursor: "pointer" }}
							/>
						</button>
						<div className="filter-body">
							<h2>Price - Set price for 8 hours</h2>
							<div className="filter--coll">
								<div className="filter--coll1">
									<div className="filter--coll2">
										<label
											htmlFor="mincost"
											className={
												active === true ? "focus-label" : "form-filter-label"
											}
										>
											Min Price
										</label>
										<Select
											id="mincost"
											name="mincost"
											options={price}
											defaultValue=""
											className={
												active === true ? "focus-select" : "form-filter-select"
											}
											onChange={changeMinPrice}
										></Select>
									</div>
									<div className="filter--coll2">
										<label
											htmlFor="maxcost"
											className={
												active === true ? "focus-label" : "form-filter-label"
											}
										>
											Max Price
										</label>
										<Select
											id="mincost"
											name="mincost"
											options={price}
											defaultValue=""
											className={
												active === true ? "focus-select" : "form-filter-select"
											}
											onChange={changeMaxPrice}
										></Select>
									</div>
									<div className="filter--coll2">
										<label
											htmlFor="sort"
											className={
												active === true ? "focus-label" : "form-filter-label"
											}
										>
											Sort{" "}
										</label>
										<Select
											id="sort"
											name="sort"
											options={sortOptions}
											defaultValue=""
											className={
												active === true ? "focus-select" : "form-filter-select"
											}
											onChange={changeSort}
										></Select>
									</div>
								</div>
								{/* <div>
									<h2>No. of Attendees</h2>
									<div>
										<label class="filter-container">0 - 10
											<input type="checkbox" />
											<span class="checkmark"></span>
										</label>
										<label class="filter-container">10 - 50
											<input type="checkbox" />
											<span class="checkmark"></span>
										</label>
										<label class="filter-container">50 - 100
											<input type="checkbox" />
											<span class="checkmark"></span>
										</label>
										<label class="filter-container">100 +
											<input type="checkbox" />
											<span class="checkmark"></span>
										</label>
									</div>
								</div>
								<div>
									<h2>Amenities</h2>
									<div className="filter--coll3">
										<label class="filter-container">AC
											<input type="checkbox" />
											<span class="checkmark"></span>
										</label>
										<label class="filter-container">TV
											<input type="checkbox" />
											<span class="checkmark"></span>
										</label>
										<label class="filter-container">Fridge
											<input type="checkbox" />
											<span class="checkmark"></span>
										</label>
										<label class="filter-container">Wi-Fi
											<input type="checkbox" />
											<span class="checkmark"></span>
										</label>
										<label class="filter-container">Projector
											<input type="checkbox" />
											<span class="checkmark"></span>
										</label>
										<label class="filter-container">Freezer
											<input type="checkbox" />
											<span class="checkmark"></span>
										</label>
										<label class="filter-container">Sofas
											<input type="checkbox" />
											<span class="checkmark"></span>
										</label>
										<label class="filter-container">Free Parking
											<input type="checkbox" />
											<span class="checkmark"></span>
										</label>
									</div>
								</div> */}
								{/* <div>
									<h2>Unique Features</h2>
									<div className="filter--coll3">
										<label class="filter-container">Location Manager
											<input type="checkbox" />
											<span class="checkmark"></span>
										</label>
										<label class="filter-container">TV
											<input type="checkbox" />
											<span class="checkmark"></span>
										</label>
										<label class="filter-container">Jacuzzi
											<input type="checkbox" />
											<span class="checkmark"></span>
										</label>
										<label class="filter-container">Wi-Fi
											<input type="checkbox" />
											<span class="checkmark"></span>
										</label>
										<label class="filter-container">Terrace Garden
											<input type="checkbox" />
											<span class="checkmark"></span>
										</label>
										<label class="filter-container">Freezer
											<input type="checkbox" />
											<span class="checkmark"></span>
										</label>
										<label class="filter-container">Fireplace
											<input type="checkbox" />
											<span class="checkmark"></span>
										</label>
									</div>
								</div>
								<div>
									<h2>Style of Space</h2>
									<div className="filter--coll3">
										<label class="filter-container">Farmhouse
											<input type="checkbox" />
											<span class="checkmark"></span>
										</label>
										<label class="filter-container">Rustic
											<input type="checkbox" />
											<span class="checkmark"></span>
										</label>
										<label class="filter-container">Contemporary
											<input type="checkbox" />
											<span class="checkmark"></span>
										</label>
										<label class="filter-container">Luxury
											<input type="checkbox" />
											<span class="checkmark"></span>
										</label>
										<label class="filter-container">Modern
											<input type="checkbox" />
											<span class="checkmark"></span>
										</label>
										<label class="filter-container">Bohemian
											<input type="checkbox" />
											<span class="checkmark"></span>
										</label>
										<label class="filter-container">Vintage
											<input type="checkbox" />
											<span class="checkmark"></span>
										</label>
									</div>
								</div> */}
							</div>
							<div className="apply">
								<button className="accbut apply-btn">Apply Changes</button>
							</div>
						</div>
					</>
				</div>
			</Modal>
			<div className="search-heading">
				<h1 style={{ fontSize: "30px", fontWeight: "700", margin: "20px 0px" }}>
					“ Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod
					tempor occaecat cupidatat ”{" "}
				</h1>
			</div>
			<div className="filter-box">
				<div>
					<button className="filter-btn" onClick={handleOpenFilter}>
						<BiFilterAlt />
						<h2>Filter</h2>
					</button>
					<Button
						style={{ color: "red", padding: "6px 0" }}
						onClick={() => {
							setSearchEvent("all");
							setSearchLocation("all");
						}}
					>
						Clear Filter
					</Button>
				</div>
			</div>
			<h2 style={{ fontSize: "24px", fontWeight: "500", textAlign: "center" }}>
				Locations Found
			</h2>
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
			<div className="paginated-container">
				{Array(8)
					.fill(0)
					.map((item, id) => {
						return (
							<div key={id} className={`paginated-box ${id === 0 && "active"}`}>
								{id + 1}
							</div>
						);
					})}
			</div>
			<div style={{ margin: "40px 0px" }}>
				<Host
					title="Get in buisness with GoRecce"
					buttonContent="Become a Host"
				/>
			</div>
			<Footer />
		</>
	);
};

export default Search;
