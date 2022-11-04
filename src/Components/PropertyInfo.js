import React from "react";
import { Link } from "react-router-dom";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import Rating from "@mui/material/Rating";
import { AiFillStar, AiOutlineStar } from "react-icons/ai"
import { GiFilmProjector } from "react-icons/gi";
import { BsPersonFill } from "react-icons/bs";
import { MdOutlineCorporateFare } from "react-icons/md";

const PropertyInfo = ({
	item,
	index,
	favPage,
	favorites,
	rating,
	setFavorites,
	review,
	border,
}) => {

	console.log(item);
	return (
		<div
			className="item"
			style={{
				border: border && "1px solid #00aaff",
			}}>
			<div className="favorite-icon-wrapper">
				{favPage === true ? (
					<MdFavorite
						size="28px"
						color="#ff6767"
						onClick={() => {
							setFavorites((prev) =>
								prev.filter((element) => element !== index)
							);
						}}
					/>
				) : favorites.includes(index) === true ? (
					<MdFavorite
						size="28px"
						color="#ff6767"
						onClick={() => {
							setFavorites((prev) =>
								prev.filter((element) => element !== index)
							);
						}}
					/>
				) : (
					<MdFavoriteBorder
						size="28px"
						color="#fff"
						onClick={() => {
							setFavorites((prev) => [...prev, index]);
						}}
					/>
				)}
			</div>
			<Link
				reloadDocument
				to={`/property/${item.location_id}`}
				style={{
					textDecoration: "none",
					color: "black",
				}}>
				<div className="text-on-image-container-2">
					<img
						src={item.imagesData[0].image}
						alt={`property-${index + 1}`}
						className="property-image"
					/>
					{/* {review && <div className="type-of-property-icon">{item.icon}</div>} */}
				</div>
				<div
					style={{
						paddingLeft: "4px",
					}}>
					<div className="property-info-heading">{item.property_desc.location_type}</div>
					<div className="property-info-location">{item.property_address.city}</div>
					<div className="property-info-location">&#8377; 000/hr</div>
					<div className="property-info-location property-rating">
						<div>
							<div>
							<AiFillStar style={{ color: '#FFC736'}} size="25px" />
							<AiFillStar style={{ color: '#FFC736'}} size="25px" />
							<AiFillStar style={{ color: '#FFC736'}} size="25px" />
							<AiOutlineStar style={{ color: '#FFC736'}} size="25px" />
							<AiOutlineStar style={{ color: '#FFC736'}} size="25px" />
							</div>
						</div>
						<div>(40)</div>
						<div>
						{item.pricing.corporate.isPresent && <MdOutlineCorporateFare size="20px" />}
						{item.pricing.film_webseries_ad.isPresent && <GiFilmProjector size="20px" />}
						{item.pricing.individual.isPresent && <BsPersonFill size="20px" />}
						{item.pricing.tv_series_other.isPresent && <GiFilmProjector size="20px" />}
						</div>
					</div>

					{/* <div className="property-info-price">{item.price}</div> */}
					<div
						style={{
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
						}}>
						{/* {rating && (
							<div className="property-info-rating">
								<Rating
									name="read-only"
									value={item.rating}
									readOnly
									size="12px"
								/>
							</div>
						)} */}
						{/* {review && (
							<>
								<div>( {item?.reviewCount} )</div>
							</>
						)} */}
					</div>
				</div>
			</Link >
		</div >
	);
};

export default PropertyInfo;

// setFavorites((prev) => prev.filter((element) => element !== index));
