import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import Rating from "@mui/material/Rating";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { GiFilmProjector } from "react-icons/gi";
import { BsPersonFill } from "react-icons/bs";
import { MdOutlineCorporateFare } from "react-icons/md";
import { updateFavourites } from "../services/api";
import { selectUserData, selectUser_id } from "../redux/slices/userSlice";
import { useSelector } from "react-redux";

const PropertyInfo = ({
  item,
  // index,
  favPage,
  favorites,
  setFavorites
}) => {
  const userData = useSelector(selectUserData);
  const user_id = useSelector(selectUser_id);
  const [starSize, setStarSize] = useState("18px");
  const [rating, setRating] = useState(null)

  let x = window.matchMedia("(max-width: 576px)");
  useEffect(() => {
    if (x.matches) setStarSize("15px");
    else setStarSize("18px");
  }, [x]);

  useEffect(() => {
    const updateFav = async () => {
      const data = {
        favourites: favorites,
        user_id,
      };
      await updateFavourites(data);
    };
    updateFav();
  }, [favorites]);

  useEffect(() => {
    let sum = 0;
    item?.review_and_rating?.map((rat) => {
      sum += rat.rating;
    })
    if (item?.review_and_rating?.length > 0)
      setRating(Number(sum / item?.review_and_rating.length))
    else
      setRating(0)
  }, [])

  // console.log(rating);

  let price_per_12_hr = item?.pricing?.corporate?.isPresent
    ? parseInt(item?.pricing?.corporate?.hourly_rate) * 12
    : item?.pricing?.film_webseries_ad?.isPresent
      ? parseInt(item?.pricing?.film_webseries_ad?.hourly_rate) * 12
      : item?.pricing?.individual?.isPresent
        ? parseInt(item?.pricing?.individual?.hourly_rate) * 12
        : parseInt(item?.pricing?.tv_series_other?.hourly_rate) * 12;

  return (
    <div
      className="item"
      style={
        {
          // border: border && "1px solid #00aaff",
        }
      }
    >
      <div className="favorite-icon-wrapper">
        {favPage === true ? (
          <MdFavorite
            size="28px"
            color="#ff6767"
            onClick={() => {
              setFavorites((prev) =>
                prev.filter((element) => element !== item.location_id)
              );
            }}
          />
        ) : favorites?.includes(item.location_id) === true ? (
          <MdFavorite
            size="28px"
            color="#ff6767"
            onClick={() => {
              setFavorites((prev) =>
                prev.filter((element) => element !== item.location_id)
              );
            }}
          />
        ) : (
          <MdFavoriteBorder
            size="28px"
            color="#fff"
            onClick={() => {
              setFavorites((prev) => [...prev, item.location_id]);
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
        }}
      >
        <div className="text-on-image-container-2">
          <div
            className="property-image"
            style={{ backgroundColor: "#fcfcfc" }}
          >
            {item?.imagesData[0]?.image && (
              <img
                src={item?.imagesData[0]?.image}
                alt={`property-${item.location_id}`}
                className="property-image"
              />
            )}
          </div>
          {/* {review && <div className="type-of-property-icon">{item.icon}</div>} */}
        </div>
        <div className="property-info--cards">
          <div className="property-info-heading">#{item?.location_id}</div>

          {/* <div className="property-info-location">
            {item?.property_address?.city}
          </div> */}
          <div className="property-info-location" style={{ fontWeight: "600" }}>
            {item?.property_desc?.location_type}
          </div>
          {/* <div className="property-info-location">
            {item?.property_address?.city}
          </div> */}
          <div className="property-info-location">
            &#8377; {price_per_12_hr}/12 hrs
          </div>
          <div className="property-info-location property-rating">
            <div>
              <div>{
                rating !== null &&
                <Rating
                  name="simple-controlled"
                  precision={0.1}
                  value={rating}
                  size={starSize}
                  readOnly
                />}
              </div>
            </div>
            <div>({item?.review_and_rating?.length})</div>
            {!x.matches && (
              <div>
                {item.pricing.corporate.isPresent && (
                  <MdOutlineCorporateFare size="20px" />
                )}
                {(item.pricing.film_webseries_ad.isPresent ||
                  item.pricing.tv_series_other.isPresent) && (
                    <GiFilmProjector size="20px" />
                  )}
                {item.pricing.individual.isPresent && (
                  <BsPersonFill size="20px" />
                )}
              </div>
            )}
          </div>
          {x.matches && (
            <div>
              {item.pricing.corporate.isPresent && (
                <MdOutlineCorporateFare size="20px" />
              )}
              {(item.pricing.film_webseries_ad.isPresent ||
                item.pricing.tv_series_other.isPresent) && (
                  <GiFilmProjector size="20px" />
                )}
              {item.pricing.individual.isPresent && (
                <BsPersonFill size="20px" />
              )}
            </div>
          )}

          {/* <div className="property-info-price">{item.price}</div> */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
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
      </Link>
    </div>
  );
};

export default PropertyInfo;

// setFavorites((prev) => prev.filter((element) => element !== index));
