import { ArrowBack } from "@mui/icons-material";
import React from "react";
import { useState } from "react";
import "../../Assets/Styles/gallery.css";

const tranformGallery = (imageData) => {
  let images = [];
  for (let i = 0; i < imageData.length; i += 3) {
    images.push({
      src1: imageData[i].image,
      src2: imageData[i + 1]?.image,
      src3: imageData[i + 2]?.image,
    });
  }
  return images;
};

function Gallery({ images, closeGallery }) {
  const [gallery, setGallery] = useState(tranformGallery(images));

  return (
    <div className="gallery-main-container">
      <span className="back-arrow" onClick={closeGallery}>
        <ArrowBack />
      </span>
      <div className="gallery-wrapper">
        {gallery &&
          gallery.map((img, id) => {
            return id % 2 === 0 ? (
              <MainGalleryView
                src1={img.src1}
                src2={img.src2}
                src3={img.src3}
                defaultSrc1={images[0].image}
                defaultSrc2={images[1].image}
                key={id}
              />
            ) : (
              <SecondaryGallerView
                src1={img.src1}
                src2={img.src2}
                src3={img.src3}
                defaultSrc1={images[0].image}
                defaultSrc2={images[1].image}
                key={id}
              />
            );
          })}
      </div>
    </div>
  );
}

function MainGalleryView({ key, src1, src2, src3, defaultSrc1, defaultSrc2 }) {
  return (
    <div className="main-gallery-view-container" key={key}>
      <div className="main-gallery-view-main">
        <img src={src1} className="gallery-image" alt="main" />
      </div>
      <div className="main-gallery-view-down">
        <div style={{ flex: 1 }}>
          <img
            src={src2 || defaultSrc1}
            className="gallery-image"
            alt="first"
          />
        </div>
        <div style={{ flex: 1 }}>
          <img
            src={src3 || defaultSrc2}
            className="gallery-image"
            alt="second"
          />
        </div>
      </div>
    </div>
  );
}
function SecondaryGallerView({
  key,
  src1,
  src2,
  src3,
  defaultSrc1,
  defaultSrc2,
}) {
  return (
    <div className="secondary-gallery-view-container" key={key}>
      <div className="secondary-gallery-view-left">
        <div style={{ flex: 1 }}>
          <img src={src1} className="gallery-image" alt="main" />
        </div>
        <div style={{ flex: 1 }}>
          <img src={src2 || defaultSrc1} className="gallery-image" alt="main" />
        </div>
      </div>
      <div className="secondary-gallery-view-right">
        <img src={src3 || defaultSrc2} className="gallery-image" alt="main" />
      </div>
    </div>
  );
}

export default Gallery;
