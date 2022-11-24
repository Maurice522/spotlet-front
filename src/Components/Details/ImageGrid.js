import React from "react";
import { Apps, Pending } from "@mui/icons-material";
import "./image-grid.css";
import { useEffect } from "react";
import { useState } from "react";
import {
  AiFillHeart,
  AiFillStar,
  AiOutlineHeart,
  AiOutlineStar,
} from "react-icons/ai";
import { BiShareAlt } from "react-icons/bi";
import { BsPersonFill } from "react-icons/bs";
import { GiFilmProjector } from "react-icons/gi";
import { MdOutlineCorporateFare } from "react-icons/md";
import { toast } from "react-toastify";
import jwtDecode from "jwt-decode";
import { getUserData } from "../../services/api";

function ImageGrid({
  images,
  openGallery,
  locationData,
  favorites,
  setFavorites,
}) {
  const [starSize, setStarSize] = useState("18px");
  const [copied, setCopied] = useState(false);

  const currentLocation = window.location;
  const location_id = currentLocation.href.split("/")[4];

  const copy = () => {
    const el = document.createElement("input");
    el.value = window.location.href;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    setCopied(true);
    toast.success("The link is copied to your clipboard!");
  };

  let x = window.matchMedia("(max-width: 576px)");
  useEffect(() => {
    if (x.matches) setStarSize("15px");
    else setStarSize("18px");
  }, []);

  return (
    <>
      <div className="image-grid-main">
        {x.matches && (
          <img
            src={images?.[0].image}
            alt="Main"
            className="image-grid-image"
            style={{
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
              margin: "10px 0px",
            }}
          />
        )}
        {images ? (
          <div className="image-grid-container">
            {!x.matches && (
              <div className="image-hero-container">
                <img
                  src={images[0].image}
                  alt="Main"
                  className="image-grid-image"
                  style={{
                    borderTopLeftRadius: "10px",
                    borderBottomLeftRadius: "10px",
                  }}
                />
              </div>
            )}
            <div className="image-right-container">
              <div>
                <img
                  src={images[1].image}
                  alt="Second"
                  className="image-grid-image"
                />
              </div>
              <div>
                <img
                  src={images[2].image}
                  alt="Third"
                  className="image-grid-image"
                  style={{ borderTopRightRadius: "10px" }}
                />
              </div>
              <div>
                <img
                  src={images[3].image}
                  alt="Fourth"
                  className="image-grid-image"
                />
              </div>
              <div>
                <img
                  src={images[4].image}
                  alt="Fifth"
                  className="image-grid-image"
                  style={{ borderBottomRightRadius: "10px" }}
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="image-grid-loading">
            <Pending />
            <span>Loading</span>
          </div>
        )}
        {images?.length > 5 && (
          <button className="show-all-photo" onClick={openGallery}>
            <Apps />
            <span>Show All Photos</span>
          </button>
        )}
      </div>
      <div className="property-details">
        <div>
          <div className="name">{location_id}</div>
          <div className="location">
            {locationData?.property_desc?.location_type}
          </div>
          <div>
            {locationData?.property_address?.city},{" "}
            {locationData?.property_address?.state}
          </div>
        </div>
        <div className="icons">
          <div
            className="icons--main"
            style={{ gap: !x.matches && "12px", justifyContent: "flex-end" }}
          >
            {locationData?.pricing?.corporate?.isPresent && (
              <MdOutlineCorporateFare size="30px" />
            )}
            {(locationData?.pricing?.film_webseries_ad?.isPresent ||
              locationData?.pricing?.tv_series_other?.isPresent) && (
              <GiFilmProjector size="30px" />
            )}
            {locationData?.pricing?.individual?.isPresent && (
              <BsPersonFill size="30px" />
            )}
            <div
              style={{
                marginTop: "3px",
              }}
            >
              <BiShareAlt
                color="#374047"
                size="24px"
                style={{ cursor: "pointer" }}
                onClick={copy}
              />
            </div>
            {favorites.includes(location_id) ? (
              <AiFillHeart
                style={{ cursor: "pointer" }}
                color="#ff4d4d"
                size="30px"
                onClick={() => {
                  setFavorites((prev) =>
                    prev.filter((element) => element !== location_id)
                  );
                }}
              />
            ) : (
              <AiOutlineHeart
                style={{ cursor: "pointer" }}
                color="#374047"
                size="30px"
                onClick={() => {
                  setFavorites((prev) => [...prev, location_id]);
                }}
              />
            )}
          </div>
          <div
            className="property-info-location"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ textAlign: x.matches ? "left" : "right" }}>(40)</div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <AiFillStar style={{ color: "#FFC736" }} size={starSize} />
              <AiFillStar style={{ color: "#FFC736" }} size={starSize} />
              <AiFillStar style={{ color: "#FFC736" }} size={starSize} />
              <AiOutlineStar style={{ color: "#FFC736" }} size={starSize} />
              <AiOutlineStar style={{ color: "#FFC736" }} size={starSize} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ImageGrid;
