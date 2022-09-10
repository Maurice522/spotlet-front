import React, { useState, useEffect } from "react";
import {
  addLocation,
  selectLocationData,
  selectLocationId,
} from "../../redux/slices/locationSlice";
import { createTempLocation, uploadLocationPics,  } from "../../services/api";
import { useDispatch, useSelector } from "react-redux";
const Photo = ({ showSection }) => {
  //const [files, setFiles] = useState([]);
  const [images, setImages] = useState([]);
  const dispatch = useDispatch();
  const location_id = useSelector(selectLocationId);
  const location = useSelector(selectLocationData);

	useEffect(() => {
		location.images && setImages(location.images);
	  }, [])


  const handleChange = async(e) => {
    try {
        for (let i = 0; i <e.target.files.length; i++) {
            //console.log(e.target.files[i]);
            const formData = new FormData();
            formData.append("pic", e.target.files[i]);
            const response = await uploadLocationPics(formData);
            setImages(prev => [...prev, response.data.url]);
        }
    } catch (error) {
        console.log(error);
    }
    
  };
  const handleClick = () => {
    document.getElementById("inputD").click();
  };
  return (
    <div>
      <div className="lbox">
        <div className="row1">
          <div className="uploadImage">
            <div className="button1" onClick={handleClick}>
              {" "}
              <h2>Upload Image</h2>
              <input
                type="file"
                accept="image/*"
                multiple
                id="inputD"
                className="inputD"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <p style={{ marginLeft: "20px" }}>Add minimum 6 images</p>
        <div className="row1" id="photo-sec-s">
          {images?.map((image) => {
            return (
              <div className="pict">
                <img src={image} />{" "}
              </div>
            );
          })}
        </div>
        <div className="row1">
          <div className="coll1">
            <button
              className="continue"
              onClick={async () => {
                const locData = {
                  ...location,
                  images,
                };
                dispatch(addLocation(locData));
                const form = {
                  location_id,
                  data: locData,
                };
                await createTempLocation(form);
              //  console.log(locData);
                showSection("Features");
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
