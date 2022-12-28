import React, { useState, useEffect, useMemo } from "react";
import FormFilter from "../Components/Home/FormFilter";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import PropertyInfo from "../Components/PropertyInfo";
import "../Assets/Styles/Search/search.css";
import { useNavigate, useParams } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import jwtDecode from "jwt-decode";
import { getAllLocations, getUserData } from "../services/api";
import { Button, Modal } from "@mui/material";
import { BiFilterAlt } from "react-icons/bi";
import { ImCross } from "react-icons/im";
import Select from "react-select";
import Host from "../Components/Home/Host";

// const fillData = (data, splitRange) => {
// 	let j = 0;
// 	const values = [];
// 	for (let i = 0; i < 8; i++) {
// 		let arr = [];
// 		if (!data[j]) break;
// 		for (; j < (i + 1) * splitRange; j++) arr.push(data[j]);
// 		values.push(arr);
// 	}
// 	return values;
// };

const Search = () => {
	// let sortedProperties;
	const navigate = useNavigate();
	const { event, loctype, city } = useParams();
	const [searchEvent, setSearchEvent] = useState("all");
	const [searchLocation, setSearchLocation] = useState("all");
	const [searchCity, setSearchCity] = useState("all");
	const [propertyDetails, setPropertiesDetail] = useState([]);
	const [favorites, setFavorites] = useState([]);
	const [sort, setSort] = useState("highesttolowest");
	const [openFilter, setOpenFilter] = useState(false);
	const handleOpenFilter = () => setOpenFilter(true);
	const handleCloseFilter = () => setOpenFilter(false);
	const [active, setActive] = useState(false);
	let x = window.matchMedia("(max-width:576px)");

	useEffect(() => {
		if (event) {
			setSearchEvent(event);
			setSearchLocation("all");
			setSearchCity("all");
		}
		if (loctype) {
			setSearchLocation(loctype);
		}
		if (city) {
			setSearchCity(city);
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
		const fetchData = async () => {
			const response = await getAllLocations();
			const res = response.data;
			setPropertiesDetail(res);
		};
		fetchData();
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

	const [min, setMin] = useState(0);
	const [max, setMax] = useState(Number.MAX_SAFE_INTEGER);

	// const [pageIndex, setPageIndex] = useState(0);
	// const [pageData, setPageData] = useState([[]]);
	// useEffect(() => {
	//   setPageData(fillData(sortedProperties, 5));
	// }, [sortedProperties]);

	// const handlePageIndex = (index) => {
	//   if (!pageData[index]) return toast.error("More locations cannot be found");
	//   setPageIndex(index);
	// };

	// console.log(searchEvent, sort);
	// console.log(sortedProperties);

	// total no of propertyDetails are avaiable  =propertyDetails.length
	// const propertyDetailsCount = propertyDetails?.length;

	const MaxPropertyAtPage = 15; //this can be modiefied according to the user choice
	const totalPageCount = Math.ceil(propertyDetails?.length / MaxPropertyAtPage);
	console.log(totalPageCount)
	const [currentPage, setCurrentPage] = useState(1);
	// console.log(totalPageCount);

	const currentTableData = useMemo(() => {
		const firstPageIndex = (currentPage - 1) * MaxPropertyAtPage;
		const lastPageIndex = firstPageIndex + MaxPropertyAtPage;
		return propertyDetails?.slice(firstPageIndex, lastPageIndex);
	}, [currentPage, propertyDetails]);

	// useEffect(() => {
	// 	if (searchEvent == "all") {
	// 		sortedProperties = currentTableData;
	// 		if (sort == "highesttolowest") {
	// 			console.log("allhl");
	// 			sortedProperties = [...currentTableData].sort((a, b) =>
	// 				Number(a.pricing.corporate?.hourly_rate) <
	// 				Number(b.pricing.corporate?.hourly_rate)
	// 					? 1
	// 					: -1
	// 			);
	// 		} else {
	// 			console.log("alllh");
	// 			sortedProperties = [...currentTableData].sort((a, b) =>
	// 				Number(a.pricing.corporate?.hourly_rate) <
	// 				Number(b.pricing.corporate?.hourly_rate)
	// 					? -1
	// 					: 1
	// 			);
	// 		}
	// 	}
	// 	if (searchEvent == "CorporateBooking") {
	// 		if (sort == "highesttolowest") {
	// 			console.log("cbhl");
	// 			sortedProperties = [...currentTableData].sort((a, b) =>
	// 				Number(a.pricing.corporate?.hourly_rate) <
	// 				Number(b.pricing.corporate?.hourly_rate)
	// 					? 1
	// 					: -1
	// 			);
	// 		} else {
	// 			console.log("cblh");
	// 			sortedProperties = [...currentTableData].sort((a, b) =>
	// 				Number(a.pricing.corporate?.hourly_rate) <
	// 				Number(b.pricing.corporate?.hourly_rate)
	// 					? -1
	// 					: 1
	// 			);
	// 		}
	// 	}
	// 	if (searchEvent == "IndividualBooking") {
	// 		if (sort == "highesttolowest") {
	// 			sortedProperties = [...currentTableData].sort((a, b) =>
	// 				Number(a.pricing.individual?.hourly_rate) <
	// 				Number(b.pricing.individual?.hourly_rate)
	// 					? 1
	// 					: -1
	// 			);
	// 		} else {
	// 			sortedProperties = [...currentTableData].sort((a, b) =>
	// 				Number(a.pricing.individual?.hourly_rate) <
	// 				Number(b.pricing.individual?.hourly_rate)
	// 					? -1
	// 					: 1
	// 			);
	// 		}
	// 	}
	// 	if (searchEvent == "FilmShooting") {
	// 		if (sort == "highesttolowest") {
	// 			sortedProperties = [...currentTableData].sort((a, b) =>
	// 				Number(a.pricing.film_webseries_ad?.hourly_rate) <
	// 				Number(b.pricing.film_webseries_ad?.hourly_rate)
	// 					? 1
	// 					: -1
	// 			);
	// 		} else {
	// 			sortedProperties = [...currentTableData].sort((a, b) =>
	// 				Number(a.pricing.film_webseries_ad?.hourly_rate) <
	// 				Number(b.pricing.film_webseries_ad?.hourly_rate)
	// 					? -1
	// 					: 1
	// 			);
	// 		}
	// 	}
	// }, []);

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
					searchEvent={searchEvent}
					setSearchEvent={setSearchEvent}
					searchLocation={searchLocation}
					setSearchLocation={setSearchLocation}
					searchCity={searchCity}
					setSearchCity={setSearchCity}
					setMax={setMax}
				/>
			</div>

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
							<h2>Price - Set price per hour</h2>
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
											htmlFor="maxcost"
											className={
												active === true ? "focus-label" : "form-filter-label"
											}
										>
											Sort
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
							{/* <div className="apply">
								<button className="accbut apply-btn">Apply Changes</button>
							</div> */}
						</div>
					</>
				</div>
			</Modal>

			<div
				className="search-heading"
				style={{ marginTop: x.matches && "300px" }}
			>
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
							// setSearchEvent("all");
							// setSearchLocation("all");
							// setSearchCity("all");
							setMin(0);
							setMax(Number.MAX_SAFE_INTEGER);
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
				{/* {pageData[pageIndex]?.map((item, index) => { */}
				{currentTableData?.map((item, index) => {
					if (!item) return null;
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
						if (searchCity != "all") {
							if (searchCity === item.property_address.city) {
								console.log(searchCity, item.property_address.city);
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
							} else {
								return;
							}
						}
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
							if (searchCity != "all") {
								if (searchCity === item.property_address.city) {
									console.log(searchCity, item.property_address.city);
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
								} else {
									return;
								}
							}
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
							if (searchCity != "all") {
								if (searchCity === item.property_address.city) {
									console.log(searchCity, item.property_address.city);
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
								} else {
									return;
								}
							}
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
							if (searchCity != "all") {
								if (searchCity === item.property_address.city) {
									console.log(searchCity, item.property_address.city);
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
								} else {
									return;
								}
							}
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
							if (searchCity != "all") {
								if (searchCity === item.property_address.city) {
									console.log(searchCity, item.property_address.city);
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
								} else {
									return;
								}
							}
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
							if (searchCity != "all") {
								if (searchCity === item.property_address.city) {
									console.log(searchCity, item.property_address.city);
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
								} else {
									return;
								}
							}
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
							if (searchCity != "all") {
								if (searchCity === item.property_address.city) {
									console.log(searchCity, item.property_address.city);
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
								} else {
									return;
								}
							}
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
				{/* {Array(8)
					.fill(0)
					.map((item, id) => {
						return (
							<div
								key={id}
								className={`paginated-box ${id === pageIndex && "active"}`}
								onClick={() => handlePageIndex(id)}
							>
								{id + 1}
							</div>
						);
					})} */}

				{/* pagination  */}
				{Array(totalPageCount)
					.fill(0)
					.map((item, id) => {
						return (
							<div
								key={id}
								className={`paginated-box ${
									id + 1 === currentPage && "active"
								}`}
								onClick={() => setCurrentPage(id + 1)}
							>
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
