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
import {  toast } from 'react-toastify';
 

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
	const [ allRes, setAllRes ] = useState([]);
	const [propertyDetails, setPropertiesDetail] = useState([]);
	const[sortingFilteringData,setSortingFilteringData]=useState({mincost:"",maxcost:"",sort:""})
const[clearBtnClick,setClearBtnClick]=useState(false)
const[doesDataExist,setDoesDataExist]=useState(false)

	const [searchEvent, setSearchEvent] = useState(event);
	const [searchLocation, setSearchLocation] = useState(loctype);
	const [searchCity, setSearchCity] = useState(city);
	const [favorites, setFavorites] = useState([]);
	const [sort, setSort] = useState("highesttolowest");
	const [openFilter, setOpenFilter] = useState(false);
	const handleOpenFilter = () => setOpenFilter(true);
	const handleCloseFilter = () => setOpenFilter(false);
	const [active, setActive] = useState(false);
	const [found, setFound] = useState(false);
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
		{ value: "highesttolowest", label: "Highest to Lowest" , id:"1" },
		{ value: "lowesttohighest", label: "Lowest to Highest" , id:"0" },
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

	const filterEvent = (res)=>{
		var filteredArray = [];
		res.map((item, idx)=>{
			//Filtering according  to event
			if ((searchEvent == "FilmShooting") &&
				(item.pricing.film_webseries_ad.isPresent == true ||
				item.pricing.tv_series_other.isPresent == true)){
					filteredArray = [...filteredArray, item];
				}
			else if( searchEvent == "CorporateBooking" &&
			item.pricing.corporate.isPresent == true){
					filteredArray = [...filteredArray, item];
			}
			else if( searchEvent == "IndividualBooking" &&
			item.pricing.individual.isPresent == true){
					filteredArray = [...filteredArray, item];
			}
			else if( searchEvent == "all" ){
					filteredArray = [...filteredArray, item];
			}
		})

		return filteredArray;
	}

	const filterLocation = (res)=>{
		var filteredArray = [];
		res.map((item,idx)=>{
			if( searchLocation == item.property_desc.location_type){
				filteredArray = [...filteredArray, item];
			}
			else if(searchLocation == "all"){
				filteredArray = [...filteredArray, item];
			}
		})

		return filteredArray;
	}

	const filterCity = (res)=>{
		var filteredArray = [];
		res.map((item, idx)=>{
			if(searchCity == item.property_address.city){
				filteredArray = [...filteredArray, item];
			}
			else if(searchCity == "all"){
				filteredArray = [...filteredArray, item];
			}
		})

		return filteredArray;
	}

//FETCHING ALL THE DATA INITIALLY FIRST

	useEffect(() => {
		const fetchData = async () => {
			let newRes=[]
			const response = await getAllLocations();
			const res = response.data;
res.map((item)=>{
newRes.push({...item,price_per_12_hr : item?.pricing?.corporate?.isPresent
    ? parseInt(item?.pricing?.corporate?.hourly_rate) * 12
    : item?.pricing?.film_webseries_ad?.isPresent
      ? parseInt(item?.pricing?.film_webseries_ad?.hourly_rate) * 12
      : item?.pricing?.individual?.isPresent
        ? parseInt(item?.pricing?.individual?.hourly_rate) * 12
        : parseInt(item?.pricing?.tv_series_other?.hourly_rate) * 12
})
})
			var filteredArray = await filterEvent(newRes);
			filteredArray = await filterLocation(filteredArray);
			filteredArray = await filterCity(filteredArray);
			setAllRes(newRes);
			if(filteredArray.length!==0){setDoesDataExist(true)}
			if(filteredArray.length===0){setDoesDataExist(false)}
			setPropertiesDetail(filteredArray);
		};

		const showData = async ()=>{
			console.log(event, loctype, city);
			console.log(propertyDetails);
		}

		fetchData();
		// showData();
	}, [clearBtnClick]);


	useEffect(()=>{
		var filteredArray = filterEvent(allRes);
		filteredArray = filterLocation(filteredArray);
		filteredArray = filterCity(filteredArray);
		if(filteredArray.length!==0){setDoesDataExist(true)}
		if(filteredArray.length===0){setDoesDataExist(false)}
		setPropertiesDetail(filteredArray);

	}, [searchEvent])

	useEffect(()=>{
		var filteredArray = filterEvent(allRes);
		filteredArray = filterLocation(filteredArray);
		filteredArray = filterCity(filteredArray);
		if(filteredArray.length!==0){setDoesDataExist(true)}
		if(filteredArray.length===0){setDoesDataExist(false)}
		setPropertiesDetail(filteredArray);

	}, [searchLocation])

	useEffect(()=>{
		var filteredArray = filterEvent(allRes);
		filteredArray = filterLocation(filteredArray);
		filteredArray = filterCity(filteredArray);
		if(filteredArray.length!==0){setDoesDataExist(true)}
		if(filteredArray.length===0){setDoesDataExist(false)}
		setPropertiesDetail(filteredArray);

	}, [searchCity])


