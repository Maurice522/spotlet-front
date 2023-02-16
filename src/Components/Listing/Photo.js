
// import React, { useState, useEffect } from "react";
// import {
// 	addLocation,
// 	selectLocationData,
// 	selectLocationId,
// } from "../../redux/slices/locationSlice";
// import {
// 	createTempLocation,
// 	deleteFiles,
// 	uploadLocationPics,
// } from "../../services/api";
// import { useDispatch, useSelector } from "react-redux";
// import { toast } from "react-toastify";
// import { Clear } from "@mui/icons-material";
// const Photo = ({ showSection, changeSection }) => {
// 	const [imagesData, setImagesData] = useState([]);
// 	const dispatch = useDispatch();
// 	const location_id = useSelector(selectLocationId);
// 	const location = useSelector(selectLocationData);

// 	useEffect(() => {
// 		if (location)
// 			location.imagesData && setImagesData(location.imagesData);
// 	}, []);

// 	const handleChange = async (e) => {
// 		try {
// 			for (let i = 0; i < e.target.files.length; i++) {
// 				const formData = new FormData();
// 				formData.append("pic", e.target.files[i]);
// 				const response = await uploadLocationPics(formData);
// 				setImagesData((prev) => [
// 					...prev,
// 					{ image: response.data.url, imageRef: response.data.fileRef },
// 				]);
// 			}
// 		} catch (error) {
// 			console.log(error);
// 		}
// 	};
// 	const handleClick = () => {
// 		document.getElementById("inputD").click();
// 	};
// 	const deleteImage = async (imageData, index) => {
// 		console.log(imageData);
// 		try {
// 			await deleteFiles({
// 				image: imageData.image,
// 				fileRef: imageData.imageRef,
// 			});
// 			const newImageData = imagesData.filter((img, i) => i !== index);
// 			setImagesData(newImageData);
// 		} catch (error) {
// 			toast.error(error.response.data);
// 		}
// 	};
// 	return (
// 		<div>
// 			<div className="lbox">
// 				<div className="row1">
// 					<div className="uploadImage">
// 						<div className="button1" onClick={handleClick}>
// 							{" "}
// 							<h2>Upload Image</h2>
// 							<input
// 								type="file"
// 								accept="image/*"
// 								multiple
// 								id="inputD"
// 								className="inputD"
// 								onChange={handleChange}
// 							/>
// 						</div>
// 					</div>
// 				</div>
// 				<p style={{ marginLeft: "20px" }}>Add minimum 5 images</p>
// 				<div className="row1" id="photo-sec-s">
// 					{imagesData?.map((imageData, index) => {
// 						return (
// 							<div className="pict" key={index}>
// 								<Clear
// 									sx={{
// 										cursor: "pointer",
// 										marginLeft: "407px",
// 										marginTop: "5px",
// 										position: "absolute",
// 									}}
// 									onClick={() => deleteImage(imageData, index)}
// 								/>
// 								<img src={imageData.image} />{" "}
// 							</div>
// 						);
// 					})}
// 				</div>
// 				<div className="row1">
// 					<div className="coll1">
// 						<button
// 							className="continue"
// 							onClick={async () => {
// 								if (imagesData.length < 5)
// 									return toast.error("Please add minimum 5 Photos");
// 								const images = imagesData.map((imageData) => imageData.image);
// 								console.log(images);
// 								const locData = {
// 									...location,
// 									images,
// 								};
// 								dispatch(addLocation({ ...location, imagesData }));
// 								const form = {
// 									location_id,
// 									data: locData,
// 								};
// 								await createTempLocation(form);
// 								showSection("Features");
// 								if (imagesData.length === 5) {
// 									changeSection("Features");
// 									window.scrollTo(0, 0);
// 								}
// 							}}>
// 							Continue
// 						</button>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default Photo;

import React, { useState, useEffect } from "react";
import {
  addLocation,
  selectLocationData,
  selectLocationId,
} from "../../redux/slices/locationSlice";
import {
  createTempLocation,
  deleteFiles,
  uploadLocationPics,
} from "../../services/api";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Clear } from "@mui/icons-material";
import ImageCropper from "./ImageCropper";

const Photo = ({ showSection, changeSection }) => {
  const [files, setFiles] = useState([]);
  const [imagesData, setImagesData] = useState([]);
  const dispatch = useDispatch();
  const location_id = useSelector(selectLocationId);
  const location = useSelector(selectLocationData);
  const [imageToCrop, setImageToCrop] = useState(undefined);
  const [croppedImage, setCroppedImage] = useState(undefined);
  const [preview, setPreview] = useState(false);

  useEffect(() => {
    if (location) location.imagesData && setImagesData(location.imagesData);
  }, []);

  const handleChange = async (e) => {
    try {
      for (let i = 0; i < e.target.files.length; i++) {
        //console.log(e.target.files[i]);
        const formData = new FormData();
        formData.append("pic", e.target.files[i]);
        const response = await uploadLocationPics(formData);
        setImagesData((prev) => [
          ...prev,
          { image: response.data.url, imageRef: response.data.fileRef },
        ]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onUploadFile = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      setFiles((prevFiles) => [...prevFiles, ...event.target.files]);
    }
  };

  const handleClick = () => {
    document.getElementById("inputD").click();
  };
  // console.log(refs)
  const deleteImage = async (imageData, index) => {
    console.log(imageData);
    try {
      await deleteFiles({
        image: imageData.image,
        fileRef: imageData.imageRef,
      });
      const newImageData = imagesData.filter((img, i) => i !== index);
      setImagesData(newImageData);
    } catch (error) {
      toast.error(error.response.data);
    }
  };
  return (
    <div>
      <div className="lbox">
        <div className="row1">
          <div className="uploadImage">
            <div className="button1" onClick={handleClick}>
              <h2>Upload Image</h2>
              <input
                type="file"
                accept="image/*"
                multiple
                id="inputD"
                className="inputD"
                onChange={onUploadFile}
              />
            </div>
          </div>
        </div>
        <div>
          <ImageCropper
            imageToCrop={files[0] && URL.createObjectURL(files[0])}
            onImageCropped={(croppedImage) => setCroppedImage(croppedImage)}
            onChangePreview={() => setPreview(!preview)}
            croppedImage={croppedImage}
          />
        </div>
        {croppedImage && preview && (
          <div>
            <h2>Cropped Image</h2>
            <img alt="Cropped" src={croppedImage} />
          </div>
        )}
        <p style={{ marginLeft: "20px" }}>Add minimum 5 images</p>
        <div className="row1" id="photo-sec-s">
          {imagesData?.map((imageData, index) => {
            return (
              <div className="pict" key={index}>
                <Clear
                  sx={{
                    cursor: "pointer",
                    marginLeft: "407px",
                    marginTop: "5px",
                    position: "absolute",
                  }}
                  onClick={() => deleteImage(imageData, index)}
                />
                <img src={imageData.image} />{" "}
              </div>
            );
          })}
        </div>
        <div className="row1">
          <div className="coll1">
            <button
              className="continue"
              onClick={async () => {
                if (imagesData.length < 5)
                  return toast.error("Please add minimum 5 Photos");
                const images = imagesData.map((imageData) => imageData.image);
                console.log(images);
                const locData = {
                  ...location,
                  images,
                };
                dispatch(addLocation({ ...location, imagesData }));
                const form = {
                  location_id,
                  data: locData,
                };
                await createTempLocation(form);
                //  console.log(locData);
                showSection("Features");
                if (imagesData.length === 5) {
                  changeSection("Features");
                  window.scrollTo(0, 0);
                }
              }}
            >
              Continuee
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photo;
