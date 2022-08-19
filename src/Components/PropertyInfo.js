import React from "react";
import { Link } from "react-router-dom";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import Rating from "@mui/material/Rating";

const PropertyInfo = ({ item, index, favorites, rating, setFavorites }) => {
	return (
		<div className="item">
			<div className="text-on-image-container-2">
				<img
					src={item.image}
					alt={`property-${index + 1}`}
					className="property-image"
				/>
				<div className="favorite-icon-wrapper">
					{favorites.includes(index) === true ? (
						<MdFavorite
							size="32px"
							color="#ff6767"
							onClick={() => {
								setFavorites((prev) =>
									prev.filter((element) => element !== index)
								);
							}}
						/>
					) : (
						<MdFavoriteBorder
							size="32px"
							onClick={() => {
								setFavorites((prev) => [...prev, index]);
							}}
						/>
					)}
				</div>
			</div>
			<div>
				<Link
					to="/property"
					style={{
						textDecoration: "none",
						color: "black",
					}}>
					<div className="property-info-heading">{item.name}</div>
					<div className="property-info-location">{item.location}</div>
					<div className="property-info-price">
						{item.price}
						{rating && (
							<div className="property-info-rating">
								<Rating name="read-only" value={item.rating} readOnly />
							</div>
						)}
					</div>
				</Link>
			</div>
		</div>
	);
};

export default PropertyInfo;

// setFavorites((prev) => prev.filter((element) => element !== index));
