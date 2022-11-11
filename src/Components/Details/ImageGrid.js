import React from "react";
import { Apps, Pending } from "@mui/icons-material";
import "./image-grid.css";

function ImageGrid({ images, openGallery }) {
  return (
    <div className="image-grid-main">
      {images ? (
        <div className="image-grid-container">
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
  );
}

export default ImageGrid;
