import { Button } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import ReactCrop, { centerCrop, makeAspectCrop } from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

function ImageCropper(props) {
  const { imageToCrop, onImageCropped } = props;
  const [cropConfig, setCropConfig] = useState(undefined);
  const [imageRef, setImageRef] = useState();
  const [adjustOpen, setAdjustOpen] = useState(true);

  async function cropImage(crop) {
    if (imageRef && crop?.width && crop?.height) {
      const croppedImage = await getCroppedImage(
        imageRef,
        crop,
        "croppedImage.jpeg" // destination filename
      );

      onImageCropped(croppedImage);
    }
  }

  function getCroppedImage(sourceImage, cropConfig, fileName) {
    // creating the cropped image from the source image
    const canvas = document.createElement("canvas");
    const scaleX = sourceImage.naturalWidth / sourceImage.width;
    const scaleY = sourceImage.naturalHeight / sourceImage.height;
    canvas.width = cropConfig.width;
    canvas.height = cropConfig.height;
    const ctx = canvas.getContext("2d");

    ctx.drawImage(
      sourceImage,
      cropConfig.x * scaleX,
      cropConfig.y * scaleY,
      cropConfig.width * scaleX,
      cropConfig.height * scaleY,
      0,
      0,
      cropConfig.width,
      cropConfig.height
    );

    return new Promise((resolve, reject) => {
      canvas.toBlob((blob) => {
        // returning an error
        if (!blob) {
          reject(new Error("Canvas is empty"));
          return;
        }

        blob.name = fileName;
        // creating a Object URL representing the Blob object given
        const croppedImageUrl = window.URL.createObjectURL(blob);

        resolve(croppedImageUrl);
      }, "image/jpeg");
    });
  }

  function onImageLoad(e) {
    setImageRef(e.target);
    const { naturalWidth: width, naturalHeight: height } = e.currentTarget;

    const crop = centerCrop(
      makeAspectCrop(
        {
          unit: "%",
          width: 100,
        },
        16 / 9,
        width,
        height
      ),
      width,
      height
    );

    setCropConfig(crop);
  }
  useEffect(() => {
    cropImage();
  }, [cropConfig]);

  return (
    <div>
      <div
        style={{ position: "relative", maxWidth: "400px", marginTop: "5px" }}
      >
        <ReactCrop
          src={imageToCrop}
          crop={cropConfig}
          ruleOfThirds
          onComplete={(cropConfig) => cropImage(cropConfig)}
          onChange={(cropConfig, percentCrop) => setCropConfig(percentCrop)}
          crossorigin="anonymous" // to avoid CORS-related problems
          aspect={16 / 9}
        >
          {adjustOpen && <img src={imageToCrop} alt="" onLoad={onImageLoad} />}
        </ReactCrop>
      </div>
    </div>
  );
}

ImageCropper.defaultProps = {
  onImageCropped: () => {},
};

export default ImageCropper;
