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
import { Clear, Delete, Done, Upload } from "@mui/icons-material";
import ImageCropper from "./ImageCropper";

const Photo = ({ showSection, changeSection }) => {
  const [files, setFiles] = useState({});
  const [imagesData, setImagesData] = useState([]);
  const dispatch = useDispatch();
  const location_id = useSelector(selectLocationId);
  const location = useSelector(selectLocationData);

  useEffect(() => {
    if (location) location.imagesData && setImagesData(location.imagesData);
  }, []);

  const handleSubmit = async (e) => {
    try {
      const fileNames = Object.keys(files);
      for (let i = 0; i < fileNames.length; i++) {
        const flobj = files[fileNames[i]];
        if (flobj.uploaded) continue;
        const formData = new FormData();
        formData.append("pic", flobj.file);
        const response = await uploadLocationPics(formData);
        setImagesData((prev) => [
          ...prev,
          {
            image: response.data.url,
            imageRef: response.data.fileRef,
            fileName: fileNames[i],
          },
        ]);
        setFiles((prevData) => {
          prevData[fileNames[i]].uploaded = true;
          return { ...prevData };
        });
        toast.success(`${fileNames[i]} has been uploaded`, 300);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const saveCropImages = (fileName, newCropped) => {
    setFiles((prevData) => {
      prevData[fileName].croppedImage = newCropped;
      return { ...prevData };
    });
  };

  const previewToggle = (fileName) => {
    setFiles((prevData) => {
      prevData[fileName].preview = !prevData[fileName].preview;
      return { ...prevData };
    });
  };

  const onUploadFile = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      setFiles((prevFiles) => {
        const filesToAdd = [...event.target.files];
        const imageObj = {};
        filesToAdd.forEach((file) => {
          imageObj[file.name] = {
            file,
            imageSrc: URL.createObjectURL(file),
            croppedImage: "",
            preview: false,
            uploaded: false,
          };
        });
        return { ...prevFiles, ...imageObj };
      });
    }
  };

  const handleDelete = async (fileName) => {
    if (files[fileName].uploaded) {
      const fileToBeDeletd = imagesData.find(
        (data) => data.fileName === fileName
      );
      if (fileToBeDeletd) deleteImage(fileToBeDeletd);
    }
    setFiles((prevData) => {
      delete prevData[fileName];
      return { ...prevData };
    });
  };

  const handleClick = () => {
    document.getElementById("inputD").click();
  };
  // console.log(refs)
  const deleteImage = async (imageData, index) => {
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
              <h2>Select Image</h2>
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
        {Object.keys(files).map((fileName) => {
          const { imageSrc, croppedImage, preview, uploaded } = files[fileName];
          return (
            <div className="image-file-container">
              <div
                style={{ display: "flex", gap: "30px", alignItems: "center" }}
              >
                <p>{fileName}</p>
                {uploaded && <Done sx={{ color: "green" }} />}
                <Delete
                  sx={{ cursor: "pointer" }}
                  onClick={() => handleDelete(fileName)}
                />
              </div>
              <ImageCropper
                imageToCrop={imageSrc}
                onImageCropped={(croppedImage) =>
                  saveCropImages(fileName, croppedImage)
                }
                onChangePreview={() => previewToggle(fileName)}
                croppedImage={croppedImage}
                preview={preview}
              />
              {croppedImage && preview && (
                <div style={{ marginBottom: "10px" }}>
                  <p style={{ marginBottom: "5px" }}>Cropped Image</p>
                  <img alt="Cropped" src={croppedImage} />
                </div>
              )}
            </div>
          );
        })}
        <p>Add minimum 5 images</p>
        <div className="row1">
          <button className="continue" onClick={handleSubmit}>
            <Upload /> Upload Files
          </button>
          <div className="coll1">
            <button
              className="continue"
              onClick={async () => {
                if (imagesData.length < 5)
                  return toast.error("Please add minimum 5 Photos");
                const images = imagesData.map((imageData) => imageData.image);
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
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photo;