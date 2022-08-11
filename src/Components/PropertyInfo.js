import React from "react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { styled } from "@mui/material/styles";
import Rating from "@mui/material/Rating";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const PropertyInfo = ({
	item,
	index,
	isFav,
	favourites,
	handleClick,
	rating,
}) => {
	const StyledRating = styled(Rating)({
		"& .MuiRating-iconFilled": {
			color: "#ff6767",
		},
		"& .MuiRating-iconHover": {
			color: "#ff3d47",
		},
	});
	return (
		<div className="item">
			<div className="text-on-image-container" onClick={() => console.log("!")}>
				<img
					src={item.image}
					alt={`property-${index + 1}`}
					className="property-image"
				/>
				<div className="favorite-icon-wrapper" onClick={() => console.log("!")}>
					{isFav === true &&
						(favourites.includes(index) === true ? (
							<MdFavorite size="32px" color="#ff6767" onClick={handleClick} />
						) : (
							<MdFavoriteBorder size="32px" onClick={handleClick} />
						))}
				</div>
			</div>
			<div>
				<div className="property-info-heading">{item.name}</div>
				<div className="property-info-location">{item.location}</div>
				<div className="property-info-price">
					{item.price}
					{rating && (
						<div className="property-info-rating">
							<StyledRating
								name="read-only"
								value={item.rating}
								getLabelText={(value) =>
									`${value} Heart${value !== 1 ? "s" : ""}`
								}
								precision={0.5}
								icon={<FavoriteIcon fontSize="inherit" />}
								emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
								readOnly
							/>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default PropertyInfo;