//ON FILTERING AFTER RESULT CAME
const handleFilterBtnClick=()=>{
	if(sortingFilteringData.mincost===""||sortingFilteringData.maxcost===""||sortingFilteringData.sort===""){toast.error("Kindly Select All Filters");return}
	console.log("sortingFilteringData",sortingFilteringData)
	console.log("propertyDetails",propertyDetails)
	const newFilteredArr=propertyDetails.filter((item)=>{
		return item.price_per_12_hr>=sortingFilteringData.mincost&&item.price_per_12_hr<=sortingFilteringData.maxcost
	})
	if(newFilteredArr.length===0){toast.error("No Result Found");return}
	if(sortingFilteringData.sort==="highesttolowest"){newFilteredArr.sort((a,b)=>{return b.price_per_12_hr-a.price_per_12_hr})}
	if(sortingFilteringData.sort==="Lowesttohighest"){newFilteredArr.sort((a,b)=>{return a.price_per_12_hr-b.price_per_12_hr})}
	handleCloseFilter()
	setPropertiesDetail(newFilteredArr)
	setSortingFilteringData({mincost:"",maxcost:"",sort:""})
}




	const [min, setMin] = useState(0);
	const [max, setMax] = useState(Number.MAX_SAFE_INTEGER);

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

		currentTableData?.map((item, index)=>{
			console.log(item.property_address.city == city)
			if(!found && item.property_address.city == city){
				setFound(true)
			}
		})
	}, [currentTableData]);

	var all = false;
	if(event == "all" && loctype == "all" && city=="all")
		all = true;

	return (
		<>
			<Navbar extraNavId="id-2" />
			<div className="below-nav" style={{ minHeight: "14rem" }}>
				<AiOutlineArrowLeft
					size="20px"
					style={{ cursor: "pointer" }}
					onClick={() => navigate("/")}
				/>
				<div className="search-form">
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
			</div>

			<Modal open={openFilter} onClose={handleCloseFilter}>
				<div className="listing-modal filter-modal">
					<>
						<button className="accbut">
							<h2>Filter</h2>
							<ImCross
								onClick={() => {
									handleCloseFilter();
									setSortingFilteringData({mincost:"",maxcost:"",sort:""})
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
											// onChange={changeMinPrice}
											onChange={(e)=>{setSortingFilteringData((prev)=>{return{...prev,mincost:e.value}})}}
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
											id="maxcost"
											// name="mincost"
											name="maxcost"
											options={price}
											defaultValue=""
											className={
												active === true ? "focus-select" : "form-filter-select"
											}
											// onChange={changeMaxPrice}
											onChange={(e)=>{setSortingFilteringData((prev)=>{return{...prev,maxcost:e.value}})}}
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
											// onChange={changeSort}
											onChange={(e)=>{setSortingFilteringData((prev)=>{return{...prev,sort:e.value}})}}
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
								<button onClick={handleFilterBtnClick} className="accbut apply-btn">Apply Changes</button>
							</div>
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
							setClearBtnClick(e=>!e)
						}}
					>
						Clear Filter
					</Button>
				</div>
			</div>
			<h2 style={{ fontSize: "24px", fontWeight: "500", textAlign: "center" }}>
				{/* { !found && !all &&  <span>No</span>} Locations Found */}
				{ !doesDataExist &&  <span>No</span>} Locations Found
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
				{totalPageCount > 1 && Array(totalPageCount)
					.fill(0)
					.map((item, id) => {
						return (
							<div
								key={id}
								className={`paginated-box ${id + 1 === currentPage && "active"
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
